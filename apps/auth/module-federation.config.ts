import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'auth',

  shared: function (libraryName, sharedConfig) {
    if (libraryName === '@e-commerce-platform/ui') {
      return false;
    }
  },

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
