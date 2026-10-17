# The Last Page

A timed 3D exploration game in which a disappearing pencil world forces the player to navigate a route to the next page before erasure catches up.

**[Play on itch.io](https://abprojects.itch.io/the-last-page)** · [Technical report](docs/TECHNICAL_REPORT.pdf) · [Report source](docs/TECHNICAL_REPORT.md) · [Architecture](docs/ARCHITECTURE.png)

![Game preview](docs/screenshots/cover.png)

![System architecture](docs/ARCHITECTURE.png)

## Run

Open **`index.html`** in a modern desktop browser with WebGL support. The runtime is a single-file HTML5 build: bundled scripts, styles and assets stay embedded. The game can also be uploaded as an HTML5 ZIP to itch.io with `index.html` at the root.

## Gameplay and controls

Movement, camera, jump, slide and interact controls are shown in the in-game UI; desktop mouse and keyboard, gamepad processing and touch affordances exist in the code.

## Repository guide

- `index.html`: complete executable game. Do not separate or import runtime dependencies.
- `docs/TECHNICAL_REPORT.pdf`: formal report covering architecture, algorithms, behavior changes and limits.
- `docs/TECHNICAL_REPORT.md`: readable report source for GitHub.
- `docs/ARCHITECTURE.png`: diagram of major subsystems.
- `docs/RELEASE_NOTES.md`: precise change summary.
- `docs/VALIDATION.md`: structured manual acceptance checks.
- `docs/RELEASE_MANIFEST.json`: original and release SHA-256 hashes.
- `tests/verify.mjs`: non-graphics regression and syntax smoke checks.

## Verification and performance

The updated build passed JavaScript syntax and document-integrity checks. An Xvfb-hosted Chromium session initialized WebGL and checked the visible menus. A timed run started; a before/after focus-loss test verified the timer freezes in the updated build. Render-submission scheduling was examined with the WebGL draw method stubbed; **no measured FPS or GPU speedup is claimed**. See the report for details and `docs/VALIDATION.md` for the essential browser tests before publishing to itch.io.

## Source, screenshots and permissions

The existing game page is [The Last Page on itch.io](https://abprojects.itch.io/the-last-page). The included cover screenshot was captured from this game in a software-WebGL browser. The itch.io page can supply additional screenshots once their exact image files are downloaded or verified. Third-party embedded engine licences remain with their original code. This repository does not include a new project licence; discuss licence terms before distributing for reuse.
