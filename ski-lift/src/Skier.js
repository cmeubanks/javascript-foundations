class Skier {
  constructor(newSkier, hasLiftTicket) {
    // console.log("NEW SKIER ", newSkier)
    this.name = newSkier ? newSkier : null
    this.hasLiftTicket = hasLiftTicket
    this.skillLevel = 1
    this.nextSlope = 'green circle'
  }

  takeLesson() {
    this.skillLevel++
  }
  pickSlope() {
    if(this.skillLevel > 2 && this.skillLevel < 4){
      this.nextSlope = 'blue square';
    } else if (this.skillLevel >= 4)
    this.nextSlope = 'black diamond';
  }
}

module.exports = Skier;
