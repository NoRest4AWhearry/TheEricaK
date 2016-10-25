	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActieXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'about.xml');
	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
			
			var items =
			request.responseXML.getElementByTagName('about');
			var output = '<ul>';
			output += '</ul>';
			
			document.getElementById('update').innerHTML = output;
		}
}
request.send();