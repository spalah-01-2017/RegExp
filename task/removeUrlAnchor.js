function removeWithRegexp(url) {
    return url.replace(/\#\w+/g, '');
}

function removeNoRegExp(url) {
    return url.slice(0, url.indexOf('#'));
}