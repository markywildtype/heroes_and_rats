const Hero = function(name, favouriteFood){
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasklist = [];
}

Hero.prototype.talk = function(){
  return `Hi, I'm ${this.name}`;
}

Hero.prototype.eatFood = function(food){
  this.health += food.replenishmentValue;
}

module.exports = Hero;
