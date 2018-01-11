document.addEventListener('DOMContentLoaded', start)


function start() {
  addEventListeners()
};

function addEventListeners() {
  var images = document.getElementsByClassName("images");
  for (var i = 0; i <images.length; i++) {
    images[i].addEventListener('click', function(e) {imageClicked(e.target)});
  }
};


function imageClicked(e) {
  var audio = new Audio("../sounds/" + e.id + ".wav");
    audio.play();
    console.log("Hi " + e.id);
  };
