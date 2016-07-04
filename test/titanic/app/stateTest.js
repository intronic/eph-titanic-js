var requirejs = require("requirejs");
var assert = require("assert");
var immutable = require("immutable");

requirejs.config({
    baseUrl: 'js',
    nodeRequire: require
});

var Set = immutable.Set
var is  = immutable.is

describe('State Test', function() {
    // Load modules with requirejs before tests
    var State;
    before(function(done) {
        requirejs(['titanic/app/state'], function(state) {
            State = state;
            done(); // We can launch the tests!
        });
    });

  describe('state testing', function () {
      it('state', function () {
        assert.equal(Set(), State.init())
        assert.equal(Set(), State.selectionSet())

        // select c1
        assert(is(Set.of("c1"),
                  State.toggleId("c1", function (x) {return x}))
                === true)
        assert.deepEqual(Set.of("c1"),State.selectionSet())
        // select/replace with c3
        State.toggleId("c3", function () {})
        assert.deepEqual(Set.of("c3"), State.selectionSet())
        // unselect c3
        State.toggleId("c3", function () {})
        assert.deepEqual(Set(), State.selectionSet())
        // select c3
        State.toggleId("c3", function () {})
        assert.deepEqual(Set.of("c3"), State.selectionSet())
        // add c1
        assert(is(Set.of("c1", "c3"), State.toggleAddId("c1", function (x) {return x}))
          === true)
        assert(is(Set.of("c1","c3"), State.selectionSet()) === true)
        // unselect c1
        State.toggleAddId("c1", function () {})
        assert(is(Set.of("c3"), State.selectionSet()) === true)
      });
    });
  });
