import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import svgr from 'vite-plugin-svgr';
import babel from 'vite-plugin-babel';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    babel({
      babelConfig: {
        plugins: [
          ['i18next-extract', {
            locales: ['en', 'ru'],
            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
            defaultNS: 'translation',
            useKeysAsDefaultValue: true,
            keyAsDefaultValue: true,
            append: true,
            clean: false
          }]
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
    }
  }
});
