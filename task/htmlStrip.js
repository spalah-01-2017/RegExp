function htmlStrip(str) {
    return str.replace(/<\/?[^>]+>/g, '');
}