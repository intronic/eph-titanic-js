define(
  [
    "jquery"
  ],

  function ($) {
    var elt = $("#log")

    var element = function () {
      return elt;
    };

    // append msg to the log.
    var show = function(msg) {
      if (msg != null) {
        elt.append('<pre>' + msg + '</pre>')
      }
    }

    return {
      element: element,
      show: show
    };
  }
);
