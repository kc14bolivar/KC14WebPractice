/*
var canvas, context;
*/

var toColor01;
var colorPicker; 

window.onload = function (){
	/*
	canvas=document.querySelector("#canvas0504");
	context=canvas.getContext("2d");
	*/
	
	toColor01 = document.querySelector("#colorDiv");
	colorPicker = document.querySelector("#colorPicker");
	
	colorPicker.addEventListener("input",setColor,false);
	
	/*
	context.fillRect(0,0,25,25);
	*/
}


setColor = function(evt){
	//document.body.style.backgroundColor = colorPicker.value;
	toColor01.style.backgroundColor=colorPicker.value;
}
