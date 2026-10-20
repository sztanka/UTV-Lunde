/* Renderer for okt.html. Innholdet ligger i data/okt-XX.js (se README.md). */
(function () {
  'use strict';
  function h(tag, attrs) {
    var e = document.createElement(tag), a = attrs || {};
    Object.keys(a).forEach(function (k) {
      var v = a[k];
      if (v == null || v === false) return;
      if (k === 'class') e.className = v;
      else if (k.indexOf('on') === 0) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    });
    Array.prototype.slice.call(arguments, 2).forEach(function add(kid) {
      if (kid == null || kid === false) return;
      if (Array.isArray(kid)) return kid.forEach(add);
      e.append(kid.nodeType ? kid : document.createTextNode(kid));
    });
    return e;
  }
  function rich(text) {
    var f = document.createDocumentFragment();
    String(text).split(/(\*\*[^*]+\*\*)/g).forEach(function (p) {
      if (/^\*\*.+\*\*$/.test(p)) f.append(h('strong', null, p.slice(2, -2)));
      else if (p) f.append(document.createTextNode(p));
    });
    return f;
  }

  var params = new URLSearchParams(location.search);
  var id = (params.get('id') || '').replace(/[^0-9a-z-]/gi, '');
  var root = document.getElementById('app');

  function feil(msg) {
    root.replaceChildren(h('div', { class: 'feil' },
      h('h1', null, 'Finner ikke økten'),
      h('p', null, msg),
      h('p', null, h('a', { href: 'index.html' }, 'Tilbake til alle øktene'))));
  }
  if (!id) return feil('Adressen mangler økt-nummer.');

  var s = document.createElement('script');
  s.src = 'data/okt-' + id + '.js?v=' + (window.UTV_VERSJON || '');
  s.onload = function () { if (window.UTV_OKT) start(window.UTV_OKT); else feil('Filen ble lastet, men inneholdt ingen økt.'); };
  s.onerror = function () { feil('Økt ' + id + ' er ikke lagt inn ennå.'); };
  document.head.append(s);

  function start(okt) {
    document.title = 'Økt ' + okt.nr + ' – ' + okt.tittel;
    document.body.className = 'g-' + okt.gruppe;
    var KEY = 'utv-okt-' + id, store = {}, reg = [];
    try { store = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { store = {}; }
    function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* privat modus */ } }

    /* ---------- skjemablokker ---------- */
    function feltBlokk(b, ctx) {
      var fid = ctx.idp + b.id, elId = 'f-' + fid;
      var el = (b.rader || 1) > 1
        ? h('textarea', { id: elId, rows: b.rader })
        : h('input', { id: elId, type: 'text', autocomplete: 'off' });
      el.value = store[fid] || '';
      el.addEventListener('input', function () { store[fid] = el.value; save(); });
      reg.push({ steg: ctx.steg, group: ctx.group, title: !!b.tittel, label: b.label, read: function () { return el.value.trim(); } });
      return h('div', { class: 'felt-wrap' },
        h('label', { class: 'felt', 'for': elId },
          h('span', { class: 'felt-label' }, b.label),
          b.hint && h('span', { class: 'felt-hint' }, b.hint)),
        el);
    }
    function listeBlokk(b, ctx) {
      var fid = ctx.idp + b.id, arr = store[fid] || [];
      var inputs = [];
      var wrap = h('div', { class: 'felt-wrap listefelt', role: 'group', 'aria-labelledby': 'l-' + fid },
        h('span', { class: 'felt-label', id: 'l-' + fid }, b.label),
        b.hint && h('span', { class: 'felt-hint' }, b.hint));
      for (var i = 0; i < b.antall; i++) (function (i) {
        var inp = h('input', { type: 'text', autocomplete: 'off', placeholder: b.plassholder || '', 'aria-label': b.label + ' nr. ' + (i + 1) });
        inp.value = arr[i] || '';
        inp.addEventListener('input', function () {
          store[fid] = inputs.map(function (x) { return x.value; }); save();
        });
        inputs.push(inp);
        wrap.append(h('div', { class: 'rad' }, h('b', { 'aria-hidden': 'true' }, String(i + 1)), inp));
      })(i);
      reg.push({ steg: ctx.steg, group: ctx.group, label: b.label, read: function () {
        return inputs.map(function (x) { return x.value.trim(); }).filter(Boolean).map(function (v, n) { return (n + 1) + '. ' + v; }).join('\n');
      } });
      return wrap;
    }
    function valgBlokk(b, ctx) {
      var fid = ctx.idp + b.id, sel = new Set(store[fid] || []);
      var grupper = b.grupper || [{ tittel: '', valg: b.valg }];
      var teller = h('div', { class: 'teller', 'aria-live': 'polite' }), chipRefs = [];
      function oppdater() {
        chipRefs.forEach(function (r) { r.c.setAttribute('aria-pressed', sel.has(r.v) ? 'true' : 'false'); });
        teller.textContent = b.maks === 1 ? '' : (sel.size ? (b.maks ? 'Valgt: ' + sel.size + ' av maks ' + b.maks : 'Valgt: ' + sel.size) : (b.maks ? 'Velg maks ' + b.maks : ''));
      }
      var wrap = h('div', { class: 'felt-wrap', role: 'group', 'aria-labelledby': 'l-' + fid },
        h('span', { class: 'felt-label', id: 'l-' + fid }, b.label),
        b.hint && h('span', { class: 'felt-hint' }, b.hint));
      grupper.forEach(function (g) {
        wrap.append(h('div', { class: 'valggruppe' },
          g.tittel && h('h4', null, g.tittel),
          h('div', { class: 'chips' }, g.valg.map(function (v) {
            var c = h('button', { type: 'button', class: 'chip', 'aria-pressed': sel.has(v) ? 'true' : 'false' }, v);
            chipRefs.push({ c: c, v: v });
            c.addEventListener('click', function () {
              if (sel.has(v)) sel['delete'](v);
              else { if (b.maks && sel.size >= b.maks) sel['delete'](sel.values().next().value); sel.add(v); }
              store[fid] = Array.from(sel); save(); oppdater();
            });
            return c;
          }))));
      });
      wrap.append(teller); oppdater();
      reg.push({ steg: ctx.steg, group: ctx.group, label: b.label, read: function () {
        return grupper.map(function (g) {
          var v = g.valg.filter(function (x) { return sel.has(x); });
          if (!v.length) return '';
          return (g.tittel ? g.tittel + ': ' : '') + v.join(', ');
        }).filter(Boolean).join('\n');
      } });
      return wrap;
    }
    function sorterBlokk(b, ctx) {
      var fid = ctx.idp + b.id, map = store[fid] || {};
      var teller = h('div', { class: 'teller', 'aria-live': 'polite' });
      var wrap = h('div', { class: 'felt-wrap sorter', role: 'group', 'aria-labelledby': 'l-' + fid },
        h('span', { class: 'felt-label', id: 'l-' + fid }, b.label),
        b.hint && h('span', { class: 'felt-hint' }, b.hint));
      var refs = [];
      function oppdater() {
        refs.forEach(function (r) { r.c.setAttribute('aria-pressed', (map[r.el] || []).indexOf(r.k) > -1 ? 'true' : 'false'); });
        if (b.teller) {
          var n = Object.keys(map).filter(function (e) { return (map[e] || []).indexOf(b.teller.kategori) > -1; }).length;
          teller.textContent = n > b.teller.maks
            ? 'Du har ' + n + ' på «' + b.teller.kategori + '». Flytt noen, så du bare har ' + b.teller.maks + '.'
            : (n ? n + ' på «' + b.teller.kategori + '» (maks ' + b.teller.maks + ')' : '');
        }
      }
      b.elementer.forEach(function (el) {
        var seg = h('div', { class: 'seg' }, b.kategorier.map(function (k) {
          var c = h('button', { type: 'button', class: 'chip', 'aria-pressed': 'false' }, k);
          refs.push({ c: c, el: el, k: k });
          c.addEventListener('click', function () {
            var cur = map[el] || [], i = cur.indexOf(k);
            if (b.flere) { if (i > -1) cur.splice(i, 1); else cur.push(k); } else { cur = i > -1 ? [] : [k]; }
            if (cur.length) map[el] = cur; else delete map[el];
            store[fid] = map; save(); oppdater();
          });
          return c;
        }));
        wrap.append(h('div', { class: 'sorterrad' }, h('span', { class: 'sorter-navn' }, el), seg));
      });
      wrap.append(teller); oppdater();
      reg.push({ steg: ctx.steg, group: ctx.group, label: b.label, read: function () {
        return b.kategorier.map(function (k) {
          var v = b.elementer.filter(function (el) { return (map[el] || []).indexOf(k) > -1; });
          return v.length ? k + ': ' + v.join(', ') : '';
        }).filter(Boolean).join('\n');
      } });
      return wrap;
    }
    function gjentaBlokk(b, ctx) {
      var out = h('div', { class: 'blokk' });
      var n = b.titler ? b.titler.length : b.antall;
      for (var i = 1; i <= n; i++) {
        var grp = b.titler ? b.titler[i - 1] : b.tittel + ' ' + i;
        var c2 = { steg: ctx.steg, idp: ctx.idp + b.id + '-' + i + '-', group: grp };
        out.append(h('section', { class: 'skrivekort' },
          h('h3', null, grp),
          b.felt.map(function (f) { return blokk(f, c2); })));
      }
      return out;
    }

    /* ---------- visningsblokker ---------- */
    function liste(items, nummerert) { return h(nummerert ? 'ol' : 'ul', null, items.map(function (t) { return h('li', null, rich(t)); })); }
    function blokk(b, ctx) {
      switch (b.type) {
        case 'felt': return feltBlokk(b, ctx);
        case 'liste-felt': return listeBlokk(b, ctx);
        case 'valg': return valgBlokk(b, ctx);
        case 'gjenta': return gjentaBlokk(b, ctx);
        case 'sorter': return sorterBlokk(b, ctx);
        case 'tekst': return h('div', { class: 'blokk' }, b.tittel && h('p', { class: 'tittel' }, b.tittel), b.avsnitt.map(function (t) { return h('p', null, rich(t)); }));
        case 'liste': return h('div', { class: 'blokk' }, b.tittel && h('p', { class: 'tittel' }, b.tittel), liste(b.punkter, b.nummerert));
        case 'poeng': return h('div', { class: 'blokk' }, h('div', { class: 'poeng' }, h('p', null, rich(b.tekst))));
        case 'sitat': return h('div', { class: 'blokk' }, h('blockquote', { class: 'sitat', style: 'margin-left:0' }, rich(b.tekst), b.kilde && h('small', null, b.kilde)));
        case 'snakk': return h('div', { class: 'blokk snakk' },
          h('p', { class: 'tittel' }, b.tittel || 'Snakk sammen'),
          b.intro && h('p', null, rich(b.intro)),
          b.sporsmal && h('ul', null, b.sporsmal.map(function (t) { return h('li', null, rich(t)); })));
        case 'instruks': return h('div', { class: 'blokk' }, h('div', { class: 'instruks' },
          b.tid && h('span', { class: 'tid' }, b.tid),
          h('div', null, (b.avsnitt || [b.tekst]).map(function (t) { return h('p', null, rich(t)); }), b.punkter && liste(b.punkter, b.nummerert))));
        case 'kort': return h('div', { class: 'blokk kortrad' }, b.kort.map(function (k) {
          return h('div', { class: 'kort' }, h('h3', null, k.tittel), k.tekst && h('p', null, rich(k.tekst)), k.punkter && liste(k.punkter));
        }));
        case 'ord': return h('div', { class: 'blokk' }, b.tittel && h('p', { class: 'tittel' }, b.tittel), h('ul', { class: 'ord' }, b.ord.map(function (w) { return h('li', null, w); })));
        case 'flyt': return h('div', { class: 'blokk' }, b.tittel && h('p', { class: 'tittel' }, b.tittel),
          h('ul', { class: 'flyt' }, b.trinn.map(function (t, i) { return [i ? h('li', { class: 'pil', 'aria-hidden': 'true' }, '→') : null, h('li', null, t)]; })));
        case 'avslor': return h('div', { class: 'blokk' }, h('details', { class: 'avslor' },
          h('summary', null, b.sporsmal), h('div', { class: 'svar' }, (b.svar instanceof Array ? b.svar : [b.svar]).map(function (t) { return h('p', null, rich(t)); }))));
        case 'lenke': return h('div', { class: 'blokk' }, h('a', { class: 'lenkeboks', href: b.url, target: '_blank', rel: 'noopener' }, b.tekst, b.merknad && h('small', null, b.merknad)));
      }
      return null;
    }

    /* ---------- side ---------- */
    var innhold = h('div', { class: 'innhold' });
    var navn = h('input', { id: 'f-navn', type: 'text', autocomplete: 'off' });
    navn.value = store.__navn || '';
    navn.addEventListener('input', function () { store.__navn = navn.value; save(); });
    innhold.append(h('div', { class: 'navnrad' }, h('label', { 'for': 'f-navn' }, h('span', { class: 'felt-label' }, 'Navn og klasse'), h('span', { class: 'felt-hint' }, 'Valgfritt. Kommer først i det du kopierer.')), navn));

    if (okt.mal) innhold.append(h('section', { class: 'steg', id: 'mal' },
      h('header', null, h('h2', null, 'Dette skal du lære')),
      h('div', { class: 'blokk' }, liste(okt.mal, true))));

    var skinne = h('ol');
    okt.steg.forEach(function (st, i) {
      var sid = 'steg-' + (i + 1);
      var sec = h('section', { class: 'steg', id: sid, 'aria-labelledby': sid + '-h' },
        h('header', null, h('span', { class: 'sn', 'aria-hidden': 'true' }, String(i + 1)), h('h2', { id: sid + '-h' }, st.tittel), st.tid && h('span', { class: 'tid' }, st.tid)));
      st.blokker.forEach(function (b) { var n = blokk(b, { steg: st.tittel, idp: sid + '-', group: '' }); if (n) sec.append(n); else if (window.console) console.warn('Ukjent blokktype:', b.type); });
      innhold.append(sec);
      skinne.append(h('li', null, h('a', { href: '#' + sid }, st.tittel)));
    });

    /* avslutning: kopier */
    var status = h('div', { class: 'status', role: 'status' });
    var forhandsvis = h('pre');
    function bygg() {
      var L = ['Økt ' + okt.nr + ' – ' + okt.tittel];
      if (navn.value.trim()) L.push('Navn: ' + navn.value.trim());
      var titles = {};
      reg.forEach(function (e) { if (e.title && e.group) titles[e.group] = e.read(); });
      var curS = null, curG = null, any = false;
      reg.forEach(function (e) {
        var v = e.read(); if (!v) return;
        any = true;
        if (e.steg !== curS) { L.push('', '## ' + e.steg); if (!e.group) L.push(''); curS = e.steg; curG = null; }
        if (e.group !== curG) { if (e.group) L.push('', e.group + (titles[e.group] ? ': ' + titles[e.group] : '')); curG = e.group; }
        if (e.title) return;
        L.push(v.indexOf('\n') > -1 ? e.label + ':\n' + v : e.label + ': ' + v);
      });
      if (!any) L.push('', '(Ingenting er skrevet ennå.)');
      return L.join('\n');
    }
    function kopier() {
      var t = bygg(); forhandsvis.textContent = t;
      function ok() { status.textContent = 'Kopiert. Lim inn der læreren din ber om det.'; }
      function fallback() {
        var ta = h('textarea', { style: 'position:fixed;left:-999px' }); ta.value = t; document.body.append(ta); ta.select();
        try { document.execCommand('copy') ? ok() : (status.textContent = 'Kunne ikke kopiere. Åpne «Se hva som blir kopiert» og kopier derfra.'); } catch (e) { status.textContent = 'Kunne ikke kopiere. Åpne «Se hva som blir kopiert» og kopier derfra.'; }
        ta.remove();
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ok, fallback); else fallback();
    }
    function slett() {
      if (!confirm('Slette alt du har skrevet i denne økten?')) return;
      try { localStorage.removeItem(KEY); } catch (e) { /* */ }
      location.reload();
    }
    var knappKopier = h('button', { type: 'button', class: 'knapp primaer stor', onclick: kopier }, 'Kopier svarene mine');
    var ferdig = h('section', { class: 'ferdig', id: 'ferdig' },
      h('h2', null, 'Ferdig? Ta med svarene dine'),
      h('p', null, 'Svarene lagres bare i denne nettleseren, på denne maskinen. Trykk på knappen, og lim inn teksten i det dokumentet eller den innleveringen læreren din bruker.'),
      h('div', { class: 'knapper' }, knappKopier,
        h('button', { type: 'button', class: 'knapp rolig', onclick: function () { window.print(); } }, 'Skriv ut / lagre som PDF'),
        h('button', { type: 'button', class: 'knapp rolig', onclick: slett }, 'Slett alt jeg har skrevet')),
      status,
      h('details', { ontoggle: function () { forhandsvis.textContent = bygg(); } }, h('summary', null, 'Se hva som blir kopiert'), forhandsvis));
    innhold.append(ferdig);
    skinne.append(h('li', null, h('a', { href: '#ferdig' }, 'Kopier svarene')));

    root.replaceChildren(
      h('header', { class: 'topplinje' }, h('div', { class: 'wrap' },
        h('a', { class: 'tilbake', href: 'index.html' }, '← Alle øktene'),
        h('span', { class: 'mellom' }, 'Økt ' + okt.nr + ' · ' + okt.tittel),
        h('button', { type: 'button', class: 'knapp primaer', onclick: kopier }, 'Kopier svar'))),
      h('div', { class: 'hero' }, h('div', { class: 'wrap' },
        h('div', { class: 'stortall', 'aria-hidden': 'true' }, h('small', null, 'Økt'), okt.nrTekst || String(okt.nr)),
        h('div', { class: 'tekstboks' }, h('h1', null, okt.tittel), okt.ingress && h('p', null, okt.ingress)))),
      h('main', { class: 'side' }, h('nav', { class: 'skinne', 'aria-label': 'Stegene i økten' }, skinne), innhold));

    /* markér aktivt steg i skinnen */
    if ('IntersectionObserver' in window) {
      var links = {}; skinne.querySelectorAll('a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            Object.keys(links).forEach(function (k) { links[k].removeAttribute('aria-current'); });
            if (links[e.target.id]) links[e.target.id].setAttribute('aria-current', 'true');
          }
        });
      }, { rootMargin: '-90px 0px -60% 0px' });
      innhold.querySelectorAll('section.steg[id^="steg-"], #ferdig').forEach(function (n) { io.observe(n); });
    }
  }
})();
