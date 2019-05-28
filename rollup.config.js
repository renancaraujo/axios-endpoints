import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

export default [
  {
    experimentalCodeSplitting: true,
    input: 'src/index.ts',
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
    external: ['axios'],
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      resolve(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/umd/index.js',
        format: 'umd',
        indent: '  ',
        name: 'axiosEndpoints',
        exports: 'named',
      },
    ],
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
    ],
  },
];
