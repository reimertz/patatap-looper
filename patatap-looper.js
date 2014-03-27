$(function(){
  var beatPerLoop = 16,
      BeatsPerMinute = 200,
      $objects = {
        e: jQuery.Event("keydown"),
        $input : $("input"),
        $html : $("html")
      };
      
      loops = {
        base_loop     : 'e - - - e - - - e - - - e - - -',
        snare_loop    : '- - o - - - o - - - o - - - o -',
        love_loop     : '- p - h - e - a - r - t - m - -'
      };

  function beatIt (loop, beat, bpl, bpm, $objects) {

    if(loop[beat] !== '-'){
      $objects.e.which = loop[beat].toUpperCase().charCodeAt(0);
      $objects.$input.val(String.fromCharCode($objects.e.which));
      $objects.$html.trigger($objects.e);
    }

    setTimeout(function(){

      var nextBeat = ((beat+1) === bpl) ?  0 : (beat+1); 
      beatIt(loop, nextBeat, bpl, bpm, $objects);
    }, (1000 * 60) / BeatsPerMinute);
  }

  function initBeats (loops, bpl, bpm, $objects) {
    _.each(loops, function(loop){
      beatIt(loop.split(' '), 0, bpl, bpm, $objects);
    });
  }

  initBeats(loops, beatPerLoop, BeatsPerMinute, $objects);
});
