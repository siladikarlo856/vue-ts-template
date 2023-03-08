import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'devextreme/ui': 'devextreme/esm/ui',
    },
  },
  build: {
    rollupOptions: {
      treeshake: false,
    },
  },
});
