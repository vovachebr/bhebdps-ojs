import calculateTotal from '../purchases';

test('should calculate total for purchases', () => {
  const input = [
    {
      id: 1, name: '...', price: 100, count: 3,
    },
    {
      id: 2, name: '...', price: 55, count: 2,
    },
  ];
  const expected = 384.989;

  const received = calculateTotal(input, true);

  expect(received).toBeCloseTo(expected);
});
