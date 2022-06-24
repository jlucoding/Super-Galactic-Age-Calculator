import EarthAge from '../src/age.js';

describe('EarthAge', () => {
  let reusableEarthAge;

  beforeEach(() => {
    reusableEarthAge = new EarthAge(55);
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
    expect(reusableEarthAge.yearsLeftOnEarth()).toEqual(18);
  });

  test('should correctly calculate how much longer user is expected to live on Mercury', () => {
    expect(reusableEarthAge.yearsLeftOnMercury()).toEqual(4);
  });
});