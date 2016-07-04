define(
  // return a string representing the xy coordinate object in integer coordinates.
  function () {
    function str(xy) {
      return "(" + Math.trunc(xy.left) + "," + Math.trunc(xy.top) + ")"
    }

    // add two xy coordinate objects 'a' and 'b'.
    function add(a, b) {
      return {left: (a.left + b.left),
              top: (a.top + b.top)}
    }

    // subtract xy coordinate object 'b' from 'a'.
    function subtract(a, b) {
      return {left: (a.left - b.left),
              top: (a.top - b.top)}
    }

    return {
      str: str,
      add: add,
      subtract: subtract
    };
  }
);
