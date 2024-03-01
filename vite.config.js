import { defineConfig } from 'vite'
import purgeCSSPlugin from '@fullhuman/postcss-purgecss'
import { resolvePath } from 'react-router-dom';
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    purgeCSSPlugin({
      // Specify the paths to your CSS and/or JS files:
      content: [
        resolvePath(__dirname, 'index.html'),
        resolvePath(__dirname, 'src/**/*.{jsx,tsx}'), // Include React components
      ],
      // Adjust paths and options as needed (refer to PurgeCSS documentation):
      safelist: [], // Optionally list classNames that should always be included
      // Other options as required: https://purgecss.com/configuration/options/
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  }
});
