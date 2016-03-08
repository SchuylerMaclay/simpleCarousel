(function () {
    'use strict';

    var CarouselController = function () {
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
        this.leftButton.addEventListener("click", this.moveLeft.bind(this));
        this.rightButton.addEventListener("click", this.moveRight.bind(this));
        // this.rightButton.addEventListener("click", this.moveRight);
    };

    CarouselController.prototype.moveLeft = function () {

        var position = ((this.currentBoxId * 600));
        var boxes = this.boxes;

        boxes.style.transform = 'translate(' + position + 'px)';
        boxes.style.webkitTransform = 'translate(' + position + 'px)';

        this.currentBoxId = ((this.currentBoxId + 1));
        this.currentBox = document.getElementById("box" + this.currentBoxId);

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
        var position = (((this.currentBoxId) * 600));
        var boxes = this.boxes;

        boxes.style.transform = 'translate(' + position + 'px)';
        boxes.style.webkitTransform = 'translate(' + position + 'px)';

        this.currentBoxId = ((this.currentBoxId - 1));

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
