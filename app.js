(function() {
  'use strict';

  var CarouselController = function () {
    this.currentBoxId = 1;
    this.currentBox = document.getElementById("box" + this.currentBoxId);
    this.leftButton = document.getElementById("left-button");
    this.rightButton = document.getElementById("right-button");
    this.boxes = document.getElementsByClassName("box");
  };

  CarouselController.prototype.init = function() {
    this.addButtonListeners();
    for (var i = 0; i < this.boxes.length; i++) {
      this.boxes[i].style.transform = 'translate(0px)';
      this.boxes[i].style.webkitTransform = 'translate(0px)';
    }
  };

  CarouselController.prototype.addButtonListeners = function () {
    // console.log(this.boxes);
    this.leftButton.addEventListener("click", this.moveLeft.bind(this));
    this.rightButton.addEventListener("click", this.moveRight.bind(this));
    // this.rightButton.addEventListener("click", this.moveRight);
  };

  CarouselController.prototype.moveLeft = function () {
    this.currentBox = document.getElementById("box" + this.currentBoxId);
    console.log(this.currentBox);
    var boxes = this.boxes;
    var position = ((this.currentBoxId * 600));
    this.currentBoxId = (this.currentBoxId + 1);
    console.log(this.currentBoxId);
    for (var i = 0; i < boxes.length; i++) {
      var lastChild = document.getElementById("myList").lastChild;
      if (this.currentBoxId === 3 && boxes.length > 2) {
        var nextBox = document.getElementById("box" + (1));
        document.getElementById("carousel").appendChild(nextBox);
        console.log("lastbox:", nextBox);
        // nextBox.className = "jump";
        nextBox.style.left = -3*600 +'px';
        // nextBox.transform ='translate('+ -4*600 +'px)';
        // nextBox.className = "box";
        console.log("lastbox:reset:", nextBox);
      }
      boxes[i].style.transform = 'translate('+ position +'px)';
      boxes[i].style.webkitTransform = 'translate('+ position +'px)';
    }
  };

  CarouselController.prototype.moveRight = function () {
    this.currentBox = document.getElementById("box" + this.currentBoxId);
    // console.log(this.currentBox);
    var boxes = this.boxes;
    var position = (this.currentBoxId-2) * 600 + 'px';
    this.currentBoxId = (this.currentBoxId - 1);
    console.log(this.currentBoxId);
    for (var i = 0; i < boxes.length; i++) {

      boxes[i].style.transform = 'translate('+ position +')';
      boxes[i].style.webkitTransform = 'translate('+ position +')';
    }
    // var nextBox = document.getElementById("box" + this.currentBoxId+1);
    // nextBox.style.position = 3*600+'px';
  };

  var carouselController = new CarouselController();
  carouselController.init();
}());
