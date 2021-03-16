import { Calculator } from './calculator';

describe('Calculator', () => {
  let calc;
  beforeAll(() => {
    calc = new Calculator();
  });

  describe('Addition', () => {
    test('1 + 2 = 3', () => {
      const sum = calc.add(1, 2);

      expect(sum).toBe(3);
    });
  });
  describe('Subtracting', () => {
    test('10 - 2 = 8', () => {
      const sum = calc.subtract(10, 2);

      expect(sum).toBe(8);
    });
  });

  test('equals', () => {
    expect({ x: 1, y: { z: 2 } }).toEqual({ x: 1, y: { z: 2 } });
  });

  test('toMatchObject', () => {
    expect({ x: 1, y: { z: 2 } }).toMatchObject({ y: { z: 2 } });
  });

  function getData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Maurice'), 400);
    });
  }

  test('getData()', async () => {
    const name = await getData();
    expect(name).toBe('Maurice');
  });
});
