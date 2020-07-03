import $ from 'jquery'
import getTopNode from './helper'

const Selection = function () {
  this.select = null
  this.range = null
  this.init()
}

Selection.prototype = {
  init() {
    this.select = window.getSelection()
    this.range = this.select.getRangeAt(0)
  },
  isSelection() {
    return this.select.toString() === ''
  },

  getSelection() {
    return window.getSelection()
  },
  getRange() {
    return this.getSelection.getRangeAt(0)
  },
  getSelectionContainer() {
    return $(this.range.commonAncestorContainer)
  },
  getSelectionStart() {
    return getTopNode(this.range.startContainer)
  },
  getSelectionEnd() {
    return getTopNode(this.range.endContainer)
  },
  getSelctionText() {
    return this.select.toString()
  },
  getAnchorNode() {
    return $(this.select.anchorNode)
  },
  getCloneNodes() {
    return this.range.cloneContents().children
  },
  createRangeByElem($elem, toStart, isContent) {
    // $elem - 经过封装的 elem
    // toStart - true 开始位置，false 结束位置
    // isContent - 是否选中Elem的内容
    if (!$elem.length) {
      return
    }

    const elem = $elem[0]
    const range = document.createRange()

    if (isContent) {
      range.selectNodeContents(elem)
    } else {
      range.selectNode(elem)
    }

    if (typeof toStart === 'boolean') {
      range.collapse(toStart)
    }

    // 存储 range
    // this.saveRange(range);
  }
}

export default Selection
