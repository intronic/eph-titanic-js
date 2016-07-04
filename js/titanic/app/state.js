define(
  [
    "immutable"
  ],

  function (immutable) {
    var _selectionSet

    function selectionSet (s) {
      if (s != null) {
        _selectionSet = s
      }
      return _selectionSet
    }

    function init () {
      return _selectionSet = immutable.Set();
    }
    // toggleId: cancel the selection of any other cells,
    // and toggle the selection of the item 'id'.
    // Call the selectionChange function with the old and new selectionSets.
    function toggleId(id, selectionChange) {
      var newSet;
      if (selectionSet().has(id)) {
        newSet = immutable.Set()
      } else {
        newSet = immutable.Set.of(id)
      }
      selectionChange(selectionSet(), newSet)
      return selectionSet(newSet)
    }

    // toggleAddId: toggles the selection of the cell, and preserves
    // selection of any other cells. Essentially, you are adding to the selection.
    // Call the selectionChange function with the old and new selectionSets
    function toggleAddId(id, selectionChange) {
      var newSet;
      if (selectionSet().has(id)) {
        newSet = selectionSet().delete(id)
      } else {
        newSet = selectionSet().add(id)
      }
      selectionChange(selectionSet(), newSet)
      return selectionSet(newSet)
    }

    init()

    return {
      init:         init,
      selectionSet: selectionSet,
      toggleId:     toggleId,
      toggleAddId:  toggleAddId
    };
  }
);
