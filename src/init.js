$(document).ready(function () {
  window.dancers = [];
  var counter = 0;

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var left = $('body').height() * Math.random();
    var top = $('body').width() * Math.random();
    //iterates counter for iD attr.
    counter++;

    var dancer = new dancerMakerFunction(
      left,
      top,
      Math.random() * 1000
    );
    //adds id to dancer so click events can only select that dancer
    dancer.$node.attr('id', 'dancer #' + counter);
    $('#wrapper').append(dancer.$node);
    
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function (event) {
    window.dancers.forEach(function (dancer) {
      dancer.lineUp();
    });
  });

  $('.keepDancingButton').on('click', function (event) {
    window.dancers.forEach(function (dancer) {
      dancer.keepDancing();
    });
  });

  // event listener on our target "blinkyDancer"
  //  we want it to listen to a hover/mouse near
  //  we want to run our mouse follow function here
  $('#wrapper').on('click', '.beaty', function(event) {
    window.dancers.forEach(function (dancer) {
      dancer.love();  
    });
    return undefined;
  });
  
  $('#wrapper').on('click', '.blinky', function(event) {
    window.dancers.forEach(function (dancer) {
      dancer.shoot();  
    });
  });


  //oooor event listener on mouseclick for "blinkyDancer"
  //


  // $(window.onload = function () {
  //   var blinkyDancer = document.getElementByClass("blinky");
  //   var x, y;
  //   // On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
  //   window.addEventListener('mousemove', function (event) {
  //     x = event.clientX;
  //     y = event.clientY;
  //     if (typeof x !== 'undefined') {
  //       blinkyDancer.style.left = x + "px";
  //       blinkyDancer.style.top = y + "px";
  //     }
  //   }, false);
  // });

});