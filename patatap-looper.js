$(function(){
  var beatPerLoop = 16,
      BeatsPerMinute = 200,

      beats = {
        base_loop     : 'e - - - e - - - e - - - e - - -',
        snare_loop    : '- - o - - - o - - - o - - - o -',
        love_loop     : '- p - h - e - a - r - t - m - -'
      };
  
  function beatIt(loop, beat, bpl, bmp){
    
    if(loop[beat] !== '-'){
      var e = jQuery.Event("keydown");
      e.which = loop[beat].toUpperCase().charCodeAt(0);
      $("input").val(String.fromCharCode(e.which));
      $("html").trigger(e);
    }

    setTimeout(function(){
      var nextBeat = (beat+1)%bpl; 
      beatIt(loop, nextBeat, bpl, bmp);
    }, (1000 * 60) / bmp);
    
  }

  function initBeats(beats, bpl, bmp){
    _.each(beats, function(beat){
      beatIt(beat.split(' '), 0, bpl, bmp);
    });
  }

  initBeats(beats, beatPerLoop, BeatsPerMinute);
});
