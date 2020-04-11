# NPM publish test

For testing npm publish to Npmjs registry.

## Publishing

Publish package:

```sh
npm publish
```

Publish a scoped package for the first time:

```sh
npm publish --access public
```

Publish package and point `foo` tag to it:

```sh
npm publish --tag foo
```

## NPM Tagging

Create/Modify `foo` tag to point to `x.y.z` package version:

```sh
npm dist-tag add @szenadam/npm-publish-test@x.y.z foo
```

Remove `foo` tag:

```sh
npm dist-tag rm @szenadam/npm-publish-test foo
```
