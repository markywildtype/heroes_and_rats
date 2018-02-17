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
  if(food.name === this.favouriteFood){
    this.health += (food.replenishmentValue * 1.5);
  } else {
    this.health += food.replenishmentValue;
  }
}

Hero.prototype.addTask = function(task){
  this.tasklist.push(task);
}

module.exports = Hero;
