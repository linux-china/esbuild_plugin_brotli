import {compress} from "https://deno.land/x/brotli@v0.1.4/mod.ts";

const name = 'brotli'

const setup = ({onResolve, onLoad}) => {
    onResolve({filter: /.*\?br$/}, ({path}) => ({
        path: path,
        namespace: 'brotli'
    }));
    onLoad({filter: /.*/, namespace: 'brotli'}, brotliCompress);
}

const brotliCompress = async ({path}) => {
    const originalPath = path.replace("?br", "");
    const rawBytes = await Deno.readFile(originalPath);
    const compressedBytes = compress(rawBytes);
    /*const uncompressedLength = rawBytes.length;
    const compressedLength = compressedBytes.length;
    let percent = Math.floor((uncompressedLength - compressedLength) / uncompressedLength * 100);
    console.log(`brotli compress for ${originalPath}: ${percent}%  ${uncompressedLength} => ${compressedLength}`);*/
    return {contents: compressedBytes, loader: "binary"};
}

export default {name, setup}
