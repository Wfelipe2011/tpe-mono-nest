/* eslint-disable @typescript-eslint/no-var-requires */
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const swcDefaultConfig = require('@nestjs/cli/lib/compiler/defaults/swc-defaults').swcDefaultsFactory().swcOptions;
const glob = require('glob');

module.exports = (options, webpack) => {
  const lazyImports = ['@nestjs/microservices/microservices-module', '@nestjs/websockets/socket-module'];

  const outDir = options.output.filename.split('/').slice(0, -1).join('/');
  // Usando glob para encontrar todos os arquivos .ts na pasta handlers
  const entryFiles = glob.sync(path.resolve(__dirname, outDir, 'src', 'handlers', '*.ts'));
  // Criar um objeto de entrada onde a chave é o nome do arquivo sem a extensão
  const entry = {};
  entryFiles.forEach((file) => {
    const name = path.basename(file, '.ts'); // Obtém o nome do arquivo sem a extensão
    entry[name] = file;
  });

  console.log('NODE_ENV', process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'dev') {
    options.externals = [nodeExternals()];
    options.externalsPresets = { node: true };
    options.devtool = 'inline-source-map';
    options.mode = 'development';
  } else {
    options.externals = [];
    options.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
          },
        }),
      ],
    };
  }

  options.module.rules = [
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'swc-loader',
        options: swcDefaultConfig,
      },
    },
  ];

  return {
    ...options,
    entry: entry,
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        },
      }),
    ],
    output: {
      ...options.output,
      path: path.resolve(__dirname, outDir, 'dist'),
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    },
  };
};
