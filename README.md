# Audiochan Light Theme

A light theme userscript for [Audiochan](https://audiochan.com/), with a soft background, readable text and purple accents.

## Install

1. Install Tampermonkey or Violentmonkey in your browser.
2. Create a new userscript and replace the template with the contents of `audiochan-light.user.js`.
3. Save it and reload Audiochan.

Light mode is enabled by default. Use **Светлая тема: включить / выключить** in your userscript manager's menu to toggle it. Your choice is remembered.

## Features

- Overrides Audiochan's shared theme variables for consistent colors across the interface.
- New SPA content inherits the palette without scanning the whole page.
- Preserves image and cover colors.
- No external dependencies or network requests.
- Does not overwrite Audiochan's saved theme preference.

## Validation and limitations

JavaScript syntax was checked. Appearance was reviewed against a local snapshot of the public homepage using the site's current stylesheets. Installation in a userscript manager, signed-in pages and all dialogs have not been tested. Canvas waveforms may retain their old colors until redrawn. Site updates may require adjustments.

## Русский

Светлая тема для Audiochan: мягкий фон, читаемый текст и фиолетовые акценты. Установите скрипт в Tampermonkey или Violentmonkey и обновите сайт. Переключение — через меню расширения; выбор запоминается.

## License

MIT. This is an independent project, not affiliated with Audiochan.
