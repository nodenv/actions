# GitHub Actions for nodenv

This repo provides multiple nodenv-related GitHub Actions.

## setup-nodenv

This action sets up nodenv such that it is available in subsequent steps.

```yml
steps:
  - uses: nodenv/actions/setup-nodenv
```

## Usage with setup-node

Determines node version via `nodenv local`

```yml
steps:
  - uses: actions/checkout@master
  - uses: nodenv/actions@v1
    id: nodenv
  - uses: actions/setup-node@v1
    with:
      node-version: '${{ steps.nodenv.outputs.node-version }}'
  - run: node -v
```
