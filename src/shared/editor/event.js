import $ from 'jquery';
import Selection  from './selection';

const helper = {
  changeText: (tagName, prop = '') => {
    const selection = new Selection();
    if (selection.isSelection()) {
      return;
    }
    const text = selection.getSelctionText().split('\n');
    const $startNode = selection.getSelectionStart();
    const startText = text[0];

    const cloneNodes = selection.getCloneNodes();
    if(cloneNodes.length > 0) { // 选中多个元素
      let $curNode = $startNode.next();
      for (let i = 1;i < cloneNodes.length; i++ ) {
        let text = cloneNodes[i].innerHTML;
        // bug-- 替换的时候，匹配替换有问题
        $curNode.html($curNode.html().replace(text, `<${tagName} ${prop}>${text}</${tagName}>`));
        $curNode = $curNode.next();
      }
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

  // 删除的时候，禁止删除全部 留一个p
  $panel.on('keydown', function(event) {
    if (event.keyCode !== 8) {
      return;
    }
    
    const txtHtml = $panel.html().toLowerCase().trim();
    if (txtHtml === '<p><br></p>') {
      event.preventDefault();
      return;
    }
  });

  // 监控回车事件
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
