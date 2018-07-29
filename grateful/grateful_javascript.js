main();

function main() {
	myButton = document.getElementById("button")
	myButton.onclick = function(event) {
		var xhr = new XMLHttpRequest();
		myTextbox = document.getElementById("textbox")
		data = {"message":myTextbox.value}
		xhr.open("POST", "http://52.39.216.2:5000/", true);
		xhr.setRequestHeader('Content-Type', 'application/json', 'Access-Control-Allow-Origin');
		xhr.send(JSON.stringify(data));
	}		
}