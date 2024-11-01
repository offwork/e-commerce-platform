import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'cart',

  // do not share lodash to allow better tree-shaking
  shared: function (libraryName, shareConfig) {
    if (libraryName === '@e-commerce-platform/templates') {
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
