import { defineConfig } from 'vitest/config';

//TODO make the vite config and vitest config into the same file
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '/tests/setup.ts',
  },
});
