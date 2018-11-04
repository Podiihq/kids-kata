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
		no3: 'choice three',
          }
    

});

function answer(){
const app = new Clarifai.App({
				apiKey: '215329a0d20941a7815b809a6650d0f2'

				})

			app.models.predict(Clarifai.COLOR_MODEL, 'http://www.acdivoca.org.co/wp-content/uploads/bfi_thumb/dummy-4-n6weeqyjuuv1p400l2c69lnocx5uo9njt251d2zrsg.png').then(
				function(response){
					console.log(response.outputs[0].data.colors[0].w3c.name)

				},
				function(err){
					console.log(err)
				})
}

var displayans = new Vue ({
	el: '#displayans',
	data: {
		collapsed: true,
		ans: 'the answer is '
	}
});

 