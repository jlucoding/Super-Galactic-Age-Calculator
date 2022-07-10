export default class Person{
  constructor (age, gender) {
    this.age = age;
    this.gender = gender;
  }
  
  ageCalc(){
    this.mercuryAge = Math.round(this.age * 0.24);
    this.venusAge = Math.round(this.age * 0.62);
    this.marsAge = Math.round(this.age * 1.88);
    this.jupiterAge = Math.round(this.age * 11.86);
  }

  lifeExpectancy(){
    if (this.gender === "male") {
      this.lifeExpectancyOnEarth =  70.8;
    } else if (this.gender === "female") {
      this.lifeExpectancyOnEarth = 75.6;
    } else {
      this.lifeExpectancyOnEarth = 73.2;
    }
    return this.lifeExpectancyOnEarth;
  }

  yearsLeftOrYearsPast() {
    if (this.lifeExpectancyOnEarth < this.age) {
      this.yearsPastOnEarth = this.age - this.lifeExpectancyOnEarth;
      this.yearsPastOnEarthWhole = Math.round(this.yearsPastOnEarth);
      this.yearsPastOnMercury = Math.round(this.yearsPastOnEarth * 0.24);
      this.yearsPastOnVenus = Math.round(this.yearsPastOnEarth * 0.62);
      this.yearsPastOnMars = Math.round(this.yearsPastOnEarth * 1.88);
      this.yearsPastOnJupiter = Math.round(this.yearsPastOnEarth * 11.86);
    }
    this.yearsLeftOnEarth = this.lifeExpectancyOnEarth - this.age;
    this.yearsLeftOnEarthWhole = Math.round(this.yearsLeftOnEarth);
    this.yearsLeftOnMercury = Math.round(this.yearsLeftOnEarth * 0.24);
    this.yearsLeftOnVenus = Math.round(this.yearsLeftOnEarth * 0.62);
    this.yearsLeftOnMars = Math.round(this.yearsLeftOnEarth * 1.88);
    this.yearsLeftOnJupiter = Math.round(this.yearsLeftOnEarth * 11.86);
  }
}