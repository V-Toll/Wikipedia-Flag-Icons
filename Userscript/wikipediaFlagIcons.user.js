// ==UserScript==
// @name            Wikipedia Flag Icons
// @description     Display flag icons to Wikipedia languages list on left sidebar.
// @icon            http://en.wikipedia.org/favicon.ico
// @version         2020.04.01 (2.0)
// @namespace       wikiflagicons
// @author          https://github.com/DavideViolante/
// @downloadURL     https://github.com/DavideViolante/Wikipedia-Flag-Icons/raw/master/Userscript/wikipediaFlags.user.js
// @grant           none
// @include         http*://*.wikipedia.org/*
// @include         http*://*.wikimedia.org/*
// @include         http*://*.wiktionary.org/*
// @include         http*://*.wikibooks.org/*
// @include         http*://*.wikidata.org/*
// @include         http*://*.wikinews.org/*
// @include         http*://*.wikiquote.org/*
// @include         http*://*.wikisource.org/*
// @include         http*://*.wikiversity.org/*
// @include         http*://*.wikivoyage.org/*
// ==/UserScript==

// Flag icons by http://www.famfamfam.com/lab/icons/flags/

// Customize the following 2 parameters
const primaryLang = 'de';
const secondaryLang = 'en';

const flagUrl = 'https://github.com/V-Toll/Wikipedia-Flag-Icons/tree/master/Chrome%20Extension/WikipediaFlagIcons/flags';

function getFirstElemByClassName(className) {
  return document.getElementsByClassName(className)[0];
}

