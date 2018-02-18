const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('Hero', function(){

  let foxMulder;
  let oreos;
  let sunflowerSeeds;
  let task1;
  let task2;
  let task3;

  beforeEach(function(){
    foxMulder = new Hero('Fox Mulder', 'Sunflower Seeds');
    oreos = new Food('Oreos', 8);
    sunflowerSeeds = new Food('Sunflower Seeds', 12);
    task1 = new Task('Prove the existence of aliens', 10, 2, 'I Want To Believe poster');
    task2 = new Task('Get Skinner onside', 6, 9, 'Search Warrant');
    task3 = new Task('Signal Deep Throat', 3, 6, 'New Information');
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

describe('tasklist', function(){

  it('should have a list of tasks which starts empty', function(){
    const actual = foxMulder.tasklist.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add tasks to the task list', function(){
    foxMulder.addTask(task1);
    foxMulder.addTask(task2);
    foxMulder.addTask(task3);
    const actual = foxMulder.tasklist.length;
    assert.strictEqual(actual, 3);
  });

  it('should sort tasklist by difficulty', function(){
    foxMulder.addTask(task1);
    foxMulder.addTask(task2);
    foxMulder.addTask(task3);
    const actual = foxMulder.tasksByDifficulty();
    assert.deepStrictEqual(actual, [task3, task2, task1]);
  });

  it('should sort tasklist by urgency', function(){
    foxMulder.addTask(task1);
    foxMulder.addTask(task2);
    foxMulder.addTask(task3);
    const actual = foxMulder.tasksByUrgency();
    assert.deepStrictEqual(actual, [task1, task3, task2]);
  });

  it('should sort tasks by reward', function(){
    foxMulder.addTask(task1);
    foxMulder.addTask(task2);
    foxMulder.addTask(task3);
    const actual = foxMulder.tasksByReward();
    assert.deepStrictEqual(actual, [task1, task3, task2])
  })

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
