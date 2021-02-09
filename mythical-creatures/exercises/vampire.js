class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
    this.ouncesDrank = 0;
    this.drinkCounter = 0;

    if(this.pet === undefined){
      this.pet = 'bat';
    }
  }
  drink() {
    this.thirsty = false;
    if(this.ouncesDrank < 50) {
    this.drinkCounter++
    this.ouncesDrank = this.drinkCounter * 10
    } else {
    return `I'm too full to drink anymore!`;
    }
  }
};

module.exports = Vampire;
