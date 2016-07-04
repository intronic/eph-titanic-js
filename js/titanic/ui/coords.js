define(
  [
    "jquery"
  ],

  function ($) {
    var elt = $("#coords")

    var element = function () {
      return elt;
    };

    // set the innerHTML to 'html', and optionally set
    // the fixed offset (object {left: l, top: t}) of the element.
    var show = function(h, offset) {
      if (h != null) {
        elt.html(h).css({display: "block"})
      } else {
        elt.css({display: "none"})
      }
      if (offset != null) {
        elt.css({position : "fixed", display: "block"})
          .css(offset)
      }
    }

    return {
      element: element,
      show: show
    };
  }
);
