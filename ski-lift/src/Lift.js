var Skier = require("../src/Skier");

class Lift {
  constructor(num) {
    this.inService = true;
    this.limit = num;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  admitSkier(name, boolean) {
    var skier = new Skier(name, boolean)
    if (this.skiers.length < this.limit && skier.hasLiftTicket){
    this.skiers.push(skier);
  } else if( skier.hasLiftTicket){
    return `Sorry, ${name}. Please wait for the next lift!`
  } else {
    return `Sorry, ${name}. You need a lift ticket!`
  }
  }
  startLift() { 
    if(this.skiers.length === this.limit){
      this.safetyBar = 'down';
    }
    var amount = this.limit - this.skiers.length
    var skier
    if (amount === 1) {
      skier = 'skier';
    } else {
      skier = 'skiers'
    }
    this.safteyBar = 'up';
    return `We still need ${amount} more ${skier}!`
  }
}

module.exports = Lift;
