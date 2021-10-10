import { defineConfig } from "vite";
import path from 'path'
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    lib: {
      entry: path.resolve(__dirname, 'src/webComponents.tsx'),
      name: 'MyLib'
    },
  },
  server: {
    proxy: {
      '/api/platform': {
        target: 'http://platform-api-django.int-v3-croud.svc.cluster.local',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/platform/, '')
      },
    }
  }
});
