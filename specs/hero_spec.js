const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js')

describe('Hero', function(){

  let foxMulder;
  let oreos;
  let sunflowerSeeds;

  beforeEach(function(){
    foxMulder = new Hero('Fox Mulder', 'Sunflower Seeds');
    oreos = new Food('Oreos', 8);
    sunflowerSeeds = new Food('Sunflower Seeds', 12);
  });

  it('should have a name', function(){
    const actual = foxMulder.name;
    assert.strictEqual(actual, 'Fox Mulder')
  });

  it('should have a health value starting at 100', function(){
    const actual = foxMulder.health;
    assert.strictEqual(actual, 100);
  });

  it('should have a favourite food', function(){
    const actual = foxMulder.favouriteFood;
    assert.strictEqual(actual, 'Sunflower Seeds');
  });

  it('should be able to talk', function(){
    const actual = foxMulder.talk();
    assert.strictEqual(actual, "Hi, I'm Fox Mulder")
  });

  it('should have a list of tasks which starts empty', function(){
    const actual = foxMulder.tasklist.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to eat food to increase health value', function(){
    foxMulder.eatFood(oreos);
    const actual = foxMulder.health;
    assert.strictEqual(actual, 108);
  });

  it('should increase health by 1.5x if eating favourite food', function(){
    foxMulder.eatFood(sunflowerSeeds);
    const actual = foxMulder.health;
    assert.strictEqual(actual, 118);
  });

})
