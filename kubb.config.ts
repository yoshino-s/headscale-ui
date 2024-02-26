import { defineConfig } from '@kubb/core';
import createSwagger from '@kubb/swagger';
import createSwaggerClient from '@kubb/swagger-client';
import createSwaggerTS from '@kubb/swagger-ts';

export default defineConfig({
  root: '.',
  input: {
    path: 'https://headscale.yoshino-s.xyz/swagger/v1/openapiv2.json',
  },
  output: {
    path: './src/request',
    clean: true,
  },
  plugins: [
    createSwagger({ output: false }),
    createSwaggerTS({ output: { path: 'models' }, enumType: 'enum' }),
    createSwaggerClient({
      output: { path: './api' },
      client: {
        importPath: '@/utils/client',
      },
    }),
  ],
});
