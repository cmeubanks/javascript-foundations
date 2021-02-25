class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.clothes = {
      dresses: ['Iris'],
    };
  }
  receiveBelief(){
    this.dust = 11;
  }
  believe() {
    this.dust = 20;
  }
  makeDresses(array){
    for(var i = 0; i < array.length; i++){
    this.clothes.dresses.push(array[i]);
  }
  }
  becomeProvoked() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(object) {
    if(this.disposition === 'Vengeful') {
    object.disposition = 'Malicious';
    this.humanWards.push(object);
  }
  if(this.humanWards.length === 2){
    this.disposition = 'Good natured';
  }
  return object
  }
}


module.exports = Fairy;
