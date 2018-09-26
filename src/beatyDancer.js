var BeatyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<a href="#" class="dancer, beaty"></a>');
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

BeatyDancer.prototype.love = function() {
  var styleSettings = {
    content: ' url(img/like-1.png)'
  };
  this.$node.css(styleSettings);
};





