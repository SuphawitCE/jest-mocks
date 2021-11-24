import * as app from '../../src/app';
import * as math from '../../src/math';

/*
Sometimes you only want to watch a method be called, but keep the original implementation. 
Other times you may want to mock the implementation, but restore the original later in the suite.
*/

describe('Spy_or_mock_function_with_spyOn folder - Original ', () => {
  /*
Here we simply “spy” calls to the math function, 
but leave the original implementation in place:
*/
  test('calls math.add - original', () => {
    const addMock = jest.spyOn(math, 'add');
    const result = app.doAdd(2, 2);

    // calls the original implementation
    expect(result).toEqual(4);

    // and the spy stores the calls add
    expect(addMock).toHaveBeenCalledWith(2, 2);
    expect(addMock).toHaveBeenCalledTimes(1);

    // override the implementation (not original implementation)
    addMock.mockImplementation(() => 'mock');
    expect(app.doAdd(1, 2)).toEqual('mock');
    expect(addMock).toHaveBeenCalledTimes(2);

    // restore the original implementation
    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
    expect(addMock).toHaveBeenCalledTimes(0);
  });
});

// describe("Spy_or_mock_function_with_spyOn folder - ", () => {
//   /*
// In other cases, you may want to mock a function,
// but then restore the original implementation:
// */

//   test("calls math.add - ");
// });
