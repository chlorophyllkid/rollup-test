
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/main.js',
  output: [
    {
      dir: 'dist/module',
      format: 'es',
      chunkFileNames: '[name].chunk.js',
    },
    {
      dir: 'dist/nomodule',
      format: 'system',
      chunkFileNames: '[name].chunk.js',
    }
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve(),
    serve('dist'),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env'],
        ['@babel/preset-react'],
      ],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};
