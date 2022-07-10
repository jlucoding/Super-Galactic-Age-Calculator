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
    reusablePerson.lifeExpectancy();
    reusablePerson.yearsLeftOrYearsPast();
    reusableOldPerson.ageCalc();
    reusableOldPerson.lifeExpectancy();
    reusableOldPerson.yearsLeftOrYearsPast();
    reusableNeutralGender.ageCalc();
    reusableNeutralGender.lifeExpectancy();
    reusableNeutralGender.yearsLeftOrYearsPast();
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

  test('should correctly determine years left to live on all planets for a person', () => {
    expect(reusablePerson.yearsLeftOnEarthWhole).toEqual(16);
    expect(reusablePerson.yearsLeftOnMercury).toEqual(4);
    expect(reusablePerson.yearsLeftOnVenus).toEqual(10);
    expect(reusablePerson.yearsLeftOnMars).toEqual(30);
    expect(reusablePerson.yearsLeftOnJupiter).toEqual(187);
  });

  test('should correctly determine years lived past life expectancy on all planets for a person', () => {
    expect(reusableOldPerson.yearsPastOnEarthWhole).toEqual(2);
    expect(reusableOldPerson.yearsPastOnMercury).toEqual(1);
    expect(reusableOldPerson.yearsPastOnVenus).toEqual(1);
    expect(reusableOldPerson.yearsPastOnMars).toEqual(5);
    expect(reusableOldPerson.yearsPastOnJupiter).toEqual(28);
  });
});