class Craft {
  constructor(craft) {
    this.name = craft.type;
    this.materials = craft.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!';
  }

  calculateProjectTotal() {
    var cost1 = this.materials[0].calculateMaterialCost()
    var cost2 = this.materials[1].calculateMaterialCost()
    return cost1 + cost2
  }
}

module.exports = Craft;
