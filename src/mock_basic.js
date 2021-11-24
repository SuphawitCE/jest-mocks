test('returns undefined by default', () => {
  const mock = jest.fn();

  let result = mock('foo');

  expect(result).toBeUndefined();
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith('foo');
});
