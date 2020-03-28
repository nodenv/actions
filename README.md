# GitHub Actions for nodenv

[![Latest Release](https://img.shields.io/github/v/release/nodenv/actions?logo=github&sort=semver)](https://github.com/nodenv/actions/releases/latest)
[![Test](https://img.shields.io/github/workflow/status/nodenv/actions/Test?label=tests&logo=github)](https://github.com/nodenv/actions/actions?query=workflow%3ATest)
[![Examples](https://img.shields.io/github/workflow/status/nodenv/actions/Examples?color=orange&label=examples&logo=github)](https://github.com/nodenv/actions/actions?query=workflow%3AExamples)

This is a monorepo for multiple nodenv-related GitHub Actions.
Each individual action is split (via git-subtree) and pushed to its own constituent repo.
This is presently necessary because an action must have its own repo and Release in order to be listed on the marketplace.
Hopefully, this limitation will be eliminated at some point.

### setup-nodenv [![repo](https://img.shields.io/badge/repo--lightgrey?style=social&logo=github)](https://github.com/nodenv/actions-setup-nodenv) [![Latest Release](https://img.shields.io/github/v/release/nodenv/actions-setup-nodenv?logo=github&sort=semver)](https://github.com/nodenv/actions-setup-nodenv/releases/latest)

Installs nodenv and adds it to PATH for subsequent steps to make use of nodenv.
    
Usage and examples in [its readme](setup-nodenv)

### node-version [![repo](https://img.shields.io/badge/repo--lightgrey?style=social&logo=github)](https://github.com/nodenv/actions-node-version) [![Latest Release](https://img.shields.io/github/v/release/nodenv/actions-node-version?logo=github&sort=semver)](https://github.com/nodenv/actions-node-version/releases/latest)

Exposes node version (via `nodenv local`) as a step output. Suitable to read .node-version and provide as input to [setup-node action](https://github.com/actions/setup-node)
    
Usage and examples in [its readme](node-version)
