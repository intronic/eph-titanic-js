define(
  function () {
    // Object to produce table HTML

    // unique number for cell at row 'r', column 'c' in a table of 'cols' columns
    function cellNum (cols, r, c) {
      return ((cols * r) + c);
    }
    // unique ID string for cell at row 'r', column 'c' in a table of 'cols' columns
    function cellId (cols, r, c) {
      return "c" + cellNum(cols, r, c);
    }
    // unique row ID string for row r in a table of 'cols' columns
    function rowId (r) {
      return "r" + r;
    }
    // HTML for cell at row 'r', column 'c' in a table of 'cols' columns
    function cellHtml (cols, r, c) {
      return "<td id='" + cellId(cols, r, c) +
        "'>\u00a0</td>"; // \u00a0 is &nbsp;
    }
    // HTML for row r in a table of 'cols' columns
    function rowHtml (cols, r) {
      var s =  "<tr id='" + rowId(r) + "'>";
      for (var i = 0; i < cols; i++) {
        s += cellHtml(cols, r, i);
      }
      return s + "</tr>";
    }
    // Return string coordinate representation of cell or row id.
    function idToStr(cols, id) {
      var num = parseInt(id.substr(1))
      if (id.substr(0,1) === "r") {
        return "row " + num
      } else {
        var c = num % cols;
        var r = Math.floor(num / cols);
        return "(" + r + "," + c + ")"
      }
    }
    // HTML for a table with 'r' rows and 'c' columns
    function html (r, c) {
      var s = "<table><tbody>";
      for (var i = 0; i < r; i++) {
        s += rowHtml(c, i);
      }
      return s + "</tbody></table>";
    }

    return {
      html: html,
      idToStr: idToStr,
      _cellNum:  cellNum,
      _cellId:   cellId,
      _rowId:    rowId,
      _cellHtml: cellHtml,
      _rowHtml:  rowHtml
    }
  }
);
