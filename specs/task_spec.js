const assert = require('assert');
const Task = require('../task.js');

describe('Task', function(){

  let task1;

  beforeEach(function(){
    task1 = new Task('Prove the existence of aliens', 10, 2);
  });

  it('should have a description', function(){
    const actual = task1.description;
    assert.strictEqual(actual, 'Prove the existence of aliens');
  });

  it('should have a difficulty level', function(){
    const actual = task1.difficulty;
    assert.strictEqual(actual, 10);
  });

  it('should have an urgency level', function(){
    const actual = task1.urgency;
    assert.strictEqual(actual, 2);
  })

})
