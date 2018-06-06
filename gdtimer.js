// Sets Up Timer 
let timer = new Timer();
$('#GD-timer .startButton').click(() => {
    timer.start();
});
$('#GD-timer .pauseButton').click(() => {
    timer.pause();
});
$('#GD-timer .stopButton').click(() => {
    timer.stop();
});
$('#GD-timer .resetButton').click(() => {
    location.reload();
});
timer.addEventListener('secondsUpdated', (e) => {
    $('#GD-timer .values').html(timer.getTimeValues().toString());
});
timer.addEventListener('started',(e) => {
    $('#GD-timer .values').html(timer.getTimeValues().toString());
});
timer.addEventListener('reset',(e) => {
    $('#GD-timer .values').html(timer.getTimeValues().toString());
});

//Change Message Depending on Button Press
$('.startButton').click(() => {
  $('#message').html('<h1>Build Start</h1>');
});

$('.pauseButton').click(() => {
  $('#message').html('<h1>Build Pause</h1>');
});

$('.resetButton').click(() => {
  $('#message').html('');
});

//Iris Number Business
$('#submit').click(() => {
let irisNum = document.getElementById('iris').value;

irisArray.push(irisNum.trim());
if(irisNum == 0) {
  alert('iris number requied');
} else {
$('.input-cont').slideToggle();}
});


//Displays Finished Time
$('.stopButton').click(() => {
  $('#message').html('<h1>Build Complete</h1>');
  let fTime = document.getElementById('data').textContent;
  finalTime.push(fTime);
});



let irisArray = [];
let finalTime = [];