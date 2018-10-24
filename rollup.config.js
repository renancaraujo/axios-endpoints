import babel from 'rollup-plugin-babel';

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
    external: [
      ...Object.keys(pkg.peerDependencies),
      ...Object.keys(pkg.dependencies),
    ],
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
