# adapter-static test

This works under Windows:

1. <kbd>npm install</kbd>
2. <kbd>npm run build</kbd>
3. <kbd>npm run preview</kbd>

But on Alpine Linux, it fails at step 2:

```
> sveltekit-test@0.0.1 build /work.new
> svelte-kit build

vite v2.6.14 building for production...
✓ 14 modules transformed.
.svelte-kit/output/client/_app/manifest.json                    1.21 KiB
.svelte-kit/output/client/_app/layout.svelte-712392a1.js        0.53 KiB / gzip: 0.35 KiB
.svelte-kit/output/client/_app/error.svelte-55ba95a6.js         1.56 KiB / gzip: 0.74 KiB
.svelte-kit/output/client/_app/pages/index.svelte-db8ac5cc.js   0.74 KiB / gzip: 0.47 KiB
.svelte-kit/output/client/_app/start-ebb02e83.js                18.38 KiB / gzip: 6.80 KiB
.svelte-kit/output/client/_app/assets/start-61d1577b.css        0.16 KiB / gzip: 0.15 KiB
.svelte-kit/output/client/_app/chunks/vendor-af0f2ef7.js        7.08 KiB / gzip: 2.89 KiB
vite v2.6.14 building SSR bundle for production...
✓ 15 modules transformed.
.svelte-kit/output/server/app.js                      0.07 KiB
.svelte-kit/output/server/chunks/app-498ddc9a.js      47.98 KiB
.svelte-kit/output/server/chunks/data-e92d2162.js     0.20 KiB
.svelte-kit/output/server/chunks/layout-dc4a3a6e.js   0.23 KiB
.svelte-kit/output/server/chunks/error-31498736.js    0.71 KiB
.svelte-kit/output/server/chunks/index-3bbafa22.js    0.67 KiB

Run npm run preview to preview your production build locally.

> Using @sveltejs/adapter-static
> EISDIR: illegal operation on a directory, open 'build/data/'
Error: EISDIR: illegal operation on a directory, open 'build/data/'
    at Object.openSync (fs.js:497:3)
    at writeFileSync (fs.js:1528:35)
    at file:///work.new/node_modules/@sveltejs/kit/dist/chunks/index4.js:234:6
    at Map.forEach (<anonymous>)
    at visit (file:///work.new/node_modules/@sveltejs/kit/dist/chunks/index4.js:220:17)
    at async prerender (file:///work.new/node_modules/@sveltejs/kit/dist/chunks/index4.js:298:6)
    at async Object.prerender (file:///work.new/node_modules/@sveltejs/kit/dist/chunks/index4.js:363:4)
    at async adapt (file:///work.new/node_modules/@sveltejs/adapter-static/index.js:13:4)
    at async adapt (file:///work.new/node_modules/@sveltejs/kit/dist/chunks/index4.js:388:2)
    at async file:///work.new/node_modules/@sveltejs/kit/dist/cli.js:891:5
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! sveltekit-test@0.0.1 build: `svelte-kit build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the sveltekit-test@0.0.1 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2021-11-14T10_41_13_461Z-debug.log
```
