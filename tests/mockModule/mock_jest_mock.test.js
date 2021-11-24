import * as app from '../../src/app';
import * as math from '../../src/math';

/*
A more common approach is to use jest.mock to automatically set all exports of a module to the Mock Function. 
So, calling jest.mock('./math.js'); essentially sets math.js to:
*/

// Set all module function to jest.fn
jest.mock('../../src/math.js');

describe('mockModule folder', () => {
  test('calls math.add', () => {
    app.doAdd(2, 2);

    expect(math.add).toHaveBeenCalledWith(2, 2);
    expect(math.add).toHaveBeenCalledTimes(1);
  });

  test('calls math.subtract', () => {
    app.doSubtract(4, 2);

    expect(math.subtract).toHaveBeenCalledWith(4, 2);
  });

  test('calls math.multiply', () => {
    app.doMultiply(5, 5);
    app.doMultiply(2, 2);

    expect(math.multiply).toHaveBeenCalledWith(5, 5);
    expect(math.multiply).toHaveBeenCalledTimes(2);
  });

  test('calls math.divide', () => {
    app.doDivide(10, 5);

    expect(math.divide).toHaveBeenCalledWith(10, 5);
    expect(math.divide).toHaveBeenCalledTimes(1);
  });
});
