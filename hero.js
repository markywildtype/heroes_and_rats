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

Hero.prototype.tasksByDifficulty = function(){
      const sorted = this.tasklist.sort(function(a, b){
      return a.difficulty - b.difficulty;
    });
    return sorted;
}

Hero.prototype.tasksByUrgency = function(){
  const sorted = this.tasklist.sort(function(a, b){
    return a.urgency - b.urgency;
  });
  return sorted;
}

Hero.prototype.tasksByReward = function(){
  const sorted = this.tasklist.sort(function(a, b){
    return a.reward > b.reward;
  });
  console.log(sorted);
  return sorted;
}

module.exports = Hero;
