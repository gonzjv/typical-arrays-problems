exports.min = function min(array) {
    return typeof array == "undefined" || array.length == 0
        ? 0
        : array.reduce((a, b) => {
              return a < b ? a : b;
          });
};

// for (let i=0; i <= array.length; i++) {
//   let result =
// }
exports.max = function max(array) {
    return typeof array == "undefined" || array.length == 0
        ? 0
        : array.reduce((a, b) => {
              return a > b ? a : b;
          });
};

exports.avg = function avg(array) {
    return typeof array == "undefined" || array.length == 0
        ? 0
        : array.reduce((a, b) => {
              return a + b;
          }) / array.length;
};
