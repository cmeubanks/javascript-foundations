class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.disposition = 'Good natured';
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
    this.disposition = 'Malicious';
    object.disposition = this.disposition;
  }
}


module.exports = Fairy;
