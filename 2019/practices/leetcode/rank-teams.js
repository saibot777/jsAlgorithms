/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  let n = votes[0].length;
  let ranks = {};
  votes.forEach((v) => {
    for (let i = 0; i < n; i++) {
      let t = v[i];
      if (ranks[t] === undefined) {
        ranks[t] = new Array(n).fill(0);
      }
      ranks[t][i]++;
    }
  });

  let res = Object.keys(ranks).sort((a, b) => {
    let listA = ranks[a];
    let listB = ranks[b];
    for (let i = 0; i < n; i++) {
      if (listA[i] != listB[i]) {
        return listB[i] - listA[i];
      }
    }
    return a > b ? 1 : -1;
  });
  return res.join("");
};
