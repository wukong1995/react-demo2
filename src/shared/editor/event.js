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
    // console.log(text);

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
    switch(target.data('type')) {
    case 'cuti':
      document.execCommand('bold');
      break;
    case 'xieti':
      document.execCommand('italic');
      break;
    case 'xiahuaxian':
      document.execCommand('underline');
      break;
    case 'deleteline':
      document.execCommand('strikeThrough');
      break;
    case 'addColor':
      document.execCommand('foreColor', false ,'red');
      break;
    case 'addBgc':
      // 第三个参数为color类型的字符串
      // rgb不起作用，#ccc 是可以的, 英文单词也可以
      document.execCommand('backColor', false ,'#ccc');
      break;
    case 'yinyong':
      helper.changeTag('blockquote');
      break;
    default:
      break;
    }
  });

  $('.menu-item__drop').on('click', function(event) {
    if($showCode.hasClass('active')) {
      return;
    }
    const target = $(event.target);
    switch(target.data('type').toLowerCase()) {
    case 'addh1':
      helper.changeTag('h1');
      break;
    case 'addh2':
      helper.changeTag('h2');
      break;
    case 'addh3':
      helper.changeTag('h3');
      break;
    case 'addh4':
      helper.changeTag('h4');
      break;
    case 'addh5':
      helper.changeTag('h5');
      break;
    case 'addh6':
      helper.changeTag('h6');
      break;
    case 'addp':
      helper.changeTag('P');
      break;
    default:
      break;
    }
  });

  // 创建a链接
  // document.execCommand('createLink', false ,'http://jiqizhixin.com');
  // 去除链接 unlink

  // 更换标签 只对第一行起作用
  // document.execCommand('formatBlock', false ,'H1');

  // 新增html片段：但是IE不支持这种方式
  // document.execCommand('insertHTML', false ,'<h1>哇哦，这是新增的</h1>')

  // 插入image 标签
  // document.execCommand('insertImage', false , imageUrl)

  // 插入有序 无序列表：insertOrderedList insertUnorderedList： 不起作用

  // 文字对齐方式：justifyCenter justifyLeft justifyRight

  // 上角标：superscript 下角标：subscript
};

export default editorEvent;

// -------
// 创建一个editor对象，所有属性全部挂在到editor上面
// 创建一个selection对象，每次如何更新选区？

// 实现可定制化

