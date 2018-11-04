new Vue({
  el: '#header',
  data: {
    message: 'KIDS KATA'

  }

})

new Vue({
  el: '#object',
  data: {
    message: 'Learn All the Objects in the world Here.'

  }

})

new Vue({
  el: '#query',
  data: {
    message: 'What is the name of this picture?'

  }

})

new Vue({
  el: '#answer',
  data: {
    message: 'The Answer is....'

  }

})

new Vue({
  data() {
    return {
      FetchedRestuls: []

    }

  }

})


const app = new Clarifai.App({
  apiKey: '817dc940f3764c3b91d389b1bc982d10'
});

app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
  function(response) {
    console.log(response.outputs[0].data.concepts[0].name);
  },
  function(err) {
    console.error(err);
  }
);

