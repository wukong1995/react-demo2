import $ from 'jquery';

const editorEvent = () => {
  const $panel = $('.js-editor-pannel');
  const $textarea = $('.js-editor-textarea');
  
  $('.js-show-code').on('click', () => {
    const $this = $('.js-show-code');

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

};

export default editorEvent;
