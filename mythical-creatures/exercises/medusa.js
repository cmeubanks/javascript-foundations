var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
  this.name = name;
  this.statues = [];
  }
  gazeAtVictim(person) {
    var victim = new Statue(person.name)
    if(this.statues.length <= 2){
    this.statues.push(victim)
  } else {
    this.statues.push(victim)
    var returnPerson = new Person(this.statues[0].name)
    returnPerson.mood = 'relieved';
    this.statues.shift();
    return returnPerson
  }
  }
};

module.exports = Medusa;
