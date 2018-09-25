describe('twilryDancer', function() {

  var twilryDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    twilryDancer = new twilryDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(twilryDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(twilryDancer.$node, 'toggle');
    twilryDancer.step();
    expect(twilryDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(twilryDancer, 'step');
      expect(twilryDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(twilryDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(twilryDancer.step.callCount).to.be.equal(2);
    });
  });
});
