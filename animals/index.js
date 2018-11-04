var app = new Vue({
  el: '#app',
  data: {
    heading: 'KIDS KATA',
    desc: 'Learning Experience Made Cooler',
    question: 'What is this?',
    button1: 'option1',
    button2: 'option2',
    button3: 'option3',
    seen: false
  },
  methods: {
    wololo: function(){
      app.seen = true
    }
  }
})
const app1 = new Clarifai.App({
  apiKey: '902c4900347f4383819c908db6eee558'
});
app1.models.predict(Clarifai.GENERAL_MODEL, 'https://postmediacanoe.files.wordpress.com/2018/07/kim-kardashian-e1531963765857.jpg').then(
  function(response){
    console.log("popo")
  },
  function(err){
    console.error(err)
  }
);
