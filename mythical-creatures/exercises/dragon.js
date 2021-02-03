class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.eatCounter = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    this.eatCounter++
    if(this.eatCounter > 2) {
      return this.hungry = false;
    } else{
      return this.hungry = true;
    }
  }
}


module.exports = Dragon;
