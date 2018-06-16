import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/umd/index.js',
      format: 'umd',
      indent: '  ',
      name: 'axiosEndpoints',
    },
  ],
  plugins: [babel()],
};
