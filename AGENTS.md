# Repository Guidelines

## Project Structure & Module Organization
- Static site assets live at the repository root (e.g., `index.html`, `privacy-policy.html`).
- Shared assets are in `assets/`, `images/`, `fonts/`, `css/`, and `js/`.
- Game- or product-specific pages live in folders like `hop99/`, `ufo99/`, `takobubble/`, `chirpytime/`, and `klee/`.
- **deprecated** Press kit sources are in `presskit_data/` and generated output goes to `presskit/`.
- The `test/` folder currently contains static HTML pages, not automated tests.

## VS Code Workspace (Editor-Only)

> This section describes the **VS Code workspace layout only**.
> It does **not** reflect the on-disk repository structure.

When opened in VS Code, this project is typically loaded via a
multi-root workspace (`.code-workspace`) that may include folders
outside of this repository.
- Prefer reading and writing plan markdown files in workspace folders than repository folders.

### Workspace Folders

Common workspace layout:

- **repo-root/**
  - This repository (static site, assets, product pages)
- **docs/ or DOCS/**
  - External planning documents, specs, reports, and notes
  - Lives outside the repo on disk
- **codex-plans/**
  - AI / Codex planning files and experiments
  - Not committed to this repository

Folder names shown in VS Code Explorer may be **aliases** and do not
necessarily match their actual filesystem paths.
- Look up in `.code-workspace` file to find the actual paths.
- Request for access permission if not already granted in workspace trust settings.

### Agent Notes

- AI agents should treat this repository as **repo-root/**
- Do not assume sibling workspace folders are part of the git repo
- If a referenced file is not found under version control, it may live
  in a workspace-only folder

## Build, Test, and Development Commands
- `pnpm install`: install dependencies using the pinned pnpm version (see `README.md`).

## Coding Style & Naming Conventions
- Match the style of the file you are editing (indentation and brace style vary across legacy pages).
- Prefer existing naming patterns (e.g., `snake_case.html` in `ufo99/`, lowercase folder names).
- Keep HTML/CSS/JS changes minimal and consistent with surrounding sections.
- **Never:** Commit secrets or API keys, edit `node_modules/` or `vendor/`

## Testing Guidelines
- No test framework is configured. If you add tests, document the runner and how to execute it.
- For UI changes, perform a manual browser check of the affected pages.

## Commit & Pull Request Guidelines
- Git history shows a mix of short imperative messages and occasional conventional commits (e.g., `chore(hop-35): ...`). Use concise, descriptive messages; scopes are optional.
- PRs should describe the user-facing change, list any updated pages or assets, and include screenshots for visual changes.

## Security & Configuration Tips
- Keep `pnpm-lock.yaml` committed to preserve deterministic installs.
- Avoid introducing new external dependencies unless necessary for static site updates.
