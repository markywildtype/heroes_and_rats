const Task = function(description, difficulty, urgency, reward){
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
}

module.exports = Task;
