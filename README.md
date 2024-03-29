esbuild_plugin_brotli for Deno
==============================

An esbuild plugin to compress asset files with brotli.

# How to use?

Add `?br` for imported asset as following: 

```typescript
import tailwindCss from "./tailwind.css?br"

router.get('/assets/tailwind.css', () => {
    return new Response(tailwindCss, {
        headers: {
            "Content-Type": "text/css",
            "content-encoding": "br"
        }
    })
});
```

# esbuild example

```javascript
import {build, stop} from 'https://deno.land/x/esbuild@v0.13.3/mod.js'
import brotliPlugin from 'https://deno.land/x/esbuild_plugin_brotli@0.1.2/index.js'

let {outputFiles} = await build({
    bundle: true,
    entryPoints: ['hello.js'],
    plugins: [brotliPlugin],
    write: false
})
```



