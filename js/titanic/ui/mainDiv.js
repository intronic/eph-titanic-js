define(
  [
    'titanic/html/table',
    'titanic/ui/tableSpec'
  ],

  function (table,tableSpec) {
    var main = document.getElementById("main") // main element
    var iframe = main.getElementsByTagName("iframe").item(0); // iframe under 'main'
    var idoc = iframe.contentDocument || iframe.contentWindow.document; // doc of iframe
    // window of iframe
    var iwin = iframe.contentWindow ? iframe.contentWindow : iframe.contentDocument.defaultView;

    var element = function () {
      return main;
    };
    //var onclick = function (f) {
    //  ts.onclick = f;
    //};

    // add table to body of iframe
    var addTable = function(r,c) {
      var b = idoc.body || idoc.getElementsByTagName('body')[0];
      b.innerHTML = table.html(r,c)
    }
    // set iframe document style
    var setDocStyle = function() {
      var h = idoc.head || document.getElementsByTagName('head')[0];
      var s = h.getElementsByTagName("style")
      if (s.length == 0) {
        var css = "table { border: 1px solid black; }\
td { border: 1px solid black; width: 12pt; }\
td.sel, tr.sel { background-color: #FF3300; }"
        var style = idoc.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet){
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(idoc.createTextNode(css));
        }
        h.appendChild(style);
      }
    }
    // Set a style for the table, create the table, show the main div
    var show = function () {
      setDocStyle()
      addTable(tableSpec.rows(),tableSpec.cols())
      main.style.visibility = "visible";
    };

    return {
      element: element,
      //onclick: onclick,
      show: show
    };
  }
);
