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
};

module.exports = SkatePark;
