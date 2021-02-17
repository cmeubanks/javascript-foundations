class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';

    // if(!this.home) {
    //   this.home = 'Beyond the Wall';
    // }
  }
}

module.exports = Direwolf;
