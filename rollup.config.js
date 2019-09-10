import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const production = process.env.NODE_ENV && process.env.NODE_ENV === 'production'

export default {
	input: ['src/components/A.svelte', 'src/components/B.svelte'],
	output: {
		format: 'es',
		entryFileNames: '[name].js',
		dir: 'public/module',
		sourcemap: true
	},
	plugins: [
		svelte({
			dev: !production,
			customElement: true,
			emitCss: true
		}),
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs()
	],
	watch: {
		clearScreen: false
	}
}
