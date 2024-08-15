# JS module bundling and extensibility for SolidJS

### Summary

This is a sample to show how to bundle and load a SolidJS based application using JS modules in browser environment.

### Features
- pre-bundle external dependencies
- redirect imports to pre-bundled versions
- share dependencies between modules
- self-contained bundling and loading of extension/plugin modules

### Shared Dependencies
- solid-js
- @tanstack/solid-query
- clsx

### Toolchain
- Rollup
- Babel

### Refs
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- https://www.solidjs.com
- https://tanstack.com/query/latest/docs/framework/solid/overview

### Run demo
Use pnpm!
```
pnpm i
pnpm run build:all
pnpm run dev:all
```

Open browser: http://localhost:3000