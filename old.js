(function () {
    'use strict';

    var CarouselController = function () {
        this.distanceCounter = 1;
        this.currentBox = document.getElementById("box" + this.distanceCounter);
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
        this.leftButton.addEventListener("click", this.moveLeft.bind(this));
        this.rightButton.addEventListener("click", this.moveRight.bind(this));
        // this.rightButton.addEventListener("click", this.moveRight);
    };

    CarouselController.prototype.moveLeft = function () {

        var position = ((this.distanceCounter * 600));
        var boxes = this.boxes;

        boxes.style.transform = 'translate(' + position + 'px)';
        boxes.style.webkitTransform = 'translate(' + position + 'px)';

        this.distanceCounter = ((this.distanceCounter + 1));
        this.currentBox = document.getElementById("box" + this.distanceCounter);

        var firstChild = document.getElementById("box-wrapper").firstElementChild;
        console.log("firstChild", firstChild);

        var lastChild = document.getElementById("box-wrapper").lastElementChild;
        console.log("lastChild", lastChild);

        firstChild.style.left = -(position + 600) + 'px';
        document.getElementById("box-wrapper").appendChild(firstChild);





        // console.log("current box id before modulo", this.currentBoxId);
        //console.log("current box id", this.currentBoxId);
        // debugger
        //var boxPredictor = ((this.currentBoxId%3)+1);
        //console.log("box Predictor", boxPredictor);
        //var boxIdHere = 0;
        //if (this.currentBoxId%3 === 0){
        //  boxIdHere = 3;
        //  console.log("in three:", boxIdHere);
        //}else {
        //  boxIdHere = this.currentBoxId%3;
        //  console.log("in other:", boxIdHere);
        //}
        //this.currentBox = document.getElementById("box" + boxIdHere);
        //console.log("current box", this.currentBox);

        //if (this.currentBox === lastChild && boxes.length > 2) {
        //  var nextBox = document.getElementById("box" + ((boxIdHere%3)+1));
        //  document.getElementById("carousel").appendChild(nextBox);
        //  console.log("next:", nextBox);
        //  // nextBox.className = "jump";
        //  //nextBox.style.left = -3*600 +'px';
        //  // nextBox.transform ='translate('+ -4*600 +'px)';
        //  // nextBox.className = "box";
        //  console.log("lastbox:reset:", nextBox);
        //}
    };

    CarouselController.prototype.moveRight = function () {
        var position = (((this.distanceCounter) * 600));
        var boxes = this.boxes;

        boxes.style.transform = 'translate(' + position + 'px)';
        boxes.style.webkitTransform = 'translate(' + position + 'px)';

        this.distanceCounter = ((this.distanceCounter - 1));

        //var firstChild = document.getElementById("box-wrapper").firstElementChild;
        //console.log("firstChild", this.firstChild);

        //var lastChild = document.getElementById("box-wrapper").lastElementChild;
        //console.log("lastChild", lastChild);

        this.lastChild.style.left = (position + 600) + 'px';
        this.prependChild(this.lastChild);

    };

    var carouselController = new CarouselController();
    carouselController.init();
}());





