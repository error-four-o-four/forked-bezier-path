import terser from '@rollup/plugin-terser';
import ts from 'rollup-plugin-typescript';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: `build/bezier-path.esm.js`,
			format: 'esm'
		},
		// {
		// 	file: `build/bezier-path.cjs`,
		// 	format: 'cjs',
		// 	plugins: [terser()]
		// },
		{
			file: `build/bezier-path.min.js`,
			name: 'BeziePath',
			format: 'iife',
			plugins: [terser()]
		}
	],
	plugins: [
		ts(),
	]
}