import * as app from '../../src/app';
import * as math from '../../src/math';

/*
The goal for mocking is to replace something we don’t control with something we do, 
so it’s important that what we replace it with has all the features we need.

The Mock Function provides features to:
1. Capture calls
2. Set return values
3. Change the implementation

*/

/*
Mock a function with jest.fn
The most basic strategy for mocking is to reassign a function to the Mock Function. 
Then, anywhere the reassigned functions are used, 
the mock will be called instead of the original function:
*/

math.add = jest.fn();
math.subtract = jest.fn();
math.multiply = jest.fn();
math.divide = jest.fn();

describe('mockFunction folder', () => {
  test('calls math.add', () => {
    app.doAdd(2, 2);

    expect(math.add).toHaveBeenCalledWith(2, 2);
    expect(math.add).toHaveBeenCalledTimes(1);
  });

  test('calls math.subtract', () => {
    app.doSubtract(3, 3);
    app.doSubtract(2, 2);

    expect(math.subtract).toHaveBeenCalledWith(3, 3);
    expect(math.subtract).toHaveBeenCalledWith(2, 2);
    expect(math.subtract).toHaveBeenCalledTimes(2);
  });

  test('calls math.multiply', () => {
    app.doMultiply(5, 5);

    expect(math.multiply).toHaveBeenCalledWith(5, 5);
    expect(math.multiply).toHaveBeenCalledTimes(1);
  });

  test('calls math.divide', () => {
    app.doDivide(25, 5);

    expect(math.divide).toHaveBeenCalledWith(25, 5);
    expect(math.divide).toHaveBeenCalledTimes(1);
  });
});
