console.log("action-memoizer");

function Memoizer () {
  var cache={};
  
  /*
  * Returns wrapped, memoized function.
  */
  this.memoizeAction = function (name, action) {
    if (!this.cache) this.cache={};
    var action_m = function () {
      var args=[];
      for(var i=0;i<arguments.length-1;i++) {args[i]=arguments[i]};
      var key = name+"::"+JSON.stringify(args);
      var original_cb = arguments[arguments.length-1];
      if (cache.hasOwnProperty(key)) {
        var result = cache[key];
        process.nextTick(function () {
          original_cb(result.err, result.data);
        })
        return;
      }
      function cb(err, data) {
        cache[key]={err:err,data:data};
        original_cb(err, data);
      }
      // args[args.length] = cb;
      args.push(cb);
      action.apply(this, args);
    }
    
    var memoized = action_m;
    return memoized;
  }
}

module.exports = new Memoizer();
