// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<a href ="#" class="dancer"></a>');
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
  this.$node.css({
    'transition': '1s linear'
  });
};

Dancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 30
  };
  this.$node.css(styleSettings);
  
};

Dancer.prototype.keepDancing = function() {
  var styleSettings = {
    left: $('body').width() * Math.random(),
    top: $('body').height() * Math.random()
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.shoot = function () {
  var styleSettings = {
    left: $('body').width() * -10 * Math.random(),
    top: $('body').height() * -10 * Math.random()
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.love = function () {
  var styleSettings = {
    content: ' url(img/like-1.png)'
  };
  this.$node.css(styleSettings);
};