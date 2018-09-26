var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<a href="#" class="dancer, blinky"></a>');
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

// mouse follow function here
//  will be a function prototype of blinkyDancer
//  what behaviors happen?

// BlinkyDancer.prototype.shoot = function () {
//   var styleSettings = {
//     left: $('body').width() * -10 * Math.random(),
//     top: $('body').height() * -10 * Math.random()
//   };
//   this.$node.css(styleSettings);
// };