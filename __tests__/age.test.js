import EarthAge from '../src/age.js';

describe('EarthAge', () => {
  let reusableEarthAge;

  beforeEach(() => {
    reusableEarthAge = new EarthAge(55);
  });

  test('should correctly convert Earth age to Mercury age', () => {
    expect(reusableEarthAge.mercuryAge()).toEqual(13.2);
  });
});