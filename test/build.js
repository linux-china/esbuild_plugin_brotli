import {build, stop} from 'https://deno.land/x/esbuild@v0.13.3/mod.js'
import brotliPlugin from '../index.js'

let {outputFiles} = await build({
    bundle: true,
    entryPoints: ['hello.js'],
    plugins: [brotliPlugin],
    write: false
});

console.log(outputFiles[0].text);

stop();

// deno run -A build.js
