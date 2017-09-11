import $ from 'jquery';
import Selection  from './selection';
// import getPNode from './helper';

const helper = {
  changeText: (tagName, prop = '') => {
    const selection = new Selection();
    if (selection.isSelection()) {
      return;
    }
    const text = selection.getSelctionText().split('\n');
    const $startNode = selection.getSelectionStart();
    const $endNode = selection.getSelectionEnd();
    const length = text.length;
    const startText = text[0];
    const endText = text[length - 1];

    // bug 当选中内容有不同样式时，无法替换新的样式

    if (length > 1){  // 选中多个元素
      $startNode.nextUntil($endNode).each((index, ele) => {
        const $ele = $(ele);
        $ele.html($ele.html().replace(text[index + 1], `<${tagName} ${prop}>${text[index + 1]}</${tagName}>`));
      });
      $endNode.html($endNode.html().replace(endText, `<${tagName} ${prop}>${endText}</${tagName}>`));
    }
    $startNode.html($startNode.html().replace(startText, `<${tagName} ${prop}>${startText}</${tagName}>`));
    selection.getSelection().removeAllRanges();
  },
  changeTag: (tagName) => {
    const selection = new Selection();
    if (selection.isSelection()) {
      return;
    }

    const text = selection.getSelctionText().split('\n');
    const $startNode = selection.getSelectionStart();
    const $endNode = selection.getSelectionEnd();

    if (text.length > 1){  // 选中多个元素
      $startNode.nextUntil($endNode).remove();
      $endNode.remove();
    }
    $startNode.replaceWith(`<${tagName}>${text.join('<br>')}</${tagName}>`);    
  }
};

const editorEvent = () => {
  const $panel = $('#editor-pannel');
  const $textarea = $('#editor-textarea');
  const $showCode = $('#show-code');

  const pHandle = () => {
    // 将自动生成的标签换成p
    const selection = new Selection();
    const $container  = selection.getSelectionContainer();
    const $parentElem = $container.parent();

    if (!$parentElem.is($panel)) {
      // 不是顶级标签
      return;
    }
    const nodeName = $container[0].nodeName;
    if (nodeName === 'P') {
      // 当前的标签是 P ，不用做处理
      return;
    }

    if ($container.text()) {
      // 有内容，不做处理
      return;
    }

    // 插入 <p> ，并将选取定位到 <p>，删除当前标签
    const $p = $('<p><br></p>');
    $p.insertBefore($container);
    selection.createRangeByElem($p, true);
    // selection.restoreSelection();
    $container.remove();
  };

  $panel.on('keyup', function(event) {
    if (event.keyCode !== 13) {
      return;
    }

    pHandle();
  });

  // show code
  $showCode.on('click', function() {
    const $this = $(this);

    if($this.hasClass('active')) {
      $this.removeClass('active');
      $panel.css('display', 'block').html($textarea.val());
      $textarea.css('display', 'none');
    } else {
      $this.addClass('active');
      $textarea.css('display', 'block').val($panel.html());
      $panel.css('display', 'none');
    }
  });

  $('.menu-item').on('click', function(event) {
    if($showCode.hasClass('active')) {
      return;
    }
    const target = $(event.currentTarget);
    switch(target.attr('id')) {
    case 'cuti':
      helper.changeText('b');
      break;
    case 'xieti':
      helper.changeText('i');
      break;
    case 'xiahuaxian':
      helper.changeText('u');
      break;
    case 'deleteline':
      helper.changeText('strike');
      break;
    case 'addColor':
      helper.changeText('font', 'color="red"');
      break;
    case 'addBgc':
      helper.changeText('span', 'style="background-color: rgb(77, 128, 191);"');
      break;
    case 'addTitle':
      helper.changeTag('h1');
      break;
    case 'yinyong':
      helper.changeTag('blockquote');
      break;
    default:
      break;
    }
  });
};

export default editorEvent;
