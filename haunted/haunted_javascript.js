main();
var audio = new Audio('haunted_Thunder_Crack.mp3');

function main() {
	myButton = document.getElementById("button");
	myButton.onclick = function(event) {

		button = document.getElementById("button")
		button.style.color = "transparent";
		button.style.borderColor = "transparent";

		lightningSequence();
	    var lightningInterval = setInterval(lightningSequence, 3000);

		var xhr = new XMLHttpRequest();
		xhr.setRequestHeader('Access-Control-Allow-Origin');
		xhr.open("POST", "http://http://52.39.216.2:5000/practice", true);
		xhr.send()
	}		
}

function lightningSequence() {
		if (audio.paused) {
        	audio.play();
    	} else {
        	audio.currentTime = 0
    	}
		setTimeout("playLightning()",100);
		setTimeout("playLightning()",400);
		setTimeout("playLightning()",500);
}

function playLightning() {
    var top = document.getElementById("top-div");
    var middle = document.getElementById("middle-div");
    var id = setInterval(lightning, 50);	
    var counter = 0;
    function lightning() {
	    if (counter == 0) {
	    	counter++;
	    	top.style.backgroundColor = "transparent";
	    	middle.style.backgroundColor = "transparent";
	    } else if (counter == 1) {
	        counter++;
	        top.style.backgroundColor = "black";
	    	middle.style.backgroundColor = "black";
	    } else if (counter == 2) {
	        clearInterval(id);
	    }
	}
} 



	// setTimeout("resetAnimation()", 500);

// function resetAnimation() {
// 	document.getElementById("top-div").style.WebkitAnimationPlayState = "none";
// 	document.getElementById("bottom-div").style.WebkitAnimationPlayState = "none";
// 	document.getElementById("middle-div").style.WebkitAnimationPlayState = "none";

// 	document.getElementById("top-div").style.WebkitAnimationPlayState = "";
// 	document.getElementById("bottom-div").style.WebkitAnimationPlayState = "";
// 	document.getElementById("middle-div").style.WebkitAnimationPlayState = "";
// }
