function draw(){
  var now = new Date();
  var hours24 = now.getHours();
  var hours = hours24 % 12;
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();

  var smoothseconds = seconds + (milliseconds / 1000.0);
  var smoothminutes = minutes + (smoothseconds / 60.0);
  var smoothhours = hours + (smoothminutes / 60.0);

  var LEDs = document.getElementsByClassName("LED");
  [].forEach.call(LEDs, function(LED){
    var OFF = 0;
    if(LED.hasAttribute('ledoff')){
      OFF = eval(LED.attributes.ledoff.value);
    }
    if (eval(LED.attributes.led.value)){
      LED.style.opacity = 1;
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
