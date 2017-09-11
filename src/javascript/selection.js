import $ from 'jquery';
import getTopNode from './helper';

const Selection = function() {
  this.select = null;
  this.range = null;
  this.init();
};

Selection.prototype = {
  init: function() {
    this.select = window.getSelection();
    this.range = this.select.getRangeAt(0);
  },
  isSelection: function() {
    return this.select.toString() === '';
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
    return getTopNode(this.range.startContainer);
  },
  getSelectionEnd: function() {
    return getTopNode(this.range.endContainer);
  },
  getSelctionText: function() {
    return this.select.toString();
  },
  getAnchorNode: function() {
    return $(this.select.anchorNode);
  },
  createRangeByElem: function ($elem, toStart, isContent) {
    // $elem - 经过封装的 elem
    // toStart - true 开始位置，false 结束位置
    // isContent - 是否选中Elem的内容
    if (!$elem.length) {
      return;
    }

    const elem = $elem[0];
    const range = document.createRange();

    if (isContent) {
      range.selectNodeContents(elem);
    } else {
      range.selectNode(elem);
    }

    if (typeof toStart === 'boolean') {
      range.collapse(toStart);
    }

    // 存储 range
    // this.saveRange(range);
  }
};

export default Selection;
