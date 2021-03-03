class SkatePark {
  constructor(skatePark) {
    this.name = skatePark.name;
    this.yearFounded = skatePark.year;
    this.style = skatePark.type;
    this.features = skatePark.features;
    this.isPrivate = skatePark.isPrivate || false;
    this.cost = skatePark.price || 0;
    this.occupants = [];
  }
  admit(skater) {
    if(this.isPrivate && skater.money >= this.cost && this.occupants.length < 3){
      var moneyLeft = skater.money - this.cost
      skater.money = moneyLeft
      this.occupants.push(skater)
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } else if(!this.isPrivate){
    this.occupants.push(skater)
    return `Welcome to the free ${this.name} Skatepark!`
  } else if(skater.money < this.cost){
    return `Sorry, you don't have enough money.`;
  } else {
    return 'Sorry, we are at max capacity. Thank you for understanding.'
  }
  }
};

module.exports = SkatePark;
