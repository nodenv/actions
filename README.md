# GitHub Actions for nodenv

[![Latest Release](https://img.shields.io/github/v/release/nodenv/actions?logo=github&sort=semver)](https://github.com/nodenv/actions/releases/latest)
[![Test](https://img.shields.io/github/workflow/status/nodenv/actions/Test?label=tests&logo=github)](https://github.com/nodenv/actions/actions?query=workflow%3ATest)
[![Examples](https://img.shields.io/github/workflow/status/nodenv/actions/Examples?color=orange&label=examples&logo=github)](https://github.com/nodenv/actions/actions?query=workflow%3AExamples)

This is a monorepo for multiple nodenv-related GitHub Actions.
Each individual action is split (via git-subtree) and pushed to its own constituent repo.
This is presently necessary because an action must have its own repo and Release in order to be listed on the marketplace.
Hopefully, this limitation will be eliminated at some point.

**NOTICE:** The default branch for this repo (and the constituent repos), has been changed to `main`.
Be sure to update any references to `master` accordingly.

### setup-nodenv [![repo](https://img.shields.io/badge/---?label=repo&style=social&logo=github)](https://github.com/nodenv/actions-setup-nodenv)

Installs nodenv and adds it to `PATH` for subsequent steps to make use of nodenv.

For usage and examples see [its readme](setup-nodenv) in this monorepo.

### node-version [![repo](https://img.shields.io/badge/---?label=repo&style=social&logo=github)](https://github.com/nodenv/actions-node-version)

Exposes node version (via `nodenv local`) as a step output. Suitable to read .node-version and provide as input to [setup-node action](https://github.com/actions/setup-node)

For usage and examples see [its readme](node-version) in this monorepo.
