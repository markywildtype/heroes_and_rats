const Hero = function(name, favouriteFood){
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasklist = [];
  this.score = 0;
}

Hero.prototype.talk = function(){
  return `Hi, I'm ${this.name}`;
}

Hero.prototype.eatFood = function(food){
  if(food.poisonedValue !== 0){
    this.health -= food.poisonedValue;
  } else if(food.name === this.favouriteFood){
    this.health += (food.replenishmentValue * 1.5);
  } else {
    this.health += food.replenishmentValue;
  }
}

Hero.prototype.addTask = function(task){
  this.tasklist.push(task);
}

Hero.prototype.tasksByDifficulty = function(){
  return this.tasklist.sort(function(a, b){
    return a.difficulty - b.difficulty;
  });
}

Hero.prototype.tasksByUrgency = function(){
  return this.tasklist.sort(function(a, b){
    return a.urgency - b.urgency;
  });
}

Hero.prototype.tasksByReward = function(){
  return this.tasklist.sort(function(a, b){
    return a.reward - b.reward;
  });
}

Hero.prototype.completeTask = function(task){
  this.tasklist.forEach(function(item){
    if(item === task){
      item.markComplete()
      this.score += item.reward;
    }
  }.bind(this));

Hero.prototype.viewCompleteTasks = function(){
  return this.tasklist.filter(function(item){
    return item.complete === true;
  });
}

Hero.prototype.viewIncompleteTasks = function(){
  return this.tasklist.filter(function(item){
    return item.complete === false;
  });
}

}

module.exports = Hero;
