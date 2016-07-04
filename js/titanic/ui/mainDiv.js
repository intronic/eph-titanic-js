define(
  [
    "jquery",
    "immutable",
    "titanic/app/state",
    "titanic/html/table",
    "titanic/ui/tableSpec",
    "titanic/ui/coords",
    "titanic/util/xy"
  ],

  function ($,immutable,state,table,tableSpec,coords,xy) {
    var deltaXY = {left: 10, top: 10};
    var main = $("#main") // main element
    var iframe = main.find("iframe")[0]; // iframe under 'main'
    var idoc = $(iframe).contents(); // doc of iframe
    // window of iframe
    var iwin = iframe.contentWindow ? iframe.contentWindow : iframe.contentDocument.defaultView;
    var lastMousePos = {}

    var element = function () {
      return main;
    };

    function eventXY(e) {
      return {left: e.pageX, top: e.pageY}
    }
    function iframeXY(ifr) {
      return $(ifr).offset()
    }
    function scrollXY(win) {
      return {left: $(win).scrollLeft(), top: $(win).scrollTop() }
    }

    // Event listeners
    // mouseenter updates the coords element label to show
    // the iframe coordinates, following the mouse pointer
    // in window viewport coordinates.
    // The event has coordinates relative to the top window.
    function mouseenter(e) {
        var xyW = eventXY(e) // mouse from window origin
        var xyOI = iframeXY(iframe) // iframe from window origin
        var xySW = scrollXY(window) // window scroll
        var xySI = scrollXY(iwin) // iframe scroll
        var xyI = xy.subtract(xyW, xyOI)
        var ifrPos = xy.add(xyI, xySI) // mouse from iframe origin
        // mouse in window viewport
        var winPos = xy.subtract(xyW, xySW)
        lastMousePos = xyI
        coords.show(xy.str(ifrPos), xy.add(winPos, deltaXY))
    }

    // mouseleave hides the coords element.
    function mouseleave(e) {
        lastMousePos = {}
        coords.show()
    }

    // mousemove does the same as for mouseenter, but the
    // event has coordinates relative to the iframe.
    function mousemove(e) {
      var ifrPos = eventXY(e) // mouse from iframe origin
      var xyOI = iframeXY(iframe) // iframe from window origin
      var xySW = scrollXY(window) // window scroll
      var xySI = scrollXY(iwin) // iframe scroll
      // mouse in iframe viewport
      var xyMouse = xy.subtract(ifrPos, xySI)
      // mouse in window viewport
      var winPos = xy.subtract(xy.add(xyMouse, xyOI), xySW)
      lastMousePos = xyMouse
      coords.show(xy.str(ifrPos), xy.add(winPos, deltaXY))
    }

    // scrolling updates just the coords element label.
    // The event does not have mouse coordinates.
    function scroll (e) {
      var xyS = scrollXY(iwin) // iframe scroll
      var ifrPos = xy.add(xyS, lastMousePos)
      coords.show(xy.str(ifrPos))
    }

    // A single left­click cancels the selection of any other
    // cells, and toggles the selection of the cell at the
    // mouse pointer.
    function click (e) {
      if (e.target.tagName == "TD") {
        state.toggleId(e.target.id, toggleSelected)
      }
    }
    // A single right­click toggles the selection of the cell
    // at the mouse pointer, and preserves selection of any
    // other cells. Essentially, you are adding to the selection.
    function contextmenu (e) {
      e.preventDefault()
      if (e.target.tagName == "TD") {
        state.toggleAddId(e.target.id, toggleSelected)
      }
    }
    // A double left­click cancels the selection of any other
    // cells, and selects the entire row at the mouse pointer.
    function dblclick (e) {
      if (e.target.tagName == "TD") {
        var r = $(e.target).parent()[0]
        state.toggleId(r.id, toggleSelected)
      }
    }

    // Change the UI selection state to visually indicate
    // the cell or row selection status.
    // oldSet and newSet are sets of cell or row IDs that were
    // and are now selected, respectively.
    // old (but not new) items should be unselected.
    // new (but not old) items should be selected.
    // any other items have not changed state.
    function toggleSelected(oldSet, newSet) {
      var unSel = oldSet.subtract(newSet)
      var toSel = newSet.subtract(oldSet)
      var off = unSel.forEach(function(id) {
        $(idoc).find("#"+id).removeClass("sel");
      })
      var on  = toSel.forEach(function(id) {
        $(idoc).find("#"+id).addClass("sel");
      })
    }

    // attach events
    $(iframe).hover(mouseenter, mouseleave)
    $(idoc).mousemove(mousemove)
    $(idoc).scroll(scroll)
    $(idoc).click(click)
    $(idoc).dblclick(dblclick)
    $(idoc).contextmenu(contextmenu)

    // add table to body of iframe
    var addTable = function(r,c) {
      var b = idoc.body || idoc.find('body')[0];
      $(b).html(table.html(r,c))
    }
    // set iframe document style
    var setDocStyle = function() {
      var h = $(idoc).head || $(idoc).find("head")[0];
      var s = $(h).find("style")
      if (s.length == 0) {
        var style = "table { border: 1px solid black; }\
td { border: 1px solid black; width: 12pt; }\
td.sel, tr.sel { background-color: #FF3300; }"
        $(h).append('<style type="text/css">' + style + '</style>')
      }
    }
    // Set a style for the table, create the table, show the main div
    var show = function () {
      setDocStyle()
      addTable(tableSpec.rows(),tableSpec.cols())
      main.css({visibility: "visible"})
    };

    return {
      element: element,
      //onclick: onclick,
      show: show
    };
  }
);
