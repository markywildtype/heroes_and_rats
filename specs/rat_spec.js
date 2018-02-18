const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe('Rat', function(){

  let rat;
  let food;

  beforeEach(function(){
    rat = new Rat('Brown', 10);
    food = new Food('Sunflower Seeds', 12);
  });

  it('should have a type', function(){
    const actual = rat.type;
    assert.strictEqual(actual, 'Brown');
  });

  it('should have a poison level', function(){
    const actual = rat.poisonLevel;
    assert.strictEqual(actual, 10);
  });

  it('should be able to poison food', function(){
    rat.touchFood(food);
    actual = food.poisoned;
    assert.strictEqual(actual, true)
  });

  it('should give food a poisonedValue upon touching', function(){
    rat.touchFood(food);
    actual = food.poisonedValue;
    assert.strictEqual(actual, 10)
  })

});
