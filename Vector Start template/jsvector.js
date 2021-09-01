
// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x = 3,y = 4){
    this.x = x;
    this.y = y;
}


// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){
  let dir = this.getDirection();
  this.x = mag * Math.cos(dir);
  this.y = mag * Math.sin(dir);
  return this;
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
  return Math.sqrt(this.x*this.x+this.y*this.y);
 }

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
  let mag = this.getMagnitude();
  this.x = mag * Math.cos(dir);
  this.y = mag * Math.sin(dir);
  return this;
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
  let dir = Math.atan2(this.y,this.x);
  return dir;
}

// Add another vector to this vector
JSVector.prototype.add = function(v2){
  this.x += v2.x;
  this.y += v2.y;
  return this;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){
  this.x -= v2.x;
  this.y -= v2.y;
  return this;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){
  return new JSVector(v1.x + v2.x, v1.y + v2.y);
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){
  return new JSVector(v1.x - v2.x, v1.y - v2.y);
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){
  this.x *= scalar;
  this.y *= scalar;
  return this;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
  this.x /= scalar;
  this.y /= scalar;
  return this;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
  return this.divide(this.getMagnitude());
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){

}

// Get the distance between this vector and another one
JSVector.prototype.distance = function(v2){

}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){

}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |
JSVector.prototype.rotate = function(angle) {

}

// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){
}

// Make a copy of this vector
JSVector.prototype.copy = function(){
 }

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {
  let mag = this.getMagnitude();
  let dir = this.getDirection();
    return("x: " + this.x + ", y: " + this.y + " mag: " + mag + " direction: " + dir);
}
