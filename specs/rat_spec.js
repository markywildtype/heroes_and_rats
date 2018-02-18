const assert = require('assert');
const Rat = require('../rat.js');

describe('Rat', function(){

  let rat;

  beforeEach(function(){
    rat = new Rat('Brown');
  })

  it('should have a type', function(){
    const actual = rat.type;
    assert.strictEqual(actual, 'Brown');
  })

});
