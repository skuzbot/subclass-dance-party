var RunnyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer, runny"></span>');
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.step();
};

RunnyDancer.prototype = Object.create(Dancer.prototype);
RunnyDancer.prototype.constructor = RunnyDancer;


RunnyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({left: Math.random() * 1000}, {top: Math.random() * 1000}, this.timeBetweenSteps);
  this.$node.animate({top: Math.random() * 1000}, this.timeBetweenSteps);
};



