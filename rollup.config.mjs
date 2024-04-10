import { glob } from "glob"
import { extname, sep } from "node:path"
import { fileURLToPath } from "node:url"
import { builtinModules } from "node:module"
import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import static_files from "rollup-plugin-static-files"

export default {
    input: {
        server: 'src/app/server/node.server.ts'
    },
    output: {
        dir: "dist", // set to 'dist' as mentioned earlier
        format: "esm",
        sourcemap: false,
        preserveModules: false,
        preserveModulesRoot: ".",
    },
    external(id) {
        return id.includes(sep + 'node_modules' + sep)
    },
    plugins: [
        typescript({ moduleResolution: "bundler" }),
        resolve({ preferBuiltins: true }),
        commonjs({ ignoreDynamicRequires: true, ignore: builtinModules }),
    ]
}