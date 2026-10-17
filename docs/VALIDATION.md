# Manual browser acceptance checklist

Run on desktop Chrome and Firefox (WebGL enabled), with a fresh profile and saved settings. Mark each scenario PASS/FAIL with screenshots/notes. These tests were **not** completed by the automated audit.

- [ ] Startup splash/menu appears; start a generated scenario
- [ ] Move/look/jump/slide/interact; pointer lock behaves
- [ ] Generate multiple seeds and confirm spawn/gate accessible
- [ ] Observe stage-based erasure and race against timer
- [ ] Reach the gate; verify win/result flow and next-run
- [ ] Open pause panel, resume and return to menu
- [ ] During timed run, Alt-Tab for several seconds: timer MUST stay paused
- [ ] Hide tab mid-run; return and verify countdown did not advance
- [ ] Audio resumes from gesture; run gamepad and touch checks
- [ ] Verify pause/result world background is visible and UI usable

## Measurement instructions

1. Open Chrome Developer Tools → Performance and capture 30 seconds during active gameplay and 30 seconds paused.
2. Compare frame count and GPU activity against the original release on the same hardware; expect non-gameplay draw frequency to fall toward 10 Hz, not a claimed measured FPS gain.
3. Test at 1280×720 and 1920×1080, low- and high-DPR displays if available.
4. Record browser, OS, GPU, seed, mode and result when filing a bug.

## Automated smoke test

`node tests/verify.mjs`

This validates self-containment and parsing, not full WebGL gameplay.

## Completed virtual-desktop smoke checks

- WebGL initialized under Xvfb/SwiftShader; menu and timed run state entered without uncaught page errors.
- Original blur left run active and timer advanced; revised blur entered paused and timer stayed constant.
- Game-completion, seed-batch and full physics evaluation still not performed.
