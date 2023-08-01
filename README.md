# NxNestjsEsm

Install:

- `npm install`
- `npx nx run nx-nestjs-esm:serve --configuration=development`
  
=> 
```
Error [ERR_REQUIRE_ESM]: require() of ES Module /tmp/nx-nestjs-esm/node_modules/file-type/index.js not supported.
Instead change the require of index.js in null to a dynamic import() which is available in all CommonJS modules.
    at Module._load (/tmp/nx-nestjs-esm/node_modules/@nx/js/src/executors/node/node-with-require-overrides.js:18:31)
    at Array.__webpack_modules__ (/tmp/nx-nestjs-esm/dist/apps/nx-nestjs-esm/main.js:102:18)
    at __webpack_require__ (/tmp/nx-nestjs-esm/dist/apps/nx-nestjs-esm/main.js:125:41)
    at Object.defineProperty.value (/tmp/nx-nestjs-esm/dist/apps/nx-nestjs-esm/main.js:55:21)
    at __webpack_require__ (/tmp/nx-nestjs-esm/dist/apps/nx-nestjs-esm/main.js:125:41)
    at Array.<anonymous> (/tmp/nx-nestjs-esm/dist/apps/nx-nestjs-esm/main.js:25:26)
    at __webpack_require__ (/tmp/nx-nestjs-esm/dist/apps/nx-nestjs-esm/main.js:125:41)
    at /tmp/nx-nestjs-esm/dist/apps/nx-nestjs-esm/main.js:144:22
    at /tmp/nx-nestjs-esm/dist/apps/nx-nestjs-esm/main.js:155:3
    at Object.<anonymous> (/tmp/nx-nestjs-esm/dist/apps/nx-nestjs-esm/main.js:160:12)
    at Module._load (/tmp/nx-nestjs-esm/node_modules/@nx/js/src/executors/node/node-with-require-overrides.js:10:31)
```
