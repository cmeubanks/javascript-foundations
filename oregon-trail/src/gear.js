class Gear {
  constructor(type, num) {
  this.type = type;
  this.quantity = num;
  }
  checkForValidity() {
    if (this.type === ('ammunition' || 'food' || 'clothes')) {
    return `Great, we\'ll need lots of ${this.type}!`
  } else {
    return `I don\`t think a ${this.type} will help us.`
  }
  }
}

module.exports = Gear;
