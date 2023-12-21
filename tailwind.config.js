module.exports = {
    content: ["./site/templates/*.php","./site/snippets/**/*.php","./site/snippets/*.php"],
    theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': 'rgb(255,255,255)',
			'black': 'rgb(0,0,0)',
			'red': 'rgb(255,0,0)',
			'green': 'rgb(0,255,0)',
			'blue': 'rgb(0,0,255)',
			'yellow': 'rgb(255,255,0)',
			'orange': 'rgb(255,128,0)',
		},
        extend: {},
    },
    corePlugins: {
        fontSize: false,
        container: false,
    },
    plugins: [],
}