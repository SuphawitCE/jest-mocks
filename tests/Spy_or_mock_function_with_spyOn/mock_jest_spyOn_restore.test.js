import * as app from '../../src/app';
import * as math from '../../src/math';

test('calls math.add', () => {
  const addMock = jest.spyOn(math, 'add');

  // override the implementation
  addMock.mockImplementation(() => 'mock');
  expect(app.doAdd(1, 2)).toEqual('mock');

  // restore the original implementation
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});
