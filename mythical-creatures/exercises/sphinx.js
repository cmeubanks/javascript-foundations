class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;

  }
  collectRiddle(riddle) {
    if(this.riddles.length < 3){
     return this.riddles.push(riddle);
   } else {
     this.riddles.shift()
     return this.riddles.push(riddle)
   }
  }
  attemptAnswer(riddleAnswer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === riddleAnswer && this.riddles.length > 1 ) {
       this.riddles.splice(i,1)
       return 'That wasn\'t that hard, I bet you don\'t get the next one';
     } else if (this.riddles[i].answer === riddleAnswer && this.riddles.length === 1) {
       this.riddles.splice(i,1)
       return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${riddleAnswer}"???`
      }
    }
    this.heroesEaten++
  }
}

module.exports = Sphinx;
