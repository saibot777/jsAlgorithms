/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function (n) {
  let res = 1,
    modulo = 1000000007;
  for (let i = 1; i <= n; i++) {
    res *= i;
    res %= modulo;
    res *= 2 * i - 1;
    res %= modulo;
  }

  return res % modulo;
};
