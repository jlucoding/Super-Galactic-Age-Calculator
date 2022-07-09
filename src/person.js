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

  lifeExpectancyCalc(){
    if (this.gender === "male") {
      this.lifeExpectancyOnEarth =  70.8;
    } else if (this.gender === "female") {
      this.lifeExpectancyOnEarth = 75.6;
    } else {
      this.lifeExpectancyOnEarth = 73.2;
    }
    this.lifeExpectancyOnMercury = Math.round(this.lifeExpectancyOnEarth * 0.24);
    this.lifeExpectancyOnVenus = Math.round(this.lifeExpectancyOnEarth * 0.62);
    this.lifeExpectancyOnMars = Math.round(this.lifeExpectancyOnEarth * 1.88);
    this.lifeExpectancyOnJupiter = Math.round(this.lifeExpectancyOnEarth * 11.26);
  }


}