test(
  'TableTest',

  { },

  [
    'titanic.html.Table'
  ],

  function (Table) {
    assert.eq(0,Table._cellNum(2,0,0),'cellNum(2,0,0)')
    assert.eq(1,Table._cellNum(2,0,1),'cellNum(2,0,1)')
    assert.eq(2,Table._cellNum(2,1,0),'cellNum(2,1,0)')
    assert.eq(3,Table._cellNum(2,1,1),'cellNum(2,1,1)')
    assert.eq(4,Table._cellNum(2,2,0),'cellNum(2,2,0)')
    assert.eq("c0",Table._cellId(2,0,0),'cellId(2,0,0)')
    assert.eq("c3",Table._cellId(2,1,1),'cellId(2,1,1)')
    assert.eq("c4",Table._cellId(2,2,0),'cellId(2,2,0)')
    assert.eq("r0",Table._rowId(0),'rowId(0)')
    assert.eq("r1",Table._rowId(1),'rowId(1)')
    assert.eq("r2",Table._rowId(2),'rowId(2)')
    assert.eq("<td id='c0'>\u00a0</td>", 
      Table._cellHtml(2,0,0), 'not cellHtml(2,0,0)');
    assert.eq("<td id='c3'>\u00a0</td>", 
      Table._cellHtml(2,1,1), 'not cellHtml(2,0,0)');
    assert.eq("<tr id='r0'></tr>", 
      Table._rowHtml(0,0), 'not rowHtml(0,0)');
    assert.eq("<tr id='r0'><td id='c0'>\u00a0</td></tr>", 
      Table._rowHtml(1,0), 'not rowHtml(1,0)');
    assert.eq("<tr id='r1'><td id='c2'>\u00a0</td><td id='c3'>\u00a0</td></tr>", 
      Table._rowHtml(2,1), 'not rowHtml(2,1)');
    assert.eq("<table><tbody>" +
      "<tr id='r0'><td id='c0'>\u00a0</td><td id='c1'>\u00a0</td></tr>" +
      "<tr id='r1'><td id='c2'>\u00a0</td><td id='c3'>\u00a0</td></tr>" +
      "</tbody></table>", 
      Table.html(2,2), 'not html(2,2)');
  }
);
