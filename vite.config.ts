import { resolve } from 'path'
import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'

export default defineConfig({
    server: {
        port: 4000
    },

    plugins: [
        devServer({
            entry: './src/app/server/node.server.ts'
        })
    ],

    publicDir: false,

    build: {
        outDir: 'wwwroot/ui',
        emptyOutDir: true,

        rollupOptions: {
            input: {
                'page-one': resolve(__dirname, 'src','app','client','scripts', 'page-one', 'index.ts'),
                'custom-styles': resolve(__dirname, 'src', 'app', 'client', 'styles', 'custom', 'index.js')
            },

            output: {
                entryFileNames: 'scripts/[name].js',
        
                assetFileNames: (chunk) => {                                        
                    switch (chunk.name) {
                        case 'custom-styles.css':
                            return 'styles/custom.css';
                        default:
                            console.log(chunk.name);
                            return '[name][extname]'
                    }
                }
            } 
        }
    }
});