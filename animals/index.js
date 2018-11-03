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
