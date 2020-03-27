# GitHub Actions for nodenv

[![Test](https://github.com/nodenv/actions/workflows/Test/badge.svg)](https://github.com/nodenv/actions/actions?query=workflow%3ATest)
[![Examples](https://github.com/nodenv/actions/workflows/Examples/badge.svg)](https://github.com/nodenv/actions/actions?query=workflow%3AExamples)

This is a monorepo for multiple nodenv-related GitHub Actions.
Each individual action is split (via git-subtree) and pushed to its own constituent repo.
This is presently necessary because an action must have its own repo and Release in order to be listed on the marketplace.
Hopefully, this limitation will be eliminated at some point.

- [setup-nodenv](setup-nodenv) ([repo](https://github.com/nodenv/actions-setup-nodenv))

    installs nodenv and adds it to PATH

- [node-version](node-version) ([repo](https://github.com/nodenv/actions-node-version))

    exposes node version (via `nodenv local`) as a step output
