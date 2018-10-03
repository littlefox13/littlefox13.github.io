function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  };
  
var a = randomInteger(6, 9);
var b = randomInteger(11-a, 14-a);
var c = a + b;

var canvas = document.getElementById("myCanvas");
var f1 = canvas.getContext("2d");

pic = new Image();
pic.src = 'imgs/sprite.png';

pic.onload = function(){
	f1.drawImage(pic, 0, 200);
	f1.font = "35px Arial";
	f1.fillStyle = "black";
	f1.fillText(a+" + "+b+" = ?",350,50);
	        		  
	drawArc();
};

function drawArc(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
	context.beginPath();
    var centerX = 100;
    var centerY = 160;
    var radius = 75;
    var startingAngle = 1 * Math.PI;
    var endingAngle = 2 * Math.PI;
    var counterclockwise = false;
    
    var startX = 35;
    var finishX = 270+39*(a-6);
    var yAxis = 220;
    var yOffset = 100;
  
    context.moveTo(startX, yAxis);
    context.bezierCurveTo(startX, yAxis - yOffset, finishX, yAxis - yOffset, finishX, yAxis);
  
    context.lineWidth = 2;
	context.moveTo(finishX + 2, yAxis);
	context.lineTo(finishX - 10, yAxis - 25);
	context.moveTo(finishX + 2, yAxis);
	context.lineTo(finishX - 3, yAxis - 30);
    context.strokeStyle = 'rgb(148, 0, 211)'; 
    context.stroke();
	document.getElementById("text1").style.left = (startX + finishX)/2 -9;
	context.closePath();
};

function drawArc2(){
	var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
	context.beginPath();
    var centerX = 100;
    var centerY = 360;
    var radius = 150;
    var startingAngle = 1 * Math.PI;
    var endingAngle = 2 * Math.PI;
    var counterclockwise = false;
    var startX = 270+39*(a-6);
    var finishX = startX + 39*(b);
    var yAxis = 220;
    var yOffset = 65;

    context.moveTo(startX, yAxis);
    context.bezierCurveTo(startX, yAxis - yOffset, finishX, yAxis - yOffset, finishX, yAxis);
    context.lineWidth = 2;
	context.moveTo(finishX + 2, yAxis);
	context.lineTo(finishX - 15, yAxis - 15);
	context.moveTo(finishX + 2, yAxis);
	context.lineTo(finishX - 1, yAxis - 25);
    context.strokeStyle = 'rgb(148, 0, 211)'; 
	document.getElementById("text2").style.left = (startX + finishX)/2 - 9;
    context.stroke();
	context.closePath();
};

document.getElementById("text1").onkeypress = function(e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
	if (chr == null) return;
	if (chr < '0' || chr > '9') {
        return false;
    }
};
	
document.getElementById("text2").onkeypress = function(e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr < '0' || chr > '9') {
        return false;
    }
};
	
document.getElementById("text3").onkeypress = function(e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr < '0' || chr > '9') {
        return false;
    }
};
	
function getChar(event) {
    if (event.which == null) {
		if (event.keyCode < 32) return null;
			return String.fromCharCode(event.keyCode) // IE
    }
    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
		{
			return String.fromCharCode(event.which) // остальные
		}
    }
    return null; // специальная клавиша
};
	
function upd(q,x, y){
	f1.font = "15px Arial";
	f1.fillStyle = "black";
	f1.fillText(q,x,y);
	f1.clearRect(0, 0, 900, 100);
	f1.font = "35px Arial";
	f1.fillStyle = "black";
	f1.fillText(a+" + "+b+" = ?",350,50);
};
	
function updElse(q) {
	f1.clearRect(0, 0, 900, 100);
	f1.fillStyle = 'orange';
	f1.fillRect(q,20, 25 ,36);
	f1.font = "35px Arial";
	f1.fillStyle = "black";
	f1.fillText(a+" + "+b+" = ?",350,50);
};
	
text1.onblur = function(){
	if (this.value == a)
	{
		document.getElementById("text2").hidden = false;
		drawArc2();
		upd(a,(305+39*(a-6))/2-9,140);
		this.hidden = true;
	}
	else {
		this.style.color = "red";
		updElse(347);		
	}
};
	
text2.onblur = function(){
	if (this.value == b)
	{
		document.getElementById("text2").hidden = true;
		upd(b, 270+39*(a-6 + b/2)-9,160);
		document.getElementById("text3").hidden = false;
		this.hidden = true;
	}
	else {
		this.style.color = "red";
		updElse(407);
	}
};
	
text3.onblur = function(){
	if (this.value == c)
	{
		document.getElementById("text3").hidden = true;
		f1.clearRect(0, 0, 900, 100);
		f1.font = "35px Arial";
		f1.fillStyle = "black";
		f1.fillText(a+" + "+b+" = "+c,350,50);
		alert("Поздравляю! Ты правильно решил пример!");
	}
	else {
		this.style.color = "red";	
	}
};