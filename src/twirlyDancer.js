var TwirlyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer, twirly"></span>');
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.step();
  this.$node.css({'animation': 'spin ' + this.timeBetweenSteps / 500 + 's linear infinite'});
};

TwirlyDancer.prototype = Object.create(Dancer.prototype);
TwirlyDancer.prototype.constructor = TwirlyDancer;


TwirlyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
