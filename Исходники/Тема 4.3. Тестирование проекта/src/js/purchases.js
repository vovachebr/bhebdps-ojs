export default function calculateTotal(purchases, applyDiscount = false) {
  const result = purchases.reduce((acc, curr) => acc + curr.price * curr.count, 0);

  if (applyDiscount) {
    return result * 0.939;
  }

  return result;
}
