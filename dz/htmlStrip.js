function htmlStrip(str){
	return str.replace(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/mig,'$2');
}