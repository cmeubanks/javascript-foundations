const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(object) {
    if(object) {
    this.name = object.name;
    this.location = object.area || 'Winterfell';
    this.safe = false;
  }
  }
  sayHouseWords() {
    if(this.safe){
      return 'The North Remembers'
    } else {
    return 'Winter is Coming'
    }
  }
  callDirewolf(name, home) {
  var direwolf =  new Direwolf(name, this.location);
  direwolf.protect(this)
  return direwolf
  }
}

module.exports = Stark;
