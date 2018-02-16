const Hero = function(name, favouriteFood){
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasklist = [];
}

Hero.prototype.talk = function(){
  return `Hi, I'm ${this.name}`;
}

module.exports = Hero;
