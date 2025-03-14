// vite.config.js
import {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // List your html files here, e.g:
        apitest: resolve(__dirname, 'src/pages/apitest.html'),
        authtest: resolve(__dirname, 'src/pages/authtest.html'),
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login.html'),
        register: resolve(__dirname, 'src/pages/register.html'),
        diary: resolve(__dirname, 'src/pages/diary.html')

      },
    },
  },
  base: './',
});
