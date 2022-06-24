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

  test('should correctly calculate how much longer user is expected to live on Earth', () => {
    expect(reusableEarthAge.wholeYearsLeftOnEarth()).toEqual(18);
  });

  test('should correctly calculate how long user has lived past life expectancy by on Earth', () => {
    expect(reusableOldEarthAge.wholeYearsPastOnEarth()).toEqual(5);
  });

  test('should correctly calculate how much longer user is expected to live in Mercury years', () => {
    expect(reusableEarthAge.yearsLeftOnMercury()).toEqual(4);
  });

  test('should correctly calculate how long user has lived past life expectancy by in Mercury years', () => {
    expect(reusableOldEarthAge.yearsPastOnMercury()).toEqual(1);
  });

  test('should correctly calculate how much longer user is expected to live in Venus years', () => {
    expect(reusableEarthAge.yearsLeftOnVenus()).toEqual(11);
  });

  test('should correctly calculate how long user has lived past life expectancy by in Venus years', () => {
    expect(reusableOldEarthAge.yearsPastOnVenus()).toEqual(3);
  });

  test('should correctly calculate how much longer user is expected to live in Mars years', () => {
    expect(reusableEarthAge.yearsLeftOnMars()).toEqual(33);
  });

  test('should correctly calculate how long user has lived past life expectancy by in Mars years', () => {
    expect(reusableOldEarthAge.yearsPastOnMars()).toEqual(10);
  });

  test('should correctly calculate how much longer user is expected to live in Jupiter years', () => {
    expect(reusableEarthAge.yearsLeftOnJupiter()).toEqual(209);
  });

  test('should correctly calculate how long user has lived past life expectancy by in Jupiter years', () => {
    expect(reusableOldEarthAge.yearsPastOnJupiter()).toEqual(64);
  });
});