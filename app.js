(function () {
    'use strict';

    var Carousel = function (count, width) {
        this.boxWidth = width;
        this.count = count;
        this.distanceCounter = 0;
        this.leftButton = document.getElementById("left-button");
        this.rightButton = document.getElementById("right-button");
        this.boxes = document.getElementById("box-wrapper");
        this.lastChild = document.getElementById("box-wrapper").lastElementChild;
        this.firstChild = document.getElementById("box-wrapper").firstElementChild;
        this.selectors = document.getElementById("select-buttons");

    };

    Carousel.prototype.init = function () {
        this.addButtonListeners();

        // set up initial selection
        var current = document.getElementById(1);
        current.className = "selected";
        this.highlightSelected(1);

        //move last two to the front so clicks cant catch up
        this.prependDiv(this.lastChild, this.firstChild);
        this.firstChild.style.left = (0 + this.boxWidth) + 'px';
        this.prependDiv(this.lastChild, this.firstChild);
        this.firstChild.style.left = (600 + this.boxWidth) + 'px';
    };

    Carousel.prototype.highlightSelected = function (id) {

        var selected = document.getElementsByClassName("selected");
        if (selected[0]) {selected[0].classList.remove('selected');}
        var current = document.getElementById(id);
        current.className = "selected";
    };
    Carousel.prototype.highlightThird = function () {

        var selected = document.getElementsByClassName("box");
        var current = selected[2];
        var id = current.id;
        this.highlightSelected(id[3]);
    };

    Carousel.prototype.prependDiv = function (lastChild, firstChild) {
        this.boxes.insertBefore(lastChild, firstChild);
        this.firstChild = document.getElementById("box-wrapper").firstElementChild;
        this.lastChild = document.getElementById("box-wrapper").lastElementChild;
    };

    Carousel.prototype.appendDiv = function (firstChild) {
        this.boxes.appendChild(firstChild);
        this.firstChild = document.getElementById("box-wrapper").firstElementChild;
        this.lastChild = document.getElementById("box-wrapper").lastElementChild;
    };

    Carousel.prototype.addButtonListeners = function () {
        this.leftButton.addEventListener("click", this.moveLeft.bind(this, 1));
        this.rightButton.addEventListener("click", this.moveRight.bind(this, 1));
        this.selectors.addEventListener("click", this.jump.bind(this));
    };

    Carousel.prototype.jump = function (event) {
        var target = event.target.firstChild.id;
        var currentId = (this.distanceCounter % this.count) + 1;
        var move = target - currentId;
        if (move > 0) {
            this.moveLeft(move);
        } else if (move < 0) {
            this.moveRight(-move);
        }
    };

    Carousel.prototype.moveLeft = function (interval) {
        var counter = 1;
        while (counter <= interval) {

            var position = ((this.distanceCounter + 1) * this.boxWidth);
            var boxes = this.boxes;
            boxes.style.transform = 'translate(' + position + 'px)';
            boxes.style.webkitTransform = 'translate(' + position + 'px)';

            this.distanceCounter = ((this.distanceCounter + 1));

            var firstChild = document.getElementById("box-wrapper").firstElementChild;
            firstChild.style.left = -((this.count + this.distanceCounter - 3) * this.boxWidth) + 'px';
            this.appendDiv(firstChild);
            this.highlightThird();
            counter = counter + 1;
        }
    };

    Carousel.prototype.moveRight = function (interval) {
        var counter = 1;
        while (counter <= interval) {

            var position = ((this.distanceCounter - 1) * this.boxWidth);
            var boxes = this.boxes;

            boxes.style.transform = 'translate(' + position + 'px)';
            boxes.style.webkitTransform = 'translate(' + position + 'px)';

            this.distanceCounter = ((this.distanceCounter - 1));

            var firstChild = document.getElementById("box-wrapper").firstElementChild;
            var lastChild = document.getElementById("box-wrapper").lastElementChild;

            lastChild.style.left = (-(this.distanceCounter) + 2) * this.boxWidth + 'px';
            this.prependDiv(lastChild, firstChild);
            this.highlightThird();
            counter = counter + 1;
        }
    };

    var carouselController = new Carousel(9, 600);
    carouselController.init();
}());


