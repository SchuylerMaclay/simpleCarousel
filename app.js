(function () {
  'use strict';

  var CarouselController = function (count, height, width) {
    this.count = count;
    this.boxHeight = height;
    this.boxWidth = width;
    this.currentBoxId = 1;
    this.currentBox = document.getElementById("box" + this.currentBoxId);
    this.leftButton = document.getElementById("left-button");
    this.rightButton = document.getElementById("right-button");
    this.boxes = document.getElementById("box-wrapper");
    this.lastChild = document.getElementById("box-wrapper").lastElementChild;
    this.firstChild = document.getElementById("box-wrapper").firstElementChild;
  };

  CarouselController.prototype.init = function () {
    this.addButtonListeners();
    this.prependChild(this.lastChild);

  };

  CarouselController.prototype.prependChild = function (lastChild) {
    this.boxes.insertBefore(lastChild, this.firstChild);
  };


  CarouselController.prototype.addButtonListeners = function () {
    // console.log(this.boxes);
    this.leftButton.addEventListener("click", this.moveLeft.bind(this, 1));
    this.rightButton.addEventListener("click", this.moveRight.bind(this));
    // this.rightButton.addEventListener("click", this.moveRight);
  };

  CarouselController.prototype.moveLeft = function (interval) {

    var position = ((this.currentBoxId+interval-1) * this.boxWidth);
    var boxes = this.boxes;

    boxes.style.transform = 'translate(' + position + 'px)';
    boxes.style.webkitTransform = 'translate(' + position + 'px)';

    this.currentBoxId = ((this.currentBoxId + interval));
    this.currentBox = document.getElementById("box" + this.currentBoxId);

    var firstChild = document.getElementById("box-wrapper").firstElementChild;
    console.log("firstChild", firstChild);

    var lastChild = document.getElementById("box-wrapper").lastElementChild;
    console.log("lastChild", lastChild);

    firstChild.style.left = -(position + this.boxWidth) + 'px';
    document.getElementById("box-wrapper").appendChild(firstChild);


  };

  CarouselController.prototype.moveRight = function () {
    var position = (((this.currentBoxId) * this.boxWidth));
    var boxes = this.boxes;

    boxes.style.transform = 'translate(' + position + 'px)';
    boxes.style.webkitTransform = 'translate(' + position + 'px)';

    this.currentBoxId = ((this.currentBoxId - 1));

    //var firstChild = document.getElementById("box-wrapper").firstElementChild;
    //console.log("firstChild", this.firstChild);

    //var lastChild = document.getElementById("box-wrapper").lastElementChild;
    //console.log("lastChild", lastChild);

    this.lastChild.style.left = (position + boxWidth.width) + 'px';
    this.prependChild(this.lastChild);

  };

  var carouselController = new CarouselController(3, 400, 600);
  carouselController.init();
}());