//$(document).ready(function() {
//
//  'use strict';
//
//  var CarouselController = function () {
//    this.currentBoxId = 1;
//    this.currentBox = document.getElementById("box" + this.currentBoxId);
//    this.leftButton = document.getElementById("left-button");
//    this.rightButton = document.getElementById("right-button");
//    this.boxes = document.getElementsByClassName("box");
//  };
//
//  CarouselController.prototype.init = function() {
//    this.addButtonListeners();
//    for (var i = 0; i < this.boxes.length; i++) {
//      this.boxes[i].style.transform = 'translate(0px)';
//      this.boxes[i].style.webkitTransform = 'translate(0px)';
//      this.boxes[i].style.msTransform = 'translate(0px)';
//      this.boxes[i].style.oTransform = 'translate(0px)';
//      this.boxes[i].style.mozTransform = 'translate(0px)';
//    }
//  };
//
//  CarouselController.prototype.addButtonListeners = function () {
//    // console.log(this.boxes);
//    this.leftButton.addEventListener("click", this.moveLeft.bind(this));
//    this.rightButton.addEventListener("click", this.moveRight.bind(this));
//    // this.rightButton.addEventListener("click", this.moveRight);
//  };
//
//  CarouselController.prototype.moveLeft = function () {
//
//    console.log(this.currentBoxId);
//    var boxes = this.boxes;
//    var position = ((this.currentBoxId * 600));
//    // this.currentBoxId = ((this.currentBoxId + 1)%3);
//    this.currentBoxId = ((this.currentBoxId + 1));
//    this.currentBox = document.getElementById("box" + this.currentBoxId);
//
//    var firstChild = document.getElementById("box-wrapper").firstElementChild;
//    console.log("firstChild", firstChild);
//
//
//    var lastChild = document.getElementById("box-wrapper").lastElementChild;
//    console.log("lastChild", lastChild);
//
//
//    for (var i = 0; i < boxes.length; i++) {
//      // console.log("last:", lastChild);
//      // console.log("current:", this.currentBox);
//      boxes[i].style.transform = 'translate('+ position +'px)';
//      boxes[i].style.webkitTransform = 'translate('+ position +'px)';
//    }
//
//    var transitionEvent = whichTransitionEvent();
//    transitionEvent && firstChild.addEventListener(transitionEvent, function() {
//      console.log('firstChild in callback:', firstChild);
//      firstChild.style.left = -(position+1200) +'px';
//      document.getElementById("box-wrapper").appendChild(firstChild)
//    });
//
//    function whichTransitionEvent(){
//      var t;
//      var el = document.getElementById("box-wrapper").firstElementChild;
//      var transitions = {
//        'transition':'transitionend',
//        'OTransition':'oTransitionEnd',
//        'MozTransition':'transitionend',
//        'WebkitTransition':'webkitTransitionEnd'
//      }
//
//      for(t in transitions){
//        if( el.style[t] !== undefined ){
//          return transitions[t];
//        }
//      }
//    }
//
//
//
//
//
//    // console.log("current box id before modulo", this.currentBoxId);
//    //console.log("current box id", this.currentBoxId);
//    // debugger
//    //var boxPredictor = ((this.currentBoxId%3)+1);
//    //console.log("box Predictor", boxPredictor);
//    //var boxIdHere = 0;
//    //if (this.currentBoxId%3 === 0){
//    //  boxIdHere = 3;
//    //  console.log("in three:", boxIdHere);
//    //}else {
//    //  boxIdHere = this.currentBoxId%3;
//    //  console.log("in other:", boxIdHere);
//    //}
//    //this.currentBox = document.getElementById("box" + boxIdHere);
//    //console.log("current box", this.currentBox);
//
//    //if (this.currentBox === lastChild && boxes.length > 2) {
//    //  var nextBox = document.getElementById("box" + ((boxIdHere%3)+1));
//    //  document.getElementById("carousel").appendChild(nextBox);
//    //  console.log("next:", nextBox);
//    //  // nextBox.className = "jump";
//    //  //nextBox.style.left = -3*600 +'px';
//    //  // nextBox.transform ='translate('+ -4*600 +'px)';
//    //  // nextBox.className = "box";
//    //  console.log("lastbox:reset:", nextBox);
//    //}
//  };
//
//  CarouselController.prototype.moveRight = function () {
//    this.currentBox = document.getElementById("box" + this.currentBoxId);
//    // console.log(this.currentBox);
//    var boxes = this.boxes;
//    var position = (this.currentBoxId-2) * 600 + 'px';
//    this.currentBoxId = (this.currentBoxId - 1);
//    console.log(this.currentBoxId);
//    for (var i = 0; i < boxes.length; i++) {
//
//      boxes[i].style.transform = 'translate('+ position +')';
//      boxes[i].style.webkitTransform = 'translate('+ position +')';
//    }
//    // var nextBox = document.getElementById("box" + this.currentBoxId+1);
//    // nextBox.style.position = 3*600+'px';
//  };
//
//  var carouselController = new CarouselController();
//  carouselController.init();
//}());
