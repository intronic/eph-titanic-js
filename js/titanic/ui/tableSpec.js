define(
  function () {
    var r = document.getElementById("rows")
    var c = document.getElementById("cols")
    var ts = document.getElementById("table-spec");

    var rows = function() {
      return parseInt(r.value)
    };
    var cols = function() {
      return parseInt(c.value)
    };

    var element = function () {
      return ts;
    };

    var onclick = function (f) {
      ts.onclick = f;
    };

    return {
      rows: rows,
      cols: cols,
      element: element,
      onclick: onclick
    };
  }
);
