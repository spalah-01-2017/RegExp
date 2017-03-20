function htmlStrip(str) {
  var res = str.replace(/<\/?[a-z][a-z0-9]*( [^>]*)?>/gi, '');
  
  return res;
}

htmlStrip('<div> hi </div>');
htmlStrip('<div class="message">hello world</div>');