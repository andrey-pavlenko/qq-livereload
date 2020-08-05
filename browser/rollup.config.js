/* eslint-disable no-undef */
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
// import nodePolyfills from 'rollup-plugin-node-polyfills';

export default {
  input: path.resolve(__dirname, './livereload.ts'),
  output: {
    dir: path.resolve(__dirname, '../build'),
    format: 'iife'
  },
  watch: {
    clearScreen: false
  },
  plugins: [
    typescript({ allowSyntheticDefaultImports: true }),
    json(),
    commonjs(),
    nodeResolve()
    // nodePolyfills()
  ]
};
