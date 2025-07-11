import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts'

import pkg from './package.json' with { type: 'json' };
import tsc from './tsconfig.json' with { type: 'json' };

const input = `${tsc.compilerOptions.outDir}/index.js`
const output = {
  iife: pkg.jsdeliver, 
  esm: pkg.exports['.'].import,
}

const plugins = [terser()]

export default [
  {
    input,
    output: {
      file: output.iife,
      name: 'BezierPath',
      format: 'iife',
      plugins
    }
  },
  {
    input,
    output: { file: output.esm.default, format: 'esm' },
  },
  {
    input: input.replace(/\.js$/, '.d.ts'),
    output: { file: output.esm.types, format: 'esm' },
    plugins: [dts()]
  }
]