module.exports = (ctx) => ({
	map: ctx.options.map,
	plugins: {
		'postcss-import': {},
		'postcss-nesting': {},
		tailwindcss: {},
		autoprefixer: {},
		cssnano: {}
	}
});