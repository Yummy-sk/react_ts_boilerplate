const CracoSwcPlugin = require('craco-swc');

module.exports = {
  plugins: [
    {
      plugin: {
        ...CracoSwcPlugin,
        overrideCracoConfig: ({ cracoConfig }) => {
            if (typeof cracoConfig.eslint.enable !== 'undefined') {
            cracoConfig.disableEslint = !cracoConfig.eslint.enable;
            }
            delete cracoConfig.eslint;
            return cracoConfig;
        },
        overrideWebpackConfig: ({ webpackConfig, cracoConfig }) => {
            if (
            typeof cracoConfig.disableEslint !== 'undefined' &&
            cracoConfig.disableEslint === true
            ) {
            webpackConfig.plugins = webpackConfig.plugins.filter(
                (instance) => instance.constructor.name !== 'ESLintWebpackPlugin',
            );
            }
            return webpackConfig;
        },
      },
      options: {
        swcLoaderOptions: {
          jsc: {
            externalHelpers: true,
            target: 'es2015',
            parser: {
              syntax: 'typescript',
              jsx: true,
              dynamicImport: true,
              exportDefaultFrom: true,
            },
          },
        },
      },
    },
  ],
};
