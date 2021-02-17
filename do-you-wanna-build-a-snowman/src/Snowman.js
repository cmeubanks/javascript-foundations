class Snowman {
constructor(snowmanDetails) {
  this.carrots = snowmanDetails.carrots;
  this.coal = snowmanDetails.coal;
  this.buttons = snowmanDetails.buttons;
  this.snowballs = snowmanDetails.snowballs;
  this.magicHat = false;
  }
  canWearMagicHat() {
  //if coal eyes <2, magic hat will be false
  if (this.coal < 2 || this.buttons < 5) {
  this.magicHat = false;
  } else {
  this.magicHat = true;
  }
  }
}


module.exports = Snowman;
