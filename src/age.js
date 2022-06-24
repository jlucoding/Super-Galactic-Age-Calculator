export default function EarthAge(age) {
  this.age = age
}

const avgLifeExpectancy = 72.6;
const mercuryAgeEachEarthYear = 0.24;
const venusAgeEachEarthYear = 0.62;
const marsAgeEachEarthYear = 1.88;
const jupiterAgeEachEarthYear = 11.86;
let livedLongerThanLifeExpectancyBy;


EarthAge.prototype.mercuryAge = function() {
  return Math.round(this.age * mercuryAgeEachEarthYear);
};

EarthAge.prototype.venusAge = function() {
  return Math.round(this.age * venusAgeEachEarthYear);
};

EarthAge.prototype.marsAge = function() {
  return Math.round(this.age * marsAgeEachEarthYear);
};

EarthAge.prototype.jupiterAge = function() {
  return Math.round(this.age * jupiterAgeEachEarthYear);
};

EarthAge.prototype.yearsLeftOnEarth = function() {
  if ((avgLifeExpectancy - this.age) < 0) {
    livedLongerThanLifeExpectancyBy = this.age - avgLifeExpectancy;
    return livedLongerThanLifeExpectancyBy;
  }
  return avgLifeExpectancy - this.age;
};

EarthAge.prototype.wholeYearsLeftOnEarth = function() {
  return Math.round(this.yearsLeftOnEarth());
};

EarthAge.prototype.yearsLeftOnMercury = function() {
  return Math.round(this.yearsLeftOnEarth() * mercuryAgeEachEarthYear);
};

EarthAge.prototype.yearsLeftOnVenus = function() {
  return Math.round(this.yearsLeftOnEarth() * venusAgeEachEarthYear);
};

EarthAge.prototype.yearsLeftOnMars = function() {
  return Math.round(this.yearsLeftOnEarth() * marsAgeEachEarthYear);
};

EarthAge.prototype.yearsLeftOnJupiter = function() {
  return Math.round(this.yearsLeftOnEarth() * jupiterAgeEachEarthYear);
};

