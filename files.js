// Automate folder structure and setup for exercises (from flat folder)
let fs = require(`fs`)

let projects = [`todo-list`, `whack-a-mole`, `tasty-taco`] // Base project folders
let exercises = [`a-`, `b-`, `c-`, `d-`, `e-`] // Exercise sub folders

projects.forEach(proj => { // For each base project
	
	fs.readdirSync(`./${proj}`) // Open each base project folder
		.filter(file => exercises.includes(file.substring(0, 2))) // Only deal with project subfolders that match one of the ex prefixes
		.forEach(folder => { // For each exercise

			// Setup base folder path
			let path = `./${proj}/${folder}`

			// Remove the `.vscode` settings if they exist
			if (fs.existsSync(`${path}/.vscode`)) fs.rmdirSync(`${path}/.vscode`, { recursive: true })

			// Create the two sub folders
			if (!fs.existsSync(`${path}/begin`)) fs.mkdirSync(`${path}/begin`)
			if (!fs.existsSync(`${path}/solution`)) fs.mkdirSync(`${path}/solution`)

			// Move index.html and copy to both folders
			if (fs.existsSync(`${path}/index.html`)) {
				fs.renameSync(`${path}/index.html`, `${path}/begin/index.html`)
				fs.copyFileSync(`${path}/begin/index.html`, `${path}/solution/index.html`)
			}
			
			// Move style.css and copy to both folders
			if (fs.existsSync(`${path}/style.css`)) {
				if (!fs.existsSync(`${path}/begin/css`)) fs.mkdirSync(`${path}/begin/css`)
				fs.renameSync(`${path}/style.css`, `${path}/begin/css/style.css`)

				if (!fs.existsSync(`${path}/solution/css`)) fs.mkdirSync(`${path}/solution/css`)
				fs.copyFileSync(`${path}/begin/css/style.css`, `${path}/solution/css/style.css`)
			}

			// Move script.js and copy to both folders
			if (fs.existsSync(`${path}/script.js`)) {
				if (!fs.existsSync(`${path}/begin/js`)) fs.mkdirSync(`${path}/begin/js`)
				fs.renameSync(`${path}/script.js`, `${path}/begin/js/script.js`)

				if (!fs.existsSync(`${path}/solution/js`)) fs.mkdirSync(`${path}/solution/js`)
				fs.copyFileSync(`${path}/begin/js/script.js`, `${path}/solution/js/script.js`)
			}
		})
})



