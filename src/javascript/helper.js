import $ from 'jquery';

const getTopNode = function(node) {
  const nodeName  = node.nodeName.toString().toLowerCase();
  if (nodeName === 'p' || nodeName === 'h1' || nodeName === 'blockquote') {
    return $(node);
  }
  return getTopNode(node.parentNode);
};

export default getTopNode;
