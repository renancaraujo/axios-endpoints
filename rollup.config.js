import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

export default [
  {
    experimentalCodeSplitting: true,
    input: 'src/index.js',
    output: [
      {
        format: 'es',
        dir: 'dist/es',
      },
      {
        format: 'cjs',
        dir: 'dist/lib',
        exports: 'named',
      },
    ],
    external: ["axios"],
    plugins: [
      babel({
        extensions,
        exclude: 'node_modules/**',
        externalHelpers: true,
      }),
      resolve(),
    ],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/umd/index.js',
        format: 'umd',
        indent: '  ',
        name: 'axiosEndpoints',
      },
    ],
    plugins: [babel({ externalHelpers: true })],
  },
];
