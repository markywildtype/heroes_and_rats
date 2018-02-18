const assert = require('assert');
const Rat = require('../rat.js');

describe('Rat', function(){

  let rat;

  beforeEach(function(){
    rat = new Rat('Brown', 10);
  });

  it('should have a type', function(){
    const actual = rat.type;
    assert.strictEqual(actual, 'Brown');
  });

  it('should have a poison level', function(){
    const actual = rat.poisonLevel;
    assert.strictEqual(actual, 10);
  });

});
