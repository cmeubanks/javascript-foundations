class Wagon {
  constructor(wagon) {
    this.title = wagon.name;
    console.log(wagon.wheels)
    this.wheels = wagon.wheels || [];
  }
}

module.exports = Wagon;
