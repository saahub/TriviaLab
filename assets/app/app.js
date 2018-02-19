const btonStart = document.getElementById('botn');

const here = document.getElementById('here');


btonStart.addEventListener('click', function(event){
getCero();
})



function getCero() {
  fetch(`https://opentdb.com/api.php?amount=10&type=boolean`)
    .then(function(response) {
    // Turns the the JSON into a JS object
      return response.json();
    })
    .then(function(data) {
      console.log(data);
          let i = 0;
    let question = data.results[i].question;
    let difficulty = data.results[i].difficulty;
    let correctAnswer = data.results[i].correct_answer;
    let wrongAnswer = data.results[i].incorrect_answers[i];
      let html = `<div class="container-fluid">
      <div class="row">
      <div class="col s12 l12">
        <p>${data.results[0].question}</p>
        <a class="waves-effect waves-light btn-large purple accent-2" id="btonTrue">True</a>
        <a class="waves-effect waves-light btn-large purple accent-2" id="btonFalse">False</a>
        </div>`;
    //Put that HTML on the page
  here.innerHTML = html;
  const btonFalse = document.getElementById('btonFalse');
  const btonTrue = document.getElementById('btonTrue');


  btonTrue.addEventListener('click', function(event){
    if(correctAnswer === 'false') {
      alert('correcto')
    }
    else {
      alert('noooo!')
    }

})

btonFalse.addEventListener('click', function(event){

})
  });
    botn.remove();
    out.remove();
  };


/* function tF() {
  fetch(`https://opentdb.com/api.php?amount=10&type=boolean`)
  .then(function(response){
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let i = 0;
    let question = results[i].question;
    let difficulty = results[i].difficulty;
    let correctAnswer = results[i].correct_answer;
    let wrongAnswer = results[i].incorrect_answers[i];
  });
}*/
