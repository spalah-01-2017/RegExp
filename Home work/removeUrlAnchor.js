function removeUrlAnchor(url) {
  var res = url.replace(/#.+/gi,'');
  
  return res;
}

// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1')