export default function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((sumIn, item) => sumIn + item.count * item.price, 0);

  return applyDiscount ? sum / 2 : sum;
}
