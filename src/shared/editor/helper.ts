import $ from 'jquery'

const topTag = ['p', 'blockquote', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ol', 'ul']

const getTopNode = function (node) {
  const nodeName = node.nodeName.toString().toLowerCase()
  if ($.inArray(nodeName, topTag) > -1) {
    return $(node)
  }
  return getTopNode(node.parentNode)
}

export default getTopNode
