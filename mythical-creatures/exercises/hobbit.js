class Hobbit {
 constructor(object){
   this.name = object.name;
   this.age = 0;
   this.old = false;


 }
 celebrateBirthday() {
   this.age = this.age + 1;

   if(this.age <= 32) {
     this.adult = false;
   } else {
     this.adult = true;
   }

   if(this.age >= 101) {
     this.old = true;
   }
 }
 getRing() {
   if(this.name === 'Frodo') {
     this.hasRing = true;
     return 'Here is the ring!'
   } else {
     this.hasRing = false;
     return 'You can\'t have it!'
   }
 }
}


module.exports = Hobbit;
