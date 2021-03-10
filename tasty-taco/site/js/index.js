


document.querySelector(`.btn.save`).addEventListener(`click`, event => {
	
})

// 1. Submit form to close


// 2. Each gets its own "save"
/* document.querySelector(`.check`).addEventListener(`click`, event => {
	// event.stopPropagation()
	event.target.classList.toggle(`done`)
}) */






// Maybe time? Naww

let tasks = [
	{
		id: 123, // needed?
		date: false, // needed?
		maintask: `Complete homework`,
		subtasks: [
			`Get stuff done`, `Write a plan`
		],
		notes: `Hello woorld!`,
		urgent: true,
		complete: false,
	}
]
tasks.forEach(task => {
	let $task = document.createElement(`li`)
	let $details = document.createElement(`details`)
})



document.querySelector(`.addsub`).addEventListener('click', event => {
	event.currentTarget.parentElement.querySelector(`ul`).append(document.createElement(`li`))
})
