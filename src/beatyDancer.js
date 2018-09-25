var BeatyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer, beaty"></span>');
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.step();
  this.$node.css({
    'animation': 'beat ' + this.timeBetweenSteps / 1000 + 's cubic-bezier(0.245, 0.325, 0.510, 1.305) infinite alternate'
  });
};

BeatyDancer.prototype = Object.create(Dancer.prototype);
BeatyDancer.prototype.constructor = BeatyDancer;


BeatyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};





