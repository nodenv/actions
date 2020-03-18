# GitHub Actions for nodenv

## Usage with setup-node

Determines node version via `nodenv local`

```yml
steps:
  - uses: actions/checkout@master
  - uses: nodenv/actions-node@v1
    id: nodenv
  - uses: actions/setup-node@v1
    with:
      node-version: '${{ steps.nodenv.outputs.node-version }}'
  - run: node -v
```
