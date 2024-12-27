import { defineConfig } from '@kubb/core';
import { pluginClient } from '@kubb/plugin-client';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginTs } from '@kubb/plugin-ts';

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
    pluginOas(),
    pluginTs({
      output: { path: 'models' },
      enumType: 'constEnum',
      dateType: 'date',
      unknownType: 'unknown',
    }),
    pluginClient({
      output: { path: './api' },
      client: 'fetch',
      importPath: '@/utils/client',
    }),
  ],
});
