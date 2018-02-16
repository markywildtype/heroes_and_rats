const assert = require('assert');
const Hero = require('../hero.js');

describe('Hero', function(){

  let foxMulder;

  beforeEach(function(){
    foxMulder = new Hero("Fox Mulder", "Sunflower Seeds");
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

})
