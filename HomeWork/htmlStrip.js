function htmlStrip (nodeString) {
	return nodeString.replace(/(\<(\/?[^>]+)>)/g, '')
}
