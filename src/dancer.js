// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.step();
};  

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 30
  };
  this.$node.css(styleSettings);
  this.$node.css({'transition': '1s linear'});
};

Dancer.prototype.keepDancing = function() {
  var styleSettings = {
    left: $('body').width() * Math.random(),
    top: $('body').height() * Math.random()
  };
  this.$node.css(styleSettings);
};
