const btonStart = document.getElementById('botn');
const btonTrue = document.getElementById('true');
const btonFalse = document.getElementById('false');

btonStart.addEventListener('click', function(event){
getCero();
})

btonTrue.addEventListener('click', function(event){
tF();
})

btonFalse.addEventListener('click', function(event){
tf();
})

function getCero() {
  fetch(`https://opentdb.com/api.php?amount=10`)
    .then(function(response) {
    // Turns the the JSON into a JS object
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let html = `<div class="container-fluid">
      <div class="row">
      <div class="col s12 l12">
        <p>${data.results[0].question}</p>
        <a class="waves-effect waves-light btn-large purple accent-2" id="btonTrue" ${data.results[0].correct_answer} onclick=tf();>True</a>
        <a class="waves-effect waves-light btn-large purple accent-2" id="btonFalse" ${data.results[0].incorrect_answer} onclick=tf();>False</a>
        </div>`;
    //Put that HTML on the page
  document.getElementById('here').innerHTML = html;
  })
    botn.remove();
    out.remove();
  }


 function tF() {
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
}
