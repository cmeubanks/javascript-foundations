class Ogre {
 constructor(object) {
   this.name = object.name;
   this.home = object.abode;
   this.swings = 0;

   if(!this.home) {
     this.home = 'Swamp';
   }
 }
 encounter(human) {
   human.encounterCounter++
   if(human.noticesOgre() && human.encounterCounter != 6) {
     this.swings++
   }
   if(this.swings === 2) {
     human.knockedOut = true;
   }
 }
 swingAt(human) {
   this.swings++
 }
 apologize(human) {
   human.knockedOut = false;
 }
}

module.exports = Ogre;
