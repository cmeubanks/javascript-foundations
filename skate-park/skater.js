class Skater {
 constructor(skater) {
   this.name = skater.name;
   this.skill = skater.skill;
   this.tricks = skater.tricks;
   this.money = skater.cash;
   this.frustration = 0;
 }
 practice(trick) {
   // var key = Object.keys(this.tricks);
   // for(var i = 0; i < key.length; i++){
   //   console.log("array length", key.length)
   //   if(key[i] != trick){
   //     console.log("key", key[i])
   //     console.log("trick", trick)
   //     return this.frustration+=1
   //   }
   // }
   console.log(this.tricks.kickflip)
if (this.tricks.kickflip != true){
  this.frustration++
} else if (!this.tricks.treflip){
  this.frustration++
}
 }
}



module.exports = Skater;
