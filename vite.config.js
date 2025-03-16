// vite.config.js
import {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // List your html files here, e.g:
        main: resolve(__dirname, 'index.html'),
        bmi: resolve(__dirname, 'bmi.html'),
        login: resolve(__dirname, 'login.html'),
        register: resolve(__dirname, 'register.html'),
        diary: resolve(__dirname, 'diary.html')
      },
    },
  },
  base: './',
});
