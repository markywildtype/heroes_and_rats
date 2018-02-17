const assert = require('assert');
const Task = require('../task.js');

describe('Task', function(){

  let task1;

  beforeEach(function(){
    task1 = new Task('Prove the existence of aliens', 10, 2, 'I Want To Believe poster');
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
  });

  it('should have a reward', function(){
    const actual = task1.reward;
    assert.strictEqual(actual, 'I Want To Believe poster');
  });

  it('should have a completion status, which starts at false', function(){
    const actual = task1.complete;
    assert.strictEqual(actual, false);
  });

  it('should be able to mark a task as completed', function(){
    task1.markComplete();
    const actual = task1.complete;
    assert.strictEqual(actual, true);
  })


})
