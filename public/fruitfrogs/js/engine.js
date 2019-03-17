function update(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = imageObj.backgroundPics.colors[imageObj.backgroundPics.number];
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	if (fruit.length == 0)
	{
		resetGame();
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
	}
	for (i = 0; i < bronsters.length; i++)
	{
		bronsters[i].update();
		bronsters[i].draw();
		if (bronsters[i].state == "dead")
		{
			if (bronsters[i].diecounter > 20)
			{
				bronsters.splice(i, 1);
			}
		}
	}
	
	for (i = 0; i < frogs.length; i++)
	{
		frogs[i].update();
		frogs[i].draw();
	}
	
	for (i = 0; i < fruit.length; i++)
	{
		fruit[i].update();
		fruit[i].draw();
		if (fruit[i].state == "delete")
		{
			fruit.splice(i, 1);
		}
	}
	
	for (i = 0; i < scores.length; i++)
	{
		scores[i].update();
		if (scores[i].alive == false)
		{
			scores.splice(i, 1);
		}
	}
	
	ctx.font="45pt Arial";
	ctx.strokeStyle = "#000";
	ctx.lineWidth = 3;
	ctx.strokeText("Score: " + fruitFrogs.score, canvas.width * .45, canvas.height * .085);
	ctx.font = "45pt Arial";
	ctx.fillStyle = "white";
	ctx.fillText("Score: " + fruitFrogs.score, canvas.width * .45, canvas.height * .085);
	
	requestAnimFrame(update);
}

update();