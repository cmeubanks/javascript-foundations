class GolfCourse {
constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
}

checkInGroup(groupOfGolfers){
  if(this.openings >= groupOfGolfers.length) {
    this.openings = this.openings - groupOfGolfers.length
      for (var i = 0; i < groupOfGolfers.length; i++){
        this.currentlyPlaying.unshift(groupOfGolfers[i].name);
      }
      return `You're checked in. Have fun!`
    } else {
      return 'Sorry, we are currently booked! Please come back later.'
    }
  }
}
module.exports = GolfCourse;
