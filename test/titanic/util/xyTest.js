var requirejs = require("requirejs");
var assert = require("assert");

requirejs.config({
    baseUrl: 'js',
    nodeRequire: require
});

describe('Util Test', function() {
    // Load modules with requirejs before tests
    var XY;
    before(function(done) {
        requirejs(['titanic/util/xy'], function(xy) {
            XY = xy;
            done(); // We can launch the tests!
        });
    });

  describe('XY testing', function () {
      it('xy', function () {
        assert.equal("(1,2)",
          XY.str({left: 1, top: 2}),
          'str({left: 1, top: 2})')
        assert.equal("(-1,-2)",
          XY.str({left: -1, top: -2}),
          'str({left: -1, top: -2})')
        assert.equal("(1,2)",
          XY.str({left: 1.01, top: 2.99}),
          'str({left: 1.01, top: 2.99})')
        assert.equal("(-1,-2)",
          XY.str({left: -1.01, top: -2.99}),
          'str({left: -1.01, top: -2.99})')
        assert.deepEqual({left: 11, top: 103},
          XY.add({left: 1, top: 3}, {left:10, top: 100}),
          'add({left: 1, top: 3}, {left:10, top: 100})');
        assert.deepEqual({left: -9, top: -97},
          XY.subtract({left: 1, top: 3}, {left:10, top: 100}),
          'subtract({left: 1, top: 3}, {left:10, top: 100})');
      });
    });
  });
