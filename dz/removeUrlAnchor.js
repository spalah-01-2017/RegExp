function removeUrlAnchor(str){
	if(str.indexOf('#')>0)
		return str.substr(0,str.indexOf('#'));
	else
		return str;
}

//с рег. выражением:
function removeUrlAnchorReg(str){
	return str.replace(/#(.*)?/g,'');
}