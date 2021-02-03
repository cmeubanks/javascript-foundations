class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color;

    if(color === undefined) {
      return this.color = 'white';
    };
  }
  isWhite() {
    return false;
  }
  says(quote) {
    return `**;* ${quote} *;**`;
  }
}

module.exports = Unicorn;
