define(
  [
    'titanic/ui/tableSpec',
    'titanic/ui/mainDiv'
  ],

  function (tableSpec,mainDiv) {

    // trigger drawing table in main div when table spec button is clicked
    tableSpec.onclick(function () {
      mainDiv.show();
    });

    return {
    }
  }
);
