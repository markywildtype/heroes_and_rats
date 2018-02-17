const assert = require('assert');
const Food = require('../food.js');

describe('Food', function(){

  let food;

  beforeEach(function(){
    food = new Food('Sunflower Seeds');
  });

  it('should have a name', function(){
    const actual = food.name;
    assert.strictEqual(actual, 'Sunflower Seeds');
  })

})
