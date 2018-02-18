const Rat = function(type, poisonLevel){
  this.type = type;
  this.poisonLevel = poisonLevel;
}

Rat.prototype.touchFood = function(food){
  food.poisoned = true;
  food.poisonedValue = this.poisonLevel;
}

module.exports = Rat;
