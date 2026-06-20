# UV Index Card

A custom Lovelace card for Home Assistant that renders the current UV index as a pyramid-style visual card. This fork continues active development of the original project with an updated visual editor, additional layouts, and broader language support.

[![HACS Default](https://img.shields.io/badge/HACS-Default-orange.svg?style=flat-square)](https://github.com/hacs/integration)

[Latest Release](https://github.com/tjuuljensen/uv-index-card/releases/latest) |
[Release History](https://github.com/tjuuljensen/uv-index-card/releases) |
[License](LICENSE)

## Features

- Visual Lovelace editor with live preview.
- `full`, `compact`, and `icon` layouts.
- Optional name, index, and risk visibility controls.
- Configurable decimal precision from `0` to `3`.
- Graceful handling of `unknown`, `unavailable`, and non-numeric states.
- Tap, hold, and double-tap action support.
- Extended translation coverage from upstream community PRs.

## Screenshots

### Full Layout

![Full layout](docs/images/uv-index-card.png)

### Compact Layout

![Compact layout](docs/images/uv-index-card-compact.png)

### Icon Layout

![Icon layout](docs/images/uv-index-card-icon.png)

### Visual Editor

![Visual editor](docs/images/uv-index-card-editor.png)

## Installation

### HACS

1. Open HACS in Home Assistant.
2. Add `tjuuljensen/uv-index-card` as a custom frontend repository if needed.
3. Install `UV Index Card`.
4. Refresh the browser.
5. Add the card from the Lovelace card picker.

[![Open your Home Assistant instance and open this repository inside HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=tjuuljensen&repository=uv-index-card&category=plugin)

### Manual

1. Download `uv-index-card.js` from the latest [release](https://github.com/tjuuljensen/uv-index-card/releases/latest).
2. Copy it to `<config>/www/uv-index-card.js`.
3. Add this resource in Lovelace:

```yaml
url: /local/uv-index-card.js
type: module
```

4. Refresh the browser.
5. Add the card to a dashboard.

## Quick Start

### Minimal Configuration

```yaml
type: custom:uv-index-card
entity: sensor.weather_station_uv
```

### Compact Example

```yaml
type: custom:uv-index-card
entity: sensor.openuv_current_uv_index
layout: compact
name: UV Index
decimals: 1
show_name: true
show_index: true
show_risk: true
```

### Icon Example

```yaml
type: custom:uv-index-card
entity: sensor.openuv_current_uv_index
layout: icon
name: UV
show_name: true
show_index: true
show_risk: false
```

## Configuration

| Option | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | string | Yes |  | Must be `custom:uv-index-card` |
| `entity` | string | Yes |  | UV index entity to render |
| `name` | string | No | `UV Index` | Card title or label |
| `language` | string | No | Home Assistant language | Force a translation code |
| `layout` | string | No | `full` | One of `full`, `compact`, `icon` |
| `show_name` | boolean | No | `true` for `full` and `compact`, `false` for `icon` | Show the configured name |
| `show_index` | boolean | No | `true` for `full` and `compact`, `false` for `icon` | Show the numeric UV value |
| `show_risk` | boolean | No | `true` for `full` and `compact`, `false` for `icon` | Show the localized risk label |
| `decimals` | number | No | `1` | Decimal precision from `0` to `3` |
| `tap_action` | object | No | `more-info` | Action to run on tap |
| `hold_action` | object | No |  | Action to run on hold |
| `double_tap_action` | object | No |  | Action to run on double tap |

### Layout Notes

- `full` uses a card header and shows the pyramid beside the text content.
- `compact` keeps the content denser and works better in horizontal or stacked layouts.
- `icon` prioritizes the pyramid and can optionally include short text.
- If the entity state is `unknown`, `unavailable`, empty, or non-numeric, the card stays visible and renders `N/A`.

## Supported Languages

| Language | Code | Contributor |
| --- | --- | --- |
| Catalan | `ca` | [@carlesfernandez](https://github.com/carlesfernandez) |
| Czech | `cs` | [@MiisaTrAnCe](https://github.com/MiisaTrAnCe) |
| Danish | `da` | [@tjuuljensen](https://github.com/tjuuljensen) |
| German | `de` | [@t1gr0u](https://github.com/t1gr0u) |
| English | `en` | [@t1gr0u](https://github.com/t1gr0u) |
| Spanish | `es` | [@vmbajop](https://github.com/vmbajop) |
| Finnish | `fi` | [@PolarFox](https://github.com/PolarFox) |
| French | `fr` | [@t1gr0u](https://github.com/t1gr0u) |
| Hebrew | `he` | [@EarthGoodness](https://github.com/EarthGoodness) |
| Hungarian | `hu` | [@erelke](https://github.com/erelke) |
| Italian | `it` | [@SiriosDev](https://github.com/SiriosDev) |
| Norwegian Bokmal | `nb` | [@kilrolf](https://github.com/kilrolf) |
| Dutch | `nl` | [@WoBBeLnl](https://github.com/WoBBeLnl) |
| Polish | `pl` | [@madkrystiank](https://github.com/madkrystiank) |
| Portuguese | `pt` | [@ViPeR5000](https://github.com/viper5000) |
| Brazilian Portuguese | `pt-BR` | [@hudsonbrendon](https://github.com/hudsonbrendon) |
| Slovak | `sk` | [@milandzuris](https://github.com/milandzuris) |
| Slovenian | `sl` | [@palfyz](https://github.com/palfyz) |
| Swedish | `sv` | [@el97](https://github.com/el97) |
| Russian | `ru` | [@TheLightTwist](https://github.com/TheLightTwist) |
| Ukrainian | `ua` | [@TheLightTwist](https://github.com/TheLightTwist) |

## Development

```bash
npm ci
npm run build
```

The repository includes GitHub Actions for build validation, HACS validation, and release asset generation.

## Credits

- Original card by [@t1gr0u](https://github.com/t1gr0u)
- Based on the custom card boilerplate from [@iantrich](https://github.com/iantrich)
