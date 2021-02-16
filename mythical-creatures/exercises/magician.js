class Magician {
  constructor(object) {
  this.name = `The Great ${object.name}`;
  this.assistant = object.assistant;
  this.favoriteAccessory = object.clothing;
  this.confidencePercentage = 10;
  this.counter = 0;

  if(!this.favoriteAccessory){
    this.favoriteAccessory = 'top hat'
    }
  }
  performIncantation() {
    this.counter++
    if(this.counter === 1){
      return 'ABRACADABRA!'
    } else {
      return 'ALLAKAZAAM!'
    }
  }
  performTrick() {
    this.confidencePercentage+=10
    if(this.favoriteAccessory != 'top hat') {
      return 'PULL DOVE FROM SLEEVE';
    } else {
    return 'PULL RABBIT FROM TOP HAT';
   }
  }
  performShowStopper() {
    if(this.confidencePercentage >= 110 && this.assistant) {
      return 'WOW! The magician totally just sawed that person in half!'
    } else {
      return 'Oh no, this trick is not ready!'
    }
  }
}


module.exports = Magician;
