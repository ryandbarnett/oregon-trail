class Settler {
  constructor(settlerData) {
    this.name = settlerData.name;
    this.age = settlerData.age;
    this.nationality = settlerData.nationality || 'unknown';
    this.ailments = [];
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