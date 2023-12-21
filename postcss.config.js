module.exports = (ctx) => ({
	map: ctx.options.map,
	plugins: {
		'postcss-import': {},
		'postcss-nesting': {},
		autoprefixer: {},
		cssnano: {}
	}
});