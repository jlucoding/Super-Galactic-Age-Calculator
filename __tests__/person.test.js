import Person from '../src/Person.js';

describe('Person', () => {
  let reusablePerson;
  let reusableOldPerson;
  let reusableNeutralGender;

  beforeEach(() => {
    reusablePerson = new Person(55, "male");
    reusableOldPerson = new Person(78, "female");
    reusableNeutralGender = new Person(40, "");
    reusablePerson.ageCalc();
    reusablePerson.lifeExpectancyCalc();
    reusableOldPerson.ageCalc();
    reusableOldPerson.lifeExpectancyCalc();
    reusableNeutralGender.ageCalc();
    reusableNeutralGender.lifeExpectancyCalc();
  });

  test('should correctly convert Earth age to Mercury age', () => {
    expect(reusablePerson.mercuryAge).toEqual(13);
  });

  test('should correctly convert Earth age to Venus age', () => {
    expect(reusablePerson.venusAge).toEqual(34);
  });

  test('should correctly convert Earth age to Mars age', () => {
    expect(reusablePerson.marsAge).toEqual(103);
  });

  test('should correctly convert Earth age to Jupiter age', () => {
    expect(reusablePerson.jupiterAge).toEqual(652);
  });

  test('should correctly determine the life expectancy on Earth for each person', () => {
    expect(reusableNeutralGender.lifeExpectancyOnEarth).toEqual(73.2);
    expect(reusableOldPerson.lifeExpectancyOnEarth).toEqual(75.6);
    expect(reusablePerson.lifeExpectancyOnEarth).toEqual(70.8);
  });

  test('should correctly determine the life expectancy on planets other than Earth for a person', () => {
    expect(reusablePerson.lifeExpectancyOnMercury).toEqual(17);
    expect(reusablePerson.lifeExpectancyOnVenus).toEqual(44);
    expect(reusablePerson.lifeExpectancyOnMars).toEqual(133);
    expect(reusablePerson.lifeExpectancyOnJupiter).toEqual(797);
  });


});