(function () {

  const currentUrl = window.location.href;
  const flagLangCode = {
    aa: 'aa', ab: 'ab', ace: 'ace', af: 'af', ak: 'ak', als: 'als', am: 'am', an: 'an', ang: 'ang', ar: 'ar', arc: 'arc', arz: 'arz', as: 'as', ast: 'ast', av: 'av', ay: 'ay', az: 'az', ba: 'ba', bar: 'bar', bat-smg: 'bat-smg', bcl: 'bcl', be-tarask: 'be-tarask', be: 'be', bg: 'bg', bh: 'bh', bi: 'bi', bjn: 'bjn', bm: 'bm', bn: 'bn', bo: 'bo', bpy: 'bpy', br: 'br', bs: 'bs', bug: 'bug', bxr: 'bxr', ca: 'ca', cbk-zam: 'cbk-zam', cdo: 'cdo', ce: 'ce', ceb: 'ceb', ch: 'ch', cho: 'cho', chr: 'chr', chy: 'chy', ckb: 'ckb', co: 'co', cr: 'cr', crh: 'crh', cs: 'cs', csb: 'csb', cu: 'cu', cv: 'cv', cy: 'cy', da: 'da', de: 'de', diq: 'diq ', dsb: 'dsb', dv: 'dv', dz: 'dz', ee: 'ee', el: 'el', eml: 'eml', eo: 'eo', es: 'es', et: 'et', eu: 'eu', ext: 'ext', fa: 'fa', ff: 'ff', fi: 'fi', fiu-vro: 'fiu-vro', fj: 'fj', fo: 'fo', fr: 'fr', frp: 'frp', frr: 'frr', fur: 'fur', fy: 'fy', ga: 'ga', gag: 'gag', gan: 'gan', gd: 'gd', gl: 'gl', glk: 'glk', gn: 'gn', got: 'got', gu: 'gu', gv: 'gv', ha: 'ha', hak: 'hak', haw: 'haw', he: 'he', hi: 'hi', hif: 'hif', ho: 'ho', hr: 'hr', hsb: 'hsb', ht: 'ht', hu: 'hu', hy: 'hy', hz: 'hz', ia: 'ia', id: 'id', ie: 'ie', ig: 'ig', ii: 'ii', ik: 'ik', ilo: 'ilo', io: 'io', is: 'is', it: 'it', iu: 'iu', ja: 'ja', jbo: 'jbo', jv: 'jv', ka: 'ka', kaa: 'kaa', kab: 'kab', kbd: 'kbd', kg: 'kg', ki: 'ki', kj: 'kj', kk: 'kk', kl: 'kl', km: 'km', kn: 'kn', ko: 'ko', koi: 'koi', kr: 'kr', krc: 'krc', ks: 'ks', ksh: 'ksh', ku: 'ku', kv: 'kv', kw: 'kw', ky: 'ky', la: 'la', lad: 'lad', lb: 'lb', lbe: 'lbe', lez: 'lez', lg: 'lg', li: 'li', lij: 'lij', lmo: 'lmo', ln: 'ln', lo: 'lo', lt: 'lt', ltg: 'ltg', lv: 'lv', map-bms: 'map-bms', mdf: 'mdf', mg: 'mg', mh: 'mh', mhr: 'mhr', mi: 'mi', min: 'min', mk: 'mk', ml: 'ml', mn: 'mn ', mo: 'mo', mr: 'mr', mrj: 'mrj', ms: 'ms', mt: 'mt', mus: 'mus', mwl: 'mwl', my: 'my', myv: 'myv', mzn: 'mzn', na: 'na', nah: 'nah', nan: 'nan', nap: 'nap', nds-nl: 'nds-nl', nds: 'nds', ne: 'ne', new: 'new', ng: 'ng', nl: 'nl', nn: 'nn', no: 'no', nov: 'nov', nrm: 'nrm', nso: 'nso', nv: 'nv', ny: 'ny', oc: 'oc', om: 'om', or: 'or', os: 'os', pa: 'pa', pag: 'pag', pam: 'pam', pap: 'pap', pcd: 'pcd', pdc: 'pdc', pfl: 'pfl', pi: 'pi', pih: 'pih', pl: 'pl', pms: 'pms', pnb: 'pnb', pnt: 'pnt', ps: 'ps', pt: 'pt', qu: 'qu', rm: 'rm', rmy: 'rmy', rn: 'rn', ro: 'ro', roa-rup: 'roa-rup', roa-tara: 'roa-tara', ru: 'ru', rue: 'rue', rw: 'rw', sa: 'sa', sah: 'sah', sc: 'sc', scn: 'scn', sco: 'sco', sd: 'sd', se: 'se', sg: 'sg', sh: 'sh', si: 'si', simple: 'simple', sk: 'sk', sl: 'sl', sm: 'sm', sn: 'sn', so: 'so', sq: 'sq', sr: 'sr', srn: 'srn', ss: 'ss', st: 'st', stq: 'stq', su: 'su', sv: 'sv', sw: 'sw', szl: 'szl', ta: 'ta', te: 'te', tet: 'tet', tg: 'tg', th: 'th', ti: 'ti', tk: 'tk', tl: 'tl', tn: 'tn', to: 'to', tpi: 'tpi', tr: 'tr', ts: 'ts', tt: 'tt', tum: 'tum', tw: 'tw', ty: 'ty', udm: 'udm', ug: 'ug', uk: 'uk', ur: 'ur', uz: 'uz', ve: 've', vec: 'vec', vep: 'vep', vi: 'vi', vls: 'vls', vo: 'vo', wa: 'wa', war: 'war', wo: 'wo', wuu: 'wuu', xal: 'xal', xh: 'xh', xmf: 'xmf', yi: 'yi', yo: 'yo', za: 'za', zea: 'zea', zh-classical: 'zh-classical', zh-yue: 'zh-yue', zh: 'zh', zu: 'zu'
  };

  // For each language add the img element with the flag
  for (const prop in flagLangCode) {
    const spanElem1 = document.createElement('span');
    const langElem = getFirstElemByClassName(`interlanguage-link interwiki-${prop}`);
    if (langElem) {
      langElem.insertBefore(spanElem1, langElem.firstChild);
      spanElem1.innerHTML = `<img src="${flagUrl}${flagLangCode[prop]}.png" alt="${flagLangCode[prop]}" title="${flagLangCode[prop]}"> `;
    }
  }

  // Show the current flag near the title
  const currentLang = currentUrl.split('.')[0].substring(8);
  const pageTitleElem = document.getElementById('firstHeading');
  const spanElem2 = document.createElement('span');
  if (pageTitleElem) {
    pageTitleElem.appendChild(spanElem2);
    spanElem2.innerHTML = ` <img src="${flagUrl}${flagLangCode[currentLang]}.png" alt="Current language" title="Current language">`;
  }

  // Show the secondary flag with link near the title
  if (primaryLang !== secondaryLang && pageTitleElem) {
    const spanElem3 = document.createElement('span');
    // Visiting primary language page
    if (currentUrl.includes(`${primaryLang}.wikipedia`)) {
      pageTitleElem.appendChild(spanElem3);
      const secondaryLangElem = getFirstElemByClassName(`interlanguage-link interwiki-${secondaryLang}`);
      if (secondaryLangElem) {
        const { href, title } = secondaryLangElem.lastChild;
        spanElem3.innerHTML = ` <a href="${href}"><img src="${flagUrl}${flagLangCode[secondaryLang]}.png" alt="${title}" title="${title}"></a>`;
      }
    // Visiting secondary language or other language page
    } else {
      pageTitleElem.appendChild(spanElem3);
      const primaryLangElem = getFirstElemByClassName(`interlanguage-link interwiki-${primaryLang}`);
      if (primaryLangElem) {
        const { href, title } = primaryLangElem.lastChild;
        spanElem3.innerHTML = ` <a href="${href}"><img src="${flagUrl}${flagLangCode[primaryLang]}.png" alt="${title}" title="${title}"></a>`;
      }
    }
  }

})();
