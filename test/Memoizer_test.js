var should = require('should')
  , _ = require('underscore');

function SlowCalculator() {
  this.add = function (a, b, cb) { cb(null, a+b) }
  this.subtract = function (a, b, cb) { cb(null, a-b) }
  this.multiply = function (a, b, cb) { cb(null, a*b) }
  this.divide = function (a, b, cb) { cb(null, a/b) }
}

var Memoizer = require ('../Memoizer');
describe('Memoizer', function(){
  var calculator;
  var mAdd, mSubtract, mMultiply, mDivide;
  
  before(function(done) {
    calculator = new SlowCalculator();
    mAdd = Memoizer.memoizeAction("add", calculator.add);
    // mSubtract = Memoizer.memoizeAction("subtract", calculator.subtract);
    // mMultiply = Memoizer.memoizeAction("multiply", calculator.multiply);
    // mDivide = Memoizer.memoizeAction("divide", calculator.divide);
    done();
  });
  
  describe('#memoizeAction()', function(){
    it('should return a function', function () {
      (typeof mAdd).should.equal('function');
      // (typeof mSubtract).should.equal('function');
    });
    
    it('should return a memoized function', function (done) {
      mAdd(1, 2, function (err, data) {
        data.should.equal(3);
        done();
      })
    });
    
  })
});
