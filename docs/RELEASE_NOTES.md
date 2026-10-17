# Release notes

This is a conservative maintenance release.

- Pause active navigation challenges on window blur or tab hide, preventing hidden-tab timer loss.
- Reduce GPU renders during pause/end overlays to 10 FPS and skip them in hidden tabs; original active-play renderer unchanged.
- Preserve the entire game (scripts, styles, vendor libraries and embedded assets) inside one index.html; no module split.
- Do not alter game balance, physics parameters, core algorithms, or external dependencies.

## Preserved by design

No modifications to active-play frame scheduling, character/ball physics coefficients, enemy combat decisions, game balance, UI art, embedded libraries or world assets.

## Limitations

Browser WebGL startup and targeted interface/regression checks were completed in an Xvfb/SwiftShader Chromium session (see docs/VALIDATION.md). Full gameplay, hardware performance and multi-browser regression checks are still required before production deployment.
