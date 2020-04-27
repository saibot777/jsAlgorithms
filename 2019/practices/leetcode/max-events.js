/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  let hset = new Set();
  events.sort((a, b) => (a[1] != b[1] ? a[1] - b[1] : a[0] - b[0]));
  events.forEach((e) => {
    for (let i = e[0]; i <= e[1]; i++) {
      if (!hset.has(i)) {
        hset.add(i);
        break;
      }
    }
  });
  return hset.size;
};
