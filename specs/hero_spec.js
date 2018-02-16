const assert = require('assert');
const Hero = require('../hero.js');

describe('Hero', function(){

  let foxMulder;

  beforeEach(function(){
    foxMulder = new Hero('Fox Mulder');
  });

  it('should have a name', function(){
    const actual = foxMulder.name;
    assert.strictEqual(actual, 'Fox Mulder')
  })



})
