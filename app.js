(function () {
    'use strict';

    var CarouselController = function (count, width) {
        this.boxWidth = width;
        this.count = count;
        this.distanceCounter = 0;
        this.leftButton = document.getElementById("left-button");
        this.rightButton = document.getElementById("right-button");
        this.boxes = document.getElementById("box-wrapper");
        this.lastChild = document.getElementById("box-wrapper").lastElementChild;
        this.firstChild = document.getElementById("box-wrapper").firstElementChild;
    };

    CarouselController.prototype.init = function () {
        this.addButtonListeners();
        //move last two to the front so clicks cant catch up
        this.prependChild(this.lastChild, this.firstChild);
        this.firstChild.style.left = (0 + this.boxWidth) + 'px';
        this.prependChild(this.lastChild, this.firstChild);
        this.firstChild.style.left = (600 + this.boxWidth) + 'px';
    };

    CarouselController.prototype.prependChild = function (lastChild, firstChild) {
        this.boxes.insertBefore(lastChild, firstChild);
        this.firstChild = document.getElementById("box-wrapper").firstElementChild;
        this.lastChild = document.getElementById("box-wrapper").lastElementChild;
    };


    CarouselController.prototype.addButtonListeners = function () {
        this.leftButton.addEventListener("click", this.moveLeft.bind(this, 1));
        this.rightButton.addEventListener("click", this.moveRight.bind(this, 1));
    };

    CarouselController.prototype.moveLeft = function (interval) {

        var position = ((this.distanceCounter+interval) * this.boxWidth);
        var boxes = this.boxes;

        boxes.style.transform = 'translate(' + position + 'px)';
        boxes.style.webkitTransform = 'translate(' + position + 'px)';

        this.distanceCounter = ((this.distanceCounter + interval));

        var firstChild = document.getElementById("box-wrapper").firstElementChild;

        var lastChild = document.getElementById("box-wrapper").lastElementChild;

        firstChild.style.left = -((this.count+this.distanceCounter-3)*this.boxWidth) + 'px';
        document.getElementById("box-wrapper").appendChild(firstChild);


    };

    CarouselController.prototype.moveRight = function (interval) {

        var position = ((this.distanceCounter - interval) * this.boxWidth);
        var boxes = this.boxes;

        boxes.style.transform = 'translate(' + position + 'px)';
        boxes.style.webkitTransform = 'translate(' + position + 'px)';

        this.distanceCounter = ((this.distanceCounter - interval));

        var firstChild = document.getElementById("box-wrapper").firstElementChild;
        var lastChild = document.getElementById("box-wrapper").lastElementChild;

        lastChild.style.left = (-(this.distanceCounter)+2)*this.boxWidth + 'px';
        this.prependChild(lastChild, firstChild);

    };

    var carouselController = new CarouselController(9, 600);
    carouselController.init();
}());


