# GitHub Actions for nodenv

[![Latest Release](https://img.shields.io/github/v/release/nodenv/actions?logo=github&sort=semver)](https://github.com/nodenv/actions/releases/latest)
[![Test](https://img.shields.io/github/workflow/status/nodenv/actions/Test?label=tests&logo=github)](https://github.com/nodenv/actions/actions?query=workflow%3ATest)
[![Examples](https://img.shields.io/github/workflow/status/nodenv/actions/Examples?color=orange&label=examples&logo=github)](https://github.com/nodenv/actions/actions?query=workflow%3AExamples)

This is a monorepo for multiple nodenv-related GitHub Actions.
Each individual action is split (via git-subtree) and pushed to its own constituent repo.
This is presently necessary because an action must have its own repo and Release in order to be listed on the marketplace.
Hopefully, this limitation will be eliminated at some point.

- [setup-nodenv](setup-nodenv) ([repo](https://github.com/nodenv/actions-setup-nodenv)) [![Latest Release](https://img.shields.io/github/v/release/nodenv/actions-setup-nodenv?logo=github&sort=semver)](https://github.com/nodenv/actions-setup-nodenv/releases/latest)

    installs nodenv and adds it to PATH

- [node-version](node-version) ([repo](https://github.com/nodenv/actions-node-version)) [![Latest Release](https://img.shields.io/github/v/release/nodenv/actions-node-version?logo=github&sort=semver)](https://github.com/nodenv/actions-node-version/releases/latest)

    exposes node version (via `nodenv local`) as a step output
