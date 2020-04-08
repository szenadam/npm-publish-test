# Notes

1. Publishing a scoped public package: `npm publish --access public`
2. To create an npm tag run e.g.:

   ```sh
   npm dist-tag add @szenadam/npm-publish-test@1.0.0 stable
   ```

   This creates a "stable" tag that points to the 1.0.0 version of @szenadam/npm-publish-test
   package.
3. Beta version should end with "-beta.X" where X starts with 0 and is bumped every
   time a new beta version is published.

   E.g.: `"version": "1.2.3-beta.0"`.
