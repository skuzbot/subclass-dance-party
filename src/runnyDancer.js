var BeatyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer, runny"></span>');
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.step();
};

BeatyDancer.prototype = Object.create(Dancer.prototype);
BeatyDancer.prototype.constructor = BeatyDancer;


BeatyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({left: Math.random() * 1000}, this.timeBetweenSteps * 5);
  this.$node.animate({top: Math.random() * 1000}, this.timeBetweenSteps * 5);
};

BeatyDancer.prototype.lineUp = function() {
  this.$node.stop();
  var styleSettings = {
    left: 30
  };
  this.$node.css(styleSettings);
};



