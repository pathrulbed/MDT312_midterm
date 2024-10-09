window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;

}

function startGame(){
	var numbox = parseInt(document.getElementById('numbox').value);

	if(Number.isInteger(numbox) && (numbox > 0)){
		alert("Ready");
		addBox();
		timeStart();
	}
	else{
		alert("Input Number");
		document.getElementById('numbox').value = " ";
	}
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*10; 
	var x = document.getElementById('clock');
	x.innerHTML = second;
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#layer div");
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		if (allbox.length > 0){
			second--;
			if (second < 0){
				x.innerHTML = 0;
			}
			else{
				x.innerHTML = second;
			}
		}
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		if (allbox.length == 0){
			clearInterval(timer);
			clearScreen();
			alert("You Win! (>w<)");
			document.getElementById('numbox').value = " ";
		}
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		if ((allbox.length > 0)&&(second<0)){
			clearInterval(timer);
			clearScreen();
			alert("You Lose! (TwT)");
			document.getElementById('numbox').value = " ";
		}
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = parseInt(document.getElementById('numbox').value);
	var gameLayer = document.getElementById('layer');
	var colorDrop = document.getElementById('color').value;
	
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square " + colorDrop;
		tempbox.id = "box" + i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
	
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.remove();
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#layer div");

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		allbox[i].remove();
	}
}




