define(
  [
    'titanic/ui/tableSpec',
    'titanic/ui/mainDiv'
  ],

  function (tableSpec,mainDiv) {
    console.log("setup");

    // trigger drawing table in main div when table spec button is clicked
    tableSpec.onclick(function () {
      mainDiv.show();
      console.log("Table rows: " + tableSpec.rows() + " cols:" + tableSpec.cols());
    });

    return {
    }
  }
);
