var requirejs = require("requirejs");
var assert = require("assert");
requirejs.config({
    baseUrl: 'js',
    nodeRequire: require
});

describe('Html Table', function() {
    // Load modules with requirejs before tests
    var Table;
    before(function(done) {
        requirejs(['titanic/html/table'], function(table) {
            Table = table;
            done(); // We can launch the tests!
        });
    });

  describe('Html table', function () {
      it('html', function () {
        assert.equal(0,Table._cellNum(2,0,0),'cellNum(2,0,0)')
        assert.equal(1,Table._cellNum(2,0,1),'cellNum(2,0,1)')
        assert.equal(2,Table._cellNum(2,1,0),'cellNum(2,1,0)')
        assert.equal(3,Table._cellNum(2,1,1),'cellNum(2,1,1)')
        assert.equal(4,Table._cellNum(2,2,0),'cellNum(2,2,0)')
        assert.equal("c0",Table._cellId(2,0,0),'cellId(2,0,0)')
        assert.equal("c3",Table._cellId(2,1,1),'cellId(2,1,1)')
        assert.equal("c4",Table._cellId(2,2,0),'cellId(2,2,0)')
        assert.equal("r0",Table._rowId(0),'rowId(0)')
        assert.equal("r1",Table._rowId(1),'rowId(1)')
        assert.equal("r2",Table._rowId(2),'rowId(2)')
        assert.equal("<td id='c0'>\u00a0</td>",
          Table._cellHtml(2,0,0), 'not cellHtml(2,0,0)');
        assert.equal("<td id='c3'>\u00a0</td>",
          Table._cellHtml(2,1,1), 'not cellHtml(2,0,0)');
        assert.equal("<tr id='r0'></tr>",
          Table._rowHtml(0,0), 'not rowHtml(0,0)');
        assert.equal("<tr id='r0'><td id='c0'>\u00a0</td></tr>",
          Table._rowHtml(1,0), 'not rowHtml(1,0)');
        assert.equal("<tr id='r1'><td id='c2'>\u00a0</td><td id='c3'>\u00a0</td></tr>",
          Table._rowHtml(2,1), 'not rowHtml(2,1)');
        assert.equal("<table><tbody>" +
          "<tr id='r0'><td id='c0'>\u00a0</td><td id='c1'>\u00a0</td></tr>" +
          "<tr id='r1'><td id='c2'>\u00a0</td><td id='c3'>\u00a0</td></tr>" +
          "</tbody></table>",
          Table.html(2,2), 'not html(2,2)');
      });
    });
  });
