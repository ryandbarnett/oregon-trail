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
    const {wheels, axles, oxen, yokes, settlers} = this;
    return (
      wheels.filter(wheel => !wheel.broken).length === 4 &&
      axles.filter(axle => !axle.broken).length >= 2 &&
      oxen.filter(ox => !ox.broken).length >= 2 &&
      yokes.filter(yoke => !yoke.broken).length >= oxen.filter(ox => !ox.broken).length / 2 &&
      settlers.filter(settler => settler.status != 'dead').length >= 1
    );
  }
}

module.exports = Wagon;