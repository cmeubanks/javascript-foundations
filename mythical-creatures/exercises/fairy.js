class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
  }
  receiveBelief(){
    this.dust = 11;
  }
}


module.exports = Fairy;
