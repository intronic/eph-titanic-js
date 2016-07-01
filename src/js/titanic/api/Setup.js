define(
  'titanic.api.Setup',

  [
    'titanic.ui.TableSpec',
    'titanic.ui.MainDiv'
  ],

  function (TableSpec,MainDiv) {
    return function () {
      console.log("Setup");
      var tableSpec = TableSpec(); // table specification control
      var md = MainDiv(); // main div to hold table

      // trigger drawing table in main div when table spec button is clicked
      tableSpec.onclick(function () {
        md.show();
        console.log("Table rows: " + tableSpec.rows() + " cols:" + tableSpec.cols());
      });

      return {
        tableSpec: tableSpec
      }
    }
  }
);
