## Prerequisites

This project uses **pnpm v10** as the package manager.

### Requirements

- **Node.js ≥ 20** (recommended: latest LTS or newer)
- **Corepack enabled** (comes with modern Node.js)

You can verify your environment with:

```bash
node -v
corepack --version
```

---

## Package Manager: pnpm v10

We intentionally standardize on **pnpm 10** to ensure:

- Deterministic installs via `pnpm-lock.yaml`
- Faster and more disk-efficient dependency management
- Consistent behavior across local development and GitHub Actions (CI)

The exact pnpm version is pinned via the `packageManager` field in `package.json`.

---

## Installation (First-time setup)

Enable Corepack and activate pnpm v10:

```bash
corepack enable
corepack prepare pnpm@10 --activate
pnpm -v
```

Expected output:

```
10.x.x
```

Then install dependencies:

```bash
pnpm install
```

This will generate `pnpm-lock.yaml`, which **must be committed** to ensure CI reproducibility.

---

## Updating pnpm (Local environment)

If you already have pnpm installed and want to update within the v10 major version:

```bash
corepack prepare pnpm@latest-10 --activate
pnpm -v
```

⚠️ Do **not** mix pnpm major versions (e.g. v9 and v10) in the same repository, as lockfile formats are not compatible.

---

## Notes for CI / GitHub Actions

GitHub Actions workflows should explicitly pin pnpm to v10, for example:

```yaml
- uses: pnpm/action-setup@v4
  with:
    version: 10
```

This guarantees consistent behavior even when newer pnpm major versions are released.