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

EarthAge.prototype.determineIfPastLifeExpectancy = function() {
  if ((avgLifeExpectancy - this.age) < 0) {
    return true;
  }
  return false;
};

EarthAge.prototype.yearsLeftOnEarth = function() {
  if (this.determineIfPastLifeExpectancy() === false) {
  return avgLifeExpectancy - this.age;
  }
};

EarthAge.prototype.yearsPastOnEarth = function() {
  if (this.determineIfPastLifeExpectancy() === true) {
    return this.age - avgLifeExpectancy;
  }
};

EarthAge.prototype.wholeYearsLeftOnEarth = function() {
  return Math.round(this.yearsLeftOnEarth());
};

EarthAge.prototype.wholeYearsPastOnEarth = function() {
  return Math.round(this.yearsPastOnEarth());
};

EarthAge.prototype.yearsLeftOnMercury = function() {
  return Math.round(this.yearsLeftOnEarth() * mercuryAgeEachEarthYear);
};

EarthAge.prototype.yearsPastOnMercury = function() {
  return Math.round(this.yearsPastOnEarth() * mercuryAgeEachEarthYear);
};

EarthAge.prototype.yearsLeftOnVenus = function() {
  return Math.round(this.yearsLeftOnEarth() * venusAgeEachEarthYear);
};

EarthAge.prototype.yearsPastOnVenus = function() {
  return Math.round(this.yearsPastOnEarth() * venusAgeEachEarthYear);
};

EarthAge.prototype.yearsLeftOnMars = function() {
  return Math.round(this.yearsLeftOnEarth() * marsAgeEachEarthYear);
};

EarthAge.prototype.yearsPastOnMars = function() {
  return Math.round(this.yearsPastOnEarth() * marsAgeEachEarthYear);
};

EarthAge.prototype.yearsLeftOnJupiter = function() {
  return Math.round(this.yearsLeftOnEarth() * jupiterAgeEachEarthYear);
};

EarthAge.prototype.yearsPastOnJupiter = function() {
  return Math.round(this.yearsPastOnEarth() * jupiterAgeEachEarthYear);
};

