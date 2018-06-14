export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/es/index.js',
      format: 'es',
      indent: '  ',
    },
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      indent: '  ',
    },
  ],
};
