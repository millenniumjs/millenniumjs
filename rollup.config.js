import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import filesize from 'rollup-plugin-filesize';
import { minify } from 'uglify-es';

export default {
	entry: 'src/millennium.js',
	dest: 'dist/millennium.js',
	format: 'es',
	plugins: [
   eslint(),
		babel({
      exclude: 'node_modules/**',
    }),
  	uglify({}, minify),
  	filesize()
	]
};
