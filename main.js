$(function(){
  const MSG_TEXT_MAX = "20文字以内で入力してください。";
  const MSG_EMPTY = "入力必須です。";
  const MSG_EMAIL_TYPE = "emailの形式で入力してください。";
  const MSG_TEXTAREA_MAX = "100文字以内で入力してください。";

  //VALIDATION OF NAME FORM
  $('.valid-name').keyup(function(){
    var form_g = $(this).closest('.form-group');

    if($(this).val().length === 0){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_EMPTY);
    }else if($(this).val().length > 20){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_TEXT_MAX);
    }else{
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.help-block').text('');
    }
  });

  //VALIDATION OF EMAIL FORM
  $('.valid-email').keyup(function(){
    var form_g = $(this).closest('.form-group');

    if($(this).val().length === 0){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_EMPTY);
    }else if($(this).val().length > 50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_EMAIL_TYPE);
    }else{
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.help-block').text('');
    }
  });

  //VALIDATION OF PHONE FORM
  $('.valid-phone').change(function(){
    var form_before = $(this).val();

    form_before = form_before.replace(/\s+/g,'');

    var form_after = form_before.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){ return String.fromCharCode(s.charCodeAt(0)-0xFEE0)});
    if(form_after.length === 11){
      //ハイフンを挿入して要素内を書き換える
      $(this).val(form_after.substr(0,3)+'-'+form_after.substr(3,4)+'-'+form_after.substr(7,4));
    }else{
      //何もせずに要素内を書き換える
      $(this).val(form_after);
    }
  });

  //VALIDATION OF TEXTAREA FORM
  $('.valid-textarea').keyup(function(){
    var form_g = $(this).closest('.form-group');

    if($(this).val().length === 0){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_EMPTY);
    }else if($(this).val().length > 100){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(MSG_TEXTAREA_MAX);
    }else{
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.help-block').text('');
    }
  });
});