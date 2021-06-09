//Variables Declarations
let counter = 0;
let interval;

//targating DOM Buttons
let btnPlay = document.getElementsByTagName("img")[0];
let btnReset = document.getElementsByTagName("img")[1];
let btnPause = document.getElementsByTagName("img")[2];

//Center Timer
let div = document.getElementsByTagName("div")[0];
let input = document.getElementsByTagName("input")[0];

//Start the event
btnPlay.addEventListener("click", function () {
  clearInterval(interval);
  counter = input.value;
  if(input.value==""){
    location.reload();
  }
  interval = setInterval(play, 1000);
});

//reset the timer
btnReset.addEventListener("click", function () {
  console.log("reset");
  location.reload();
});

//Fire when user press pause
btnPause.addEventListener("click", function () {
  input.value = counter;
  clearInterval(interval);
});

//Function is passed when play button is pressed
function play() {
  
  if (counter >= 10) {
    console.log("play");
    div.innerText = counter--;
  }

  if (counter < 10 && counter >= 0) {
    div.innerText = "0" + counter--;
  }

}
