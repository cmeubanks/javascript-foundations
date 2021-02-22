class Centaur {
  constructor(object) {
    this.name = object.name;
    this.breed = object.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0;
  }
  shootBow() {
    this.counter+=1
    if(this.counter === 3 || this.cranky){
      this.cranky = true;
      return 'NO!'
    }
    if(!this.standing && this.layingDown) {
      return 'NO!'
    }
    return 'Twang!!!'
  }
  run() {
    this.counter+=1
    if(this.counter === 3 || this.cranky){
      this.cranky = true;
      return 'NO!'
    }
    if(!this.standing && this.layingDown) {
      return 'NO!'
    }
    return 'Clop clop clop clop!!!'
  }
  sleep() {
    if(!this.standing && this.layingDown) {
      this.cranky = false;
      return 'ZZZZ'
    }
    return 'NO!'
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    this.cranky = false;
    if(!this.standing && this.layingDown) {
      return 'Not while I\'m laying down!'
    }
  }
};

module.exports = Centaur;
