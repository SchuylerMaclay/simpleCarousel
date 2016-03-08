(function () {
    'use strict';

    var CarouselController = function (count, height, width) {
        this.count = count;
        this.boxHeight = height;
        this.boxWidth = width;
        this.distanceCounter = 0;
        this.currentBox = document.getElementById("box" + this.distanceCounter);
        this.leftButton = document.getElementById("left-button");
        this.rightButton = document.getElementById("right-button");
        this.boxes = document.getElementById("box-wrapper");
        this.lastChild = document.getElementById("box-wrapper").lastElementChild;
        this.firstChild = document.getElementById("box-wrapper").firstElementChild;
    };

    CarouselController.prototype.init = function () {
        this.addButtonListeners();
        this.prependChild(this.lastChild, this.firstChild);
        this.lastChild.style.left = (0 + this.boxWidth) + 'px';


    };

    CarouselController.prototype.prependChild = function (lastChild, firstChild) {
        this.boxes.insertBefore(lastChild, firstChild);
    };


    CarouselController.prototype.addButtonListeners = function () {
        this.leftButton.addEventListener("click", this.moveLeft.bind(this, 1));
        this.rightButton.addEventListener("click", this.moveRight.bind(this, -1));
    };

    CarouselController.prototype.moveLeft = function (interval) {

        var position = ((this.distanceCounter+interval) * this.boxWidth);
        var boxes = this.boxes;

        boxes.style.transform = 'translate(' + position + 'px)';
        boxes.style.webkitTransform = 'translate(' + position + 'px)';

        this.distanceCounter = ((this.distanceCounter + interval));
        this.currentBox = document.getElementById("box" + this.distanceCounter);

        var firstChild = document.getElementById("box-wrapper").firstElementChild;
        console.log("firstChild", firstChild);

        var lastChild = document.getElementById("box-wrapper").lastElementChild;
        console.log("lastChild", lastChild);

        firstChild.style.left = -(position + this.boxWidth) + 'px';
        document.getElementById("box-wrapper").appendChild(firstChild);
        console.log("currenct box id at end of left:", this.distanceCounter)

    };

    CarouselController.prototype.moveRight = function (interval) {

        var position = ((this.distanceCounter + interval) * this.boxWidth);
        var boxes = this.boxes;

        boxes.style.transform = 'translate(' + position + 'px)';
        boxes.style.webkitTransform = 'translate(' + position + 'px)';

        this.distanceCounter = ((this.distanceCounter + interval));
        this.currentBox = document.getElementById("box" + this.distanceCounter);

        var firstChild = document.getElementById("box-wrapper").firstElementChild;
        console.log("firstChild", firstChild);

        var lastChild = document.getElementById("box-wrapper").lastElementChild;
        console.log("lastChild", lastChild);

        lastChild.style.left = -(position - this.boxWidth) + 'px';
        this.prependChild(lastChild, firstChild);
        console.log("currenct box id at end of right:", this.distanceCounter)
    };

    var carouselController = new CarouselController(3, 400, 600);
    carouselController.init();
}());


