new Vue ({
	el: '#heading',
	data: {
		heading: 'KIDS KATA',
		slogan: 'Learning experience made cooler'
	}
})
new Vue ({
	el: '#image',
	data: {
		shapes: 'What is the shape and color of the above item?'
	}
})

new Vue ({
	el: '#answer',
	data: {
		no1: 'choice one' ,
		no2: 'choice two',
		no3: 'choice three'

	}
})
var displayans = new Vue ({
	el: '#displayans',
	data: {
		collapsed: true,
		ans: 'The answer is'
	}
});