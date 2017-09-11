import $ from 'jquery';

const getPNode = function(node) {
  if (node.nodeName.toString().toLowerCase() === 'p') {
    return $(node);
  }
  return getPNode(node.parentNode);
};

export default getPNode;
