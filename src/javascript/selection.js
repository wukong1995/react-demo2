import $ from 'jquery';
const getPNode = function(node) {
  if (node.nodeName.toString().toLowerCase() === 'p') {
    return $(node);
  }
  return getPNode(node.parentNode);
};

const Selection = function() {
  this.select = null;
  this.range = null;
};

Selection.prototype = {
  init: function() {
    this.select = window.getSelection();
    this.range = this.select.getRangeAt(0);
  },
  isSelection: function() {
    return window.getSelection().anchorNode;
  },

  getSelection: function() {
    return window.getSelection();
  },
  getRange: function() {
    return this.getSelection.getRangeAt(0);
  },
  getSelectionContainer: function() {
    return $(this.range.commonAncestorContainer);
  },
  getSelectionStart: function() {
    return getPNode(this.range.startContainer);
  },
  getSelectionEnd: function() {
    return getPNode(this.range.endContainer);
  },
  getSelctionText: function() {
    return this.select.toString();
  }
};

export default Selection;
