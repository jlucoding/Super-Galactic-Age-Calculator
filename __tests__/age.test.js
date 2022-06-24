import EarthAge from '../src/age.js';

describe('EarthAge', () => {
  let reusableEarthAge;
  let reusableOldEarthAge;

  beforeEach(() => {
    reusableEarthAge = new EarthAge(55);
    reusableOldEarthAge = new EarthAge(78);
  });

  test('should correctly convert Earth age to Mercury age', () => {
    expect(reusableEarthAge.mercuryAge()).toEqual(13);
  });

  test('should correctly convert Earth age to Venus age', () => {
    expect(reusableEarthAge.venusAge()).toEqual(34);
  });

  test('should correctly convert Earth age to Mars age', () => {
    expect(reusableEarthAge.marsAge()).toEqual(103);
  });

  test('should correctly convert Earth age to Jupiter age', () => {
    expect(reusableEarthAge.jupiterAge()).toEqual(652);
  });

  test('should correctly calculate how much longer user is expected to live on Earth or how long they have lived past life expectancy by on this planet', () => {
    expect(reusableEarthAge.wholeYearsLeftOnEarth()).toEqual(18);
    expect(reusableOldEarthAge.wholeYearsLeftOnEarth()).toEqual(5);
  });

  test('should correctly calculate how much longer user is expected to live on Mercury or how long they have lived past life expectancy by on this planet', () => {
    expect(reusableEarthAge.yearsLeftOnMercury()).toEqual(4);
    expect(reusableOldEarthAge.yearsLeftOnMercury()).toEqual(1);
  });

  test('should correctly calculate how much longer user is expected to live on Venus or how long they have lived past life expectancy by on this planet', () => {
    expect(reusableEarthAge.yearsLeftOnVenus()).toEqual(11);
    expect(reusableOldEarthAge.yearsLeftOnVenus()).toEqual(3);
  });

  test('should correctly calculate how much longer user is expected to live on Mars or how long they have lived past life expectancy by on this planet', () => {
    expect(reusableEarthAge.yearsLeftOnMars()).toEqual(33);
    expect(reusableOldEarthAge.yearsLeftOnMars()).toEqual(10);
  });

  test('should correctly calculate how much longer user is expected to live on Jupiter or how long they have lived past life expectancy by on this planet', () => {
    expect(reusableEarthAge.yearsLeftOnJupiter()).toEqual(209);
    expect(reusableOldEarthAge.yearsLeftOnJupiter()).toEqual(64);
  });

  
});