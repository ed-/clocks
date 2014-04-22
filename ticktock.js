function draw(){
  var now = new Date();
  var hours = now.getHours() % 12;
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();

  var ON = 1.0;
  var OFF = 0.125;

  var LEDs = document.getElementsByClassName("LED");
  [].forEach.call(LEDs, function(LED){
    if (eval(LED.attributes.led.value)){
      LED.style.opacity = ON;
    } else {
      LED.style.opacity = OFF;
    }
  });

  var SPINs = document.getElementsByClassName("SPIN");
  [].forEach.call(SPINs, function(SPIN){
    var rot = eval(SPIN.attributes.spin.value);
    var x = eval(SPIN.attributes.spinx.value);
    var y = eval(SPIN.attributes.spiny.value);
    var transform = "rotate(" + rot + " " + x + " " + y + ")";
    SPIN.setAttribute("transform", transform);
  });

  var pad = '';
  if (minutes < 10) {
    pad = '0';
  }

  document.title = (hours + ':' + pad + minutes);
}

function start(FPS){
  var millisecondsPerFrame = 1000.0 / FPS;
  window.setInterval(draw, millisecondsPerFrame);
}
