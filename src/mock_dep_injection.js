const doAdd = (a, b, callback) => {
  callback(a + b);
};

test('calls callback with arguments added', () => {
  const mockCallback = jest.fn();
  doAdd(1, 2, mockCallback);
  expect(mockCallback).toHaveBeenCalledWith(3);
});
