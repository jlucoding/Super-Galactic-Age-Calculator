export default function EarthAge(age) {
  this.age = age
}

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

