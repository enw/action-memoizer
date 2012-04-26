console.log("action-memoizer");

function Memoizer () {
  /*
  * Returns wrapped, memoized function.
  */
  this.memoizeAction = function (name, fx) {
    console.log("TODO: add memoization for fx")
    var memoized = fx;
    return memoized;
  }
}

module.exports = new Memoizer();
