class Wagon {
  constructor(wagon) {
    this.title = wagon.name;
    this.wheels = wagon.wheels || [];
    this.axles = wagon.axles || [];
    this.oxen = wagon.oxen || [];
    this.yokes = wagon.yokes || [];
    this.food = wagon.food;
    this.ammunition = wagon.ammunition;
    this.clothes = wagon.clothes;
    this.settlers = wagon.settlers || [];
  }
  addPart(part) {
    this.wheels.push(part);
    this.axles.push(part);
    this.oxen.push(part);
    this.yokes.push(part);
  }
  canTravel() {
    if(this.wheels.length < 4 || this.axles.length < 2 || this.oxen.length < 2 || this.yokes.length === 0 || this.settlers.length === 0 || this.wheels[0].broken === true || this.axles[0].broken || this.oxen[0].broken || this.settlers[0].status === 'dead'){
      return false;
    } else if(this.oxen.length === 4 && this.yokes.length != 2){
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Wagon;
