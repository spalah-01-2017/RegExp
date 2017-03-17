function removeUrlAnchor (Url) {
	return Url.replace(/\#\w+/, '');
}

function removeUrlAnchor2 (Url) {
	return Url.indexOf('#') == -1 ? Url : Url.slice(0, Url.indexOf('#'));
}
