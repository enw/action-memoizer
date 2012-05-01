console.log("action-memoizer");

function Memoizer () {
  var cache={};
  
  /*
  * Returns wrapped, memoized function.
  */
  this.memoizeAction = function (name, action) {
    var action_m = function () {
      var args=[];
      for(var i=0;i<arguments.length;i++) {args[i]=arguments[i]};
      action.apply(this, args);
    }
    
    var memoized = action_m;
    return memoized;
  }
}

module.exports = new Memoizer();
