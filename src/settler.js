class Settler {
  constructor({name, age, ailments = [], nationality = 'unknown'}) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    this.ailments = ailments;
    this.statuses = ['healthy', 'fair', 'poor', 'dead'];
    this.status = this.statuses[this.ailments.length];
  }

  experienceDistress(ailment) {
    if (this.status != 'dead') {
      this.ailments.push(ailment);
      this.status = this.statuses[this.ailments.length];
    }
  }

  heal() {
    if (this.status != 'dead') {
      this.ailments = [];
      this.status = 'healthy';
    }
  }
}

module.exports = Settler;