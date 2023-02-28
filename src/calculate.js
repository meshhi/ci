export function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((sum, item) => sum + item.count * item.price, 0);

  return applyDiscount ? sum / 2 : sum;
}