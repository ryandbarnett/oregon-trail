class Wagon {
  constructor({name, wheels = [], axles = [], oxen = [], yokes = [], settlers = [], food, ammunition, clothes}) {
    this.name = name;
    this.wheels = wheels;
    this.axles = axles;
    this.oxen = oxen;
    this.yokes = yokes;
    this.food = food;
    this.ammunition = ammunition;
    this.clothes = clothes;
    this.settlers = settlers;
  }

  addPart(part) {
    if (part.type) {
      var key = part.type === 'ox' ? 'oxen' : `${part.type}s`;
      this[key].push(part);
    }
  }

  canTravel() {
    const {wheels, axles, oxen, yokes, settlers, filterBroken, filterDead} = this;
    return (
      filterBroken(wheels).length === 4 &&
      filterBroken(axles).length >= 2 &&
      filterBroken(oxen).length >= 2 &&
      filterBroken(yokes).length >= filterBroken(oxen).length / 2 &&
      filterDead(settlers).length >= 1
    );
  }

  filterBroken(parts) {
    return parts.filter(part => !part.broken);
  }

  filterDead(settlers) {
    return settlers.filter(settler => settler.status != 'dead')
  }
}

module.exports = Wagon;