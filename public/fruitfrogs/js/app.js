//define requestAnimFrame for each browser. If the browser is too old to comprehend the power of requestAnimationFrame, use setTimeout instead.
var requestAnimFrame =  window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(callback) {
                        window.setTimeout(callback, 1000 / 1);
                    };
					
var bronsters = [];
var frogs = [];
var fruit = [];
var scores = [];

bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 60, 60));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 60, 60));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 60, 60));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 60, 60));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 60, 60));

frogs.push(new frogClass(imageObj.frog, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 75, 75));
frogs.push(new frogClass(imageObj.frog, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 75, 75));
frogs.push(new frogClass(imageObj.frog, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 75, 75));
frogs.push(new frogClass(imageObj.frog, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 75, 75));

fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.pineapple));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.lemon));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.apple));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.strawberry));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.cherry));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.plumb));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.banana));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.blueberry));



function touchMonster(array, Xtouch, Ytouch){
	for (i in array)
	{
		//use offSet to show grace and make touch events more likely
		var offSet = 0.9;
		if (Xtouch > array[i].x * offSet && Xtouch * offSet < array[i].x + array[i].width &&
		Ytouch > array[i].y * offSet && Ytouch * offSet < array[i].y + array[i].height)
		{
			if (array[i].state != "dead")
			{
				array[i].state = "dead";
				addScore(50, Xtouch, Ytouch);
			}
		}
	}
}

function touchFruit(array, Xtouch, Ytouch, isEnd){
	if (isEnd == true)
	{
		for (i in array)
		{
			array[i].isTouched = false;
		}	
	}
	else
	{
		if (Xtouch != undefined && Ytouch != undefined)
		{
			fruitFrogs.touchX = Xtouch;
			fruitFrogs.touchY = Ytouch;
		}
		for (i=0; i < array.length; i++)
		{
			//use offSet to show grace and make touch events more likely
			var offSet = .95;
			if (Xtouch > array[i].x * offSet && Xtouch * offSet < array[i].x + array[i].width &&
			Ytouch > array[i].y * offSet && Ytouch * offSet < array[i].y + array[i].height)
			{
				array[i].isTouched = true;
			}
		}
	}
}

function frogSeeYou(array, Xtouch, Ytouch){
	for (i in array)
	{
		//Let frogs look at direction of touch point
		if (Xtouch < array[i].x - canvas.width * .2 && Ytouch < array[i].y + canvas.height * .33
			&& Ytouch > array[i].y - (canvas.height * 0.2))
		{
			array[i].sy = 200;
		}
		else if (Xtouch > array[i].x + canvas.width * .2 && Ytouch < array[i].y + canvas.height * .33
			&& Ytouch > array[i].y - (canvas.height * 0.2))
		{
			array[i].sy = 100;
		}
		else if (Ytouch < array[i].y)
		{
			array[i].sy = 300;
		}
		else if (Ytouch > array[i].y)
		{
			array[i].sy = 0;
		}
	}
}

function addScore(amount, x, y, monster)
{
	fruitFrogs.score += amount;
	scores.push(new scoreClass(amount, x, y, monster));
}

function resetGame()
{
	imageObj.backgroundPics.number = Math.floor(Math.random() * 10);
	bronsters = [];
	frogs = [];
	fruit = [];	
}