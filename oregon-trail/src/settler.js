class Settler {
  constructor(settler) {
    this.name = settler.name;
    this.age = settler.age;
    this.nationality = settler.nationality || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
  }
  experienceDistress(ailment) {
    if(this.ailments.length < 3) {
    this.ailments.push(ailment);
    }

    if(this.ailments.length === 1){
    this.status = 'fair';
  } else if(this.ailments.length === 2){
    this.status = 'poor';
  } else {
    this.status = 'dead';
  }
  }
  heal() {
    if(this.status != 'dead'){
    this.ailments.splice(0,2);
    this.status = 'healthy';
  } else{
    return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`;
  }
  }
}

module.exports = Settler;
