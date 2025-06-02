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
    }
});