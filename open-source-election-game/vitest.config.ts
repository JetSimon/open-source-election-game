import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    coverage: {
        exclude:[
            ...coverageConfigDefaults.exclude, 
            'public/*/**',
            'src/website/*/**',
            'src/Layout.tsx',
            'src/main.tsx'
          ]
    }
  },
});
