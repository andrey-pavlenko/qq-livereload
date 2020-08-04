/* eslint-disable no-undef */
import typescript from '@rollup/plugin-typescript';
import path from 'path';

export default {
  input: path.resolve(__dirname, './lifereload.ts'),
  output: {
    dir: path.resolve(__dirname, '../build'),
    format: 'iife'
  },
  watch: {
    clearScreen: false
  },
  plugins: [typescript({ allowSyntheticDefaultImports: true })]
};
