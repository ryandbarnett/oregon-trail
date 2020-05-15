class Gear {
  constructor(type, quantity) {
    this.validTypes = [
      'ammunition', 
      'food', 
      'clothes'
    ];
    this.type = this.validTypes.find(validType => validType === type);
    this.quantity = quantity;
  }
}

module.exports = Gear;
