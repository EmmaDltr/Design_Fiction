import { defineConfig } from 'vite'
import { resolve } from 'path'


export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                catalogue: resolve(__dirname, 'catalogue.html'),
                film: resolve(__dirname, 'film.html'),
            }
        }
    },
    server: {
        host: true,       // rend accessible depuis ton IP locale
        port: 5173        // change si besoin
    }

});