$(document).ready(function(){
  $('#stars-wrapper1').stars({
      callback:function(ui, type, value){
      say(ui.$form);
      say(type);
      say(value);
    }
  });
});