(function() {
  'use strict';


  var leftButton = document.getElementById("left-button");
  leftButton.addEventListener("click", moveLeft);
  var rightButton = document.getElementById("right-button");
  rightButton.addEventListener("click", rightButton);

  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length; i++) {
    // console.log(boxes[i].style);
    boxes[i].style.transform = 'translate(0px)';
    boxes[i].style.webkitTransform = 'translate(0px)';
  }

}());

function moveLeft() {
  var boxes = document.getElementsByClassName("box");
  var position = '600px';
  // transform: (20px, 20px)
  console.log(boxes);

  for (var i = 0; i < boxes.length; i++) {
    // console.log(boxes[i].style);
    boxes[i].style.transform = 'translate('+ position +')';
    boxes[i].style.webkitTransform = 'translate('+ position +')';
  }

}
