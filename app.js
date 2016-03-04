(function() {
  'use strict';
  // var currentBox =

  var leftButton = document.getElementById("left-button");
  leftButton.addEventListener("click", moveLeft);
  var rightButton = document.getElementById("right-button");
  rightButton.addEventListener("click", rightButton);


}());

function moveLeft() {
  currentBox = document.getElementById("box1");
  var position = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (position === 600) {
      clearInterval(id);
    } else {
      position += 5;
      currentBox.style.left = position + 'px';
    }
  }
}
