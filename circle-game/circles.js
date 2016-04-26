function Circle(){
  this.element = $('<div class="circle"></div>');
  this.diameter = 50 +  Math.ceil(Math.random() * 100)
  this.position ={
    x: this.newPosition(),
    y: this.newPosition(),
  }

  this.element.css({
    width: this.diameter + 'px',
    height: this.diameter + 'px',
    top: this.position.y,
    left: this.position.x
  });


};

Circle.prototype.newPosition = function() {
  return Math.random() * (750 - this.diameter);
};

Circle.prototype.move = function(){
  var self = this;
  // if you are trying to animate more elements that we have use css3 to animate these elements.
  this.element.animate({
    top: this.newPosition(),
    left: this.newPosition(),
  }, 1000, 'swing', function() {

    self.move();
  });
};

$(document).on('ready', function(){
  var numberOfCircles = 10;
  for(var i = 0; i < numberOfCircles; i++){
    var theCircle = new Circle();
    $('#game').append(theCircle.element);
    theCircle.move();
  };
});
