var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }

  gatherMaterials(material, num) {
    return this.materials[material] += num;

  }

  buildASnowman() {
    var snowman = new Snowman(this.materials)
    return snowman
  }

  placeMagicHat() {
    var snowman = this.buildASnowman()
    snowman.canWearMagicHat();
    if(!snowman.magicHat){
      return 'I guess I didn\'t build it correctly.'
    }
    return 'Woah, this snowman is coming to life!';
  }
}

module.exports = Human;
