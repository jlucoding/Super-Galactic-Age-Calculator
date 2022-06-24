export default function EarthAge(age) {
  this.age = age
}

const avgLifeExpectancy = 72.6;

EarthAge.prototype.mercuryAge = function() {
  return Math.round(this.age * 0.24);
};

EarthAge.prototype.venusAge = function() {
  return Math.round(this.age * 0.62);
};

EarthAge.prototype.marsAge = function() {
  return Math.round(this.age * 1.88);
};

EarthAge.prototype.jupiterAge = function() {
  return Math.round(this.age * 11.86);
};

EarthAge.prototype.yearsLeftOnEarth = function() {
  return Math.round(avgLifeExpectancy - this.age);
};

EarthAge.prototype.yearsLeftOnMercury = function() {
  return Math.round((avgLifeExpectancy - this.age) * 0.24);
};

EarthAge.prototype.yearsLeftOnVenus = function() {
  return Math.round((avgLifeExpectancy - this.age) * 0.62);
};

