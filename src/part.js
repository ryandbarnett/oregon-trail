class Part {
  constructor(type) {
    this.validTypes = [
      'wheel', 
      'yoke', 
      'axle', 
      'ox'
    ];
    this.type = this.validTypes.find(validType => validType === type);
    this.broken = false;
    this.hasBeenRepaired = false;
  }

  break() {
    this.broken = true;
  }

  repair() {
    if (!this.hasBeenRepaired) {
      this.broken = false;
      this.hasBeenRepaired = true; 
    }
  }
}

module.exports = Part;
