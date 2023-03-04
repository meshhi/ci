import calculateTotal from '../calculate';

test('basic test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('calculate total sum withput discount', () => {
  const list = [
    {
      id: 456,
      name: 'война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 156,
      name: 'мир юрского периодаtest',
      count: 6,
      price: 200,
    },
  ];

  expect(calculateTotal(list)).toBe(2400);
});

test('calculate total sum with discount', () => {
  const list = [
    {
      id: 456,
      name: 'война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 156,
      name: 'мир юрского периодаtest',
      count: 6,
      price: 200,
    },
  ];

  expect(calculateTotal(list, true)).toBe(1200);
});
