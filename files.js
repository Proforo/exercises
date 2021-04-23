let fs = require(`fs`)


let projects = [`todo-list`, `whack-a-mole`, `tasty-taco`]
let exercises = [`a-`, `b-`, `c-`, `d-`, `e-`]

projects.forEach(proj => {
	
	fs.readdirSync(`./${proj}`)
		.filter(file => exercises.includes(file.substring(0, 2)))
		.forEach(folder => {
			let path = `./${proj}/${folder}`

			/*
			if (fs.existsSync(`${path}/.vscode`)) fs.rmdirSync(`${path}/.vscode`, { recursive: true })

			if (!fs.existsSync(`${path}/begin`)) fs.mkdirSync(`${path}/begin`)
			if (!fs.existsSync(`${path}/solution`)) fs.mkdirSync(`${path}/solution`)

			if (fs.existsSync(`${path}/index.html`)) {
				fs.renameSync(`${path}/index.html`, `${path}/begin/index.html`)
				fs.copyFileSync(`${path}/begin/index.html`, `${path}/solution/index.html`)
			}
			
			if (fs.existsSync(`${path}/style.css`)) {
				if (!fs.existsSync(`${path}/begin/css`)) fs.mkdirSync(`${path}/begin/css`)
				fs.renameSync(`${path}/style.css`, `${path}/begin/css/style.css`)

				if (!fs.existsSync(`${path}/solution/css`)) fs.mkdirSync(`${path}/solution/css`)
				fs.copyFileSync(`${path}/begin/css/style.css`, `${path}/solution/css/style.css`)
			}
			if (fs.existsSync(`${path}/script.js`)) {
				if (!fs.existsSync(`${path}/begin/js`)) fs.mkdirSync(`${path}/begin/js`)
				fs.renameSync(`${path}/script.js`, `${path}/begin/js/script.js`)

				if (!fs.existsSync(`${path}/solution/js`)) fs.mkdirSync(`${path}/solution/js`)
				fs.copyFileSync(`${path}/begin/js/script.js`, `${path}/solution/js/script.js`)
			}
			*/
		})
})



