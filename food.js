const Food = function(name, replenishmentValue){
    this.name = name;
    this.replenishmentValue = replenishmentValue;
    this.poisonedValue = 0;
}

module.exports = Food;
