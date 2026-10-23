// ==UserScript==
// @name         Audiochan — Light Theme
// @namespace    https://github.com/ctrlaltkebab/audiochan-light-theme
// @version      1.0.0
// @author       ctrlaltkebab
// @license      MIT
// @homepageURL  https://github.com/ctrlaltkebab/audiochan-light-theme
// @supportURL   https://github.com/ctrlaltkebab/audiochan-light-theme/issues
// @description  Светлая тема Audiochan: мягкий фон, белые карточки, фиолетовые акценты. Переключение через меню расширения.
// @match        https://audiochan.com/*
// @match        https://www.audiochan.com/*
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @noframes
// ==/UserScript==

(() => {
  'use strict';
  const KEY = 'light-theme-enabled';
  const ATTR = 'data-ac-userscript-light';
  let enabled = GM_getValue(KEY, true);
  const css = `
html[${ATTR}] {
  color-scheme: light !important;
  --color-background: #f6f5f9 !important;
  --color-surface: #ffffff !important;
  --color-surface-light: #f0edf6 !important;
  --color-surface-lighter: #e6e0ef !important;
  --color-surface-dark: #f8f6fb !important;
  --color-surface-darker: #eeebf4 !important;
  --color-foreground: #252132 !important;
  --color-content-strong: #373044 !important;
  --color-muted-foreground: #686174 !important;
  --color-content-tertiary: #70687c !important;
  --color-muted: #eeebf4 !important;
  --color-border: #ded8e8 !important;
  --color-border-light: #cbc2db !important;
  --color-input: #d6cde2 !important;
  --color-primary: #7940bc !important;
  --color-primary-light: #8c52ce !important;
  --color-primary-lighter: #a275d6 !important;
  --color-primary-dark: #65309f !important;
  --color-primary-darker: #512580 !important;
  --color-primary-foreground: #ffffff !important;
  --color-primary-button: #7940bc !important;
  --color-primary-button-hover: #66309f !important;
  --color-primary-button-foreground: #ffffff !important;
  --color-secondary-lighter: #ede3f8 !important;
  --color-secondary-light: #b38bd8 !important;
  --color-secondary: #7940bc !important;
  --color-secondary-dark: #65309f !important;
  --color-secondary-darker: #512580 !important;
  --color-accent: #a52c9d !important;
  --color-accent-light: #b848b0 !important;
  --color-accent-lighter: #cc75c5 !important;
  --color-accent-dark: #8b2385 !important;
  --color-accent-darker: #6b1a66 !important;
  --color-logo: #30243f !important;
  --color-waveform: #ac8aca !important;
  --color-waveform-progress: #7540b0 !important;
  --color-waveform-unplayed: #d9cee6 !important;
  --color-ring: #7940bc !important;
  --color-state-hover: #7940bc0e !important;
  --color-state-active: #7940bc1c !important;
  --color-edge-subtle: #49305f19 !important;
  --color-edge-soft: #49305f2e !important;
  --color-surface-overlay-subtle: #7940bc05 !important;
  --color-surface-overlay-soft: #7940bc0a !important;
  --color-surface-overlay-strong: #7940bc12 !important;
  --glass-fill-flush: #ffffffaa !important;
  --glass-fill-raised: #ffffffe0 !important;
  --glass-fill-overlay: #ffffff !important;
  --glass-highlight: #ffffffb3 !important;
  --glass-highlight-strong: #ffffff !important;
  --shadow-color: #3520440a !important;
  --shadow-color-md: #35204410 !important;
  --shadow-color-lg: #35204418 !important;
  --shadow-color-xl: #35204424 !important;
  --shadow-glass-flush: inset 0 1px 1px #3520440a !important;
  --shadow-glass-raised: 0 2px 8px #3520440d !important;
  --shadow-glass-raised-hover: 0 4px 16px #35204418 !important;
  --shadow-glass-overlay: 0 12px 40px #35204424 !important;
  --shadow-glass-overlay-sm: 0 6px 24px #3520441c !important;
  --color-ethics-emphasis: #8440ad !important;
}
html[${ATTR}], html[${ATTR}] body {
  background-color: var(--color-background) !important;
  color: var(--color-foreground) !important;
}
html[${ATTR}] ::selection { background: #dac5f0; color: #30213f; }
html[${ATTR}] :focus-visible { outline-color: #7940bc; }
html[${ATTR}] :is(input, textarea, select) { color-scheme: light; }
html[${ATTR}] :is(.text-purple-400,.text-purple-300) { color: #8440ad !important; }
html[${ATTR}] :is(.text-red-400,.text-red-300) { color: #bd3049 !important; }
html[${ATTR}] :is(.text-green-400,.text-green-300) { color: #237747 !important; }
html[${ATTR}] :is(.text-blue-400,.text-blue-300) { color: #3266b2 !important; }
html[${ATTR}] :is(.text-yellow-400,.text-amber-400) { color: #94620d !important; }
html[${ATTR}] :is(.text-pink-400,.text-fuchsia-400) { color: #a72e82 !important; }
html[${ATTR}] :is(.text-ethics-purple-400,.text-ethics-purple-300) { color: #8440ad !important; }
html[${ATTR}] :is(.text-ethics-fuchsia-400,.text-ethics-pink-400) { color: #a72e82 !important; }
`;
  const style = document.createElement('style');
  style.id = 'audiochan-light-userscript';
  style.textContent = css;
  function apply() {
    const root = document.documentElement;
    if (!root) return;
    root.toggleAttribute(ATTR, enabled);
    if (!style.isConnected) root.append(style);
  }
  // Root tokens are inherited by new SPA pages, portals and the audio player.
  apply();
  if (!document.documentElement) {
    const observer = new MutationObserver(() => {
      if (document.documentElement) { apply(); observer.disconnect(); }
    });
    observer.observe(document, { childList: true });
  }
  GM_registerMenuCommand('Светлая тема: включить / выключить', () => {
    enabled = !enabled;
    GM_setValue(KEY, enabled);
    apply();
  });
})();
