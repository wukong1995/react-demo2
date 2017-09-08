import $ from 'jquery';
import Selection from './selection';

const helper = {
  changeText: type => {
    const selection = new Selection();
    
    if (selection.getNodeSelection() === null) {
      return;
    }
    selection.init();
    const text = selection.getSelctionText().split('\n');
    const $startNode = selection.getSelectionStart();
    const $endNode = selection.getSelectionEnd();
    const length = text.length;
    const startText = text[0];
    const endText = text[length - 1];

    if (length > 1){  // 选中多个元素
      $startNode.nextUntil($endNode).each((index, ele) => {
        const $ele = $(ele);
        $ele.html($ele.html().replace(text[index + 1], `<${type}>${text[index + 1]}</${type}>`));
      });
      $endNode.html($endNode.html().replace(endText, `<${type}>${endText}</${type}>`));
    }
    $startNode.html($startNode.html().replace(startText, `<${type}>${startText}</${type}>`));
    selection.getSelection().removeAllRanges();
  }
};

const editorEvent = () => {
  const $panel = $('#editor-pannel');
  const $textarea = $('#editor-textarea');

  // show code
  $('#show-code').on('click', function() {
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

  // yinyong
  $('#yinyong').on('click', function() {
    const selection = new Selection();
    if (selection.getNodeSelection() === null) {
      return;
    }

    selection.init();
    const text = selection.getSelctionText().split('\n');
    const $startNode = selection.getSelectionStart();
    const $endNode = selection.getSelectionEnd();

    if (text.length > 1){  // 选中多个元素
      $startNode.nextUntil($endNode).remove();
      $endNode.remove();
    }
    $startNode.replaceWith(`<blockquote>${text.join('<br>')}</blockquote>`);    
  });

  // cuti
  $('#cuti').on('click', function() {
    helper.changeText('b');
  });

  // xieti
  $('#xieti').on('click', function() {
    helper.changeText('i');
  });

  // xiahuaxian
  $('#xiahuaxian').on('click', function() {
    helper.changeText('u');
  });

  // deleteline
  $('#deleteline').on('click', function() {
    helper.changeText('strike');
  });

};

export default editorEvent;
