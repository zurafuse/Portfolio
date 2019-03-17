function update(){
	if (!(window.innerWidth < window.innerHeight))
	{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		updateControls(keysDown);
		drawBackgrounds();
		drawBlocks();
		drawGems();
		drawHearts();
		drawShower();
		drawToilets();
		drawBullets();
		if (superToilet.exist == true && room == superToilet.room){superToilet.update()}
		if (gemLock.exist == true && room == gemLock.room){gemLock.update()}
		if (gemLock2.exist == true && room == gemLock2.room){gemLock2.update()}
		if (room == octaforce.room){octaforce.update()}
		if (weapon.exist == true && room == weapon.room){weapon.update()}
		if (hammer.exist == true && room == hammer.room){hammer.update()}
		if (plunger.exist == true && room == plunger.room){plunger.update()}
		if (boat.exist == true && room == boat.room){boat.update()}
		if (key.exist == true && room == key.room){key.update()}
		if (dir.lead != "down"){sword.update();};
		player.update();
		if (dir.lead == "down"){sword.update();}
		crayonUI.draw();
		//isDead?
		if (player.health <= 0)
		{
			restart();
		}
		if (isCollision(player.x, player.y, player.width, player.height, octaforce.x, octaforce.y,
			octaforce.width, octaforce.height) == true && room == octaforce.room)
		{
			restart();
		}
		if (octaforce.message == true)
		{
			ctx.font = canvas.width * 0.035  + "px Arial";
			ctx.fillStyle = "black";
			ctx.fillText("CONGRATULATIONS! BEHOLD THE OCTAFORCE!", sprtHtControl * 3, sprtHtControl * 2.5);
		}
		requestAnimFrame(update);
	}
	else
	{
		canvasBad = true;
		canvas.width = window.innerWidth * 0.95;
		canvas.height = window.innerHeight * 0.95;
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "white";
		ctx.font = canvas.width * 0.12  + "px Verdana";
		ctx.fillText("PAUSED", canvas.width * .2, canvas.height * .1);
		ctx.font = canvas.width * 0.08  + "px Verdana";
		ctx.fillText("Please rotate Device", canvas.width * .05, canvas.height * .2);
		ctx.fillText("to continue playing.", canvas.width * .05, canvas.height * .3);
		ctx.drawImage(crayonImages.rotate, canvas.width * .1, canvas.height * .4, canvas.width * .85, canvas.height * .4);
		requestAnimFrame(update);
	}
}

requestAnimFrame(update);