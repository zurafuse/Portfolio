function update(mod) {
//set high score
	if (powerLevel > highScore){
		highScore = powerLevel;
	}
//remove bullets from array if they leave the canvas	
	for (i in bullets){
		if (bullets[i].x > canvas.width + 3 ||
			bullets[i].x < -3 ||
			bullets[i].y > canvas.height + 3 ||
			bullets[i].y < -3){
				bullets.splice(i, 1);
			}
	}
	
	for (i in badBullets){
		if (badBullets[i].x > canvas.width + 3 ||
			badBullets[i].x < -3 ||
			badBullets[i].y > canvas.height + 3 ||
			badBullets[i].y < -3){
				badBullets.splice(i, 1);
			}
	}
	
	if (32 in keysUp){
		bulTrigger = 0;
	}
	if (32 in keysDown){
		if (bulControl % bullFreq == 0  || bulTrigger == 0){
			updateBulletPos(direction);
			bullets.push({
				dir: direction,
				x: bulxPos,
				y: bulyPos,
				width: 0.138 * spriteSizes,
				height: 0.138 * spriteSizes,
			});
		bulTrigger = 1;
		}
	}
    if (37 in keysDown) {
		if (dudeLeftColl(mySprite) == true){
			if (dirLead == "left" || dirLead == "default"){
				mySprite.x -= mySprite.speed * mod;
				direction = "left";
				dirLead = "left";
			}
		}

		moveMe = "true";
    }
    if (38 in keysDown) {
		if (dudeUpColl(mySprite) == true){
			if (dirLead == "up" || dirLead == "default"){
				direction = "up";
				mySprite.y -= mySprite.speed * mod;
				dirLead = "up";
			}
		}
		moveMe = "true";
    }
    if (39 in keysDown) {
		if (dudeRightColl(mySprite) == true){
			if (dirLead == "right" || dirLead == "default"){
				direction = "right";
				mySprite.x += mySprite.speed * mod;
				dirLead = "right";
			}
		}
		moveMe = "true";
    }
    if (40 in keysDown) {
		if (dudeFrontColl(mySprite) == true){
			if (dirLead == "front" || dirLead == "default"){
				direction = "front";
				mySprite.y += mySprite.speed * mod;
				dirLead = "front";
			}
		}

		moveMe = "true";
    }
//badDudes movement
	for (i in badDudes){	
		for (j in blocks){
			if (testColl(badDudes[i].x, badDudes[i].y, badDudes[i].width, badDudes[i].height, 
			blocks[j].x, blocks[j].y, blocks[j].width, blocks[j].height)){
				if (badDudes[i].dir == "left"){
					badDudes[i].x += 2;
					badDudes[i].dir = "right";
				}
				else{
					badDudes[i].x -= 2;
					badDudes[i].dir = "left";
				}
			}
		}
		if (badDudes[i].dir == "right"){
			badDudes[i].x++;
		}
		else{
			badDudes[i].x--;
		}
		if (badDudes[i].x > canvas.width + 15 || badDudes[i].x < -15){
			badDudes.splice(i, 1);
		}
	}	
//badDudes2 AI
	for (i in badDudes2){
		if (badDudes2[i].x > mySprite.x + (mySprite.width - 4)){
			badDudes2[i].x--;
		}
		if (badDudes2[i].x + badDudes2[i].width < mySprite.x + 4){
			badDudes2[i].x++;
		}
		if (badDudes2[i].y > mySprite.y + (mySprite.height - 4)){
			badDudes2[i].y--;
		}
		if (badDudes2[i].y + badDudes2[i].width < mySprite.y + 4){
			badDudes2[i].y++;
		}
	}
	
//badDudes3 AI
	for (i in badDudes3){
		if (badDudes3[i].timer < 190){
			if (badDudes3[i].x > mySprite.x + (mySprite.width - 4)){
				badDudes3[i].x--;
			}
			if (badDudes3[i].x + badDudes3[i].width < mySprite.x + 4){
				badDudes3[i].x++;
			}
			if (badDudes3[i].y > mySprite.y + (mySprite.height - 4)){
				badDudes3[i].y--;
			}
			if (badDudes3[i].y + badDudes3[i].width < mySprite.y + 4){
				badDudes3[i].y++;
			}
		}
		else if (badDudes3[i].timer == 265){
			badBullets.push({
				dir: "up",
				x: badDudes3[i].x + (spriteSizes * 0.2),
				y: badDudes3[i].y,
				width: 0.138 * spriteSizes,
				height: 0.138 * spriteSizes
			});
			badBullets.push({
				dir: "front",
				x: badDudes3[i].x + (spriteSizes * 0.2),
				y: badDudes3[i].y + spriteSizes,
				width: 0.138 * spriteSizes,
				height: 0.138 * spriteSizes
			});
			badBullets.push({
				dir: "right",
				x: badDudes3[i].x + spriteSizes,
				y: badDudes3[i].y + (spriteSizes * 0.2),
				width: 0.138 * spriteSizes,
				height: 0.138 * spriteSizes
			});
			badBullets.push({
				dir: "left",
				x: badDudes3[i].x,
				y: badDudes3[i].y + (spriteSizes * 0.2),
				width: 0.138 * spriteSizes,
				height: 0.138 * spriteSizes
			});
		}
		else if (badDudes3[i].timer > 320){
			badDudes3[i].timer = 0;
		}
		badDudes3[i].timer++;
	}
	
//If the Game is Over, RESTART
	if (gameover == true){
		health = 0;
		powerLevel = 0;
		bullets = [];
		badBullets = [];
		flagExists = false;
		if (restartSwitch == 0){
			restartSwitch = 1;
			setTimeout(restart, 4000);
		}
	}
}

function restart(){
//declare variables
	direction = "right";
	restartSwitch = 0;
	animateSpeedControl = 0;
	bulControl = 0;
	bulTrigger = 0;
	bullSpeed = canvas.width * 0.00461;
	bullFreq = 12;
	moveMe = "false";
	roomNum = 1;
	health = 200;
	powerLevel = 0;
	gameover = false;
	dirLead = "default";
	keysDown = {};
	keysUp = {};
//declare arrays
	runPower = [];
	shootPower = [];
	frequentPower = [];
	healthPower = [];
	badDudes = [];
	badDudes2 = [];
//declare randomness
	runPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
	runPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
	shootPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
	shootPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
	frequentPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
	frequentPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
//define the main player object
	mySprite = {
		sx: 0,
		sy: 0,
		swidth: 50,
		sheight: 50,
		x: (canvas.width / 2) - spriteSizes,
		y: (canvas.height / 2) - spriteSizes,
		width: spriteSizes,
		height: spriteSizes,
		speed: canvas.width * 0.134,
		color: '#007000'
	};
	bulxPos = mySprite.x + (0.444 * spriteSizes);
	bulyPos = mySprite.y + (0.388 * spriteSizes);
}

function spitBullets(){
	for (i = 0; i < bullets.length; i++)
	{
			if (bullets[i].dir == "front")
			{
				bullets[i].y += bullSpeed;
			}
			if (bullets[i].dir == "right")
			{
				bullets[i].x += bullSpeed;			
			}
			if (bullets[i].dir == "left")
			{
				bullets[i].x -= bullSpeed;			
			}		
			if (bullets[i].dir == "up")
			{
				bullets[i].y -= bullSpeed;			
			}	
			ctx.fillStyle = mySprite.color;
			ctx.fillRect(bullets[i].x,bullets[i].y,bullets[i].width,bullets[i].height);
	}
}

function spitBadBullets(){
	for (i = 0; i < badBullets.length; i++)
	{
			if (badBullets[i].dir == "front")
			{
				badBullets[i].y += bullSpeed;
			}
			if (badBullets[i].dir == "right")
			{
				badBullets[i].x += bullSpeed;			
			}
			if (badBullets[i].dir == "left")
			{
				badBullets[i].x -= bullSpeed;			
			}		
			if (badBullets[i].dir == "up")
			{
				badBullets[i].y -= bullSpeed;			
			}	
			ctx.fillStyle = "blue";
			ctx.fillRect(badBullets[i].x, badBullets[i].y, badBullets[i].width, badBullets[i].height);
	}
}

function render() {
//control player animation	
	if (moveMe == "true"){
		if (animateSpeedControl % 3 == 0){
			if (mySprite.sx < 350){
				mySprite.sx += 50;
			}else{
				mySprite.sx = 0;
			}
		}
	}else{mySprite.sx = 0;}
//control bad guy 2 animation	
	if (animateSpeedControl % 3 == 0){
		for (i in badDudes2){
			if (badDudes2[i].sx < 350){
				badDudes2[i].sx += 50;
			}else{
				badDudes2[i].sx = 0;
			}
		}
	}
//control bad guy 3 animation	
	if (animateSpeedControl % 3 == 0){
		for (i in badDudes3){
			if (badDudes3[i].sx < 350){
				badDudes3[i].sx += 50;
			}else{
				badDudes3[i].sx = 0;
			}
		}
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);
/* This is another way of clearing the canvas
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = mySprite.color;
*/
	if (gameover == false){
		if (direction == "front"){
			ctx.drawImage(img, mySprite.sx, mySprite.sy, mySprite.swidth, mySprite.sheight, mySprite.x, mySprite.y, mySprite.width, mySprite.height);
		}
		if (direction == "up"){
			ctx.drawImage(img2, mySprite.sx, mySprite.sy, mySprite.swidth, mySprite.sheight, mySprite.x, mySprite.y, mySprite.width, mySprite.height);
		}
		if (direction == "right"){
			ctx.drawImage(img3, mySprite.sx, mySprite.sy, mySprite.swidth, mySprite.sheight, mySprite.x, mySprite.y, mySprite.width, mySprite.height);
		}	
		if (direction == "left"){
			ctx.drawImage(img4, mySprite.sx, mySprite.sy, mySprite.swidth, mySprite.sheight, mySprite.x, mySprite.y, mySprite.width, mySprite.height);
		}
	}
	
	for (i = 0; i < blocks.length; i++){
		ctx.drawImage(blockimg, blocks[i].x, blocks[i].y, blocks[i].width, blocks[i].height);
	}
	
	for (i = 0; i < breakables.length; i++){
		ctx.drawImage(breakable, breakables[i].sx, breakables[i].sy, breakables[i].swidth, breakables[i].sheight, breakables[i].x, breakables[i].y, breakables[i].width, breakables[i].height);
	}
	
	for (i = 0; i < runPower.length; i++){
		ctx.drawImage(runImage, runPower[i].x, runPower[i].y, runPower[i].width, runPower[i].height);
	}
	
	for (i = 0; i < shootPower.length; i++){
		ctx.drawImage(shootImage, shootPower[i].x, shootPower[i].y, shootPower[i].width, shootPower[i].height);
	}
	
	for (i = 0; i < frequentPower.length; i++){
		ctx.drawImage(frequentImage, frequentPower[i].x, frequentPower[i].y, frequentPower[i].width, frequentPower[i].height);
	}
	
	for (i = 0; i < healthPower.length; i++){
		ctx.drawImage(healthImage, healthPower[i].x, healthPower[i].y, healthPower[i].width, healthPower[i].height);
	}
	
	for (i in badDudes){
		ctx.drawImage(badGuy, badDudes[i].x, badDudes[i].y, badDudes[i].width, badDudes[i].height);
	}
	
	for (i in badDudes2){
		ctx.drawImage(badGuy2, badDudes2[i].sx, badDudes2[i].sy, badDudes2[i].swidth, badDudes2[i].sheight, badDudes2[i].x, badDudes2[i].y, badDudes2[i].width, badDudes2[i].height);
	}
	
	for (i in badDudes3){
		ctx.drawImage(badGuy3, badDudes3[i].sx, badDudes3[i].sy, badDudes3[i].swidth, badDudes3[i].sheight, badDudes3[i].x, badDudes3[i].y, badDudes3[i].width, badDudes3[i].height);
	}
	
	ctx.drawImage(flagImg, myFlag.x, myFlag.y, myFlag.width, myFlag.height);
	
	ctx.font = canvas.width * 0.017  + "px Arial";
	ctx.fillStyle = "black";
	ctx.fillText("Health: " + health,spriteSizes * 0.5,spriteSizes / 1.6);
	ctx.fillText("Power Level: " + powerLevel, spriteSizes * (gridWidth * 0.18), spriteSizes / 1.6);
	ctx.fillText("High Score: " + highScore, spriteSizes * (gridWidth * 0.54), spriteSizes / 1.6);	
	
	if (gameover == true){
		ctx.font = canvas.width * 0.04  + "px Arial";
		ctx.fillText("GAME OVER", spriteSizes * (gridWidth * 0.4), spriteSizes * (gridHeight * 0.5));
	}
	
	if (isMobile == true)
	{
		FlagUI.draw();
	}

	spitBullets();
	spitBadBullets();
		
	animateSpeedControl++;
	if (animateSpeedControl > 3600)
		{animateSpeedControl = 1;}
	
	flagCount++;
	if (flagCount > 1200){
		flagCount = 0;
		flagExists = false;
	}
	
	bulControl++;
	if (bulControl > 899)
	{
		bulControl = 1;
		bulTrigger = 0;
	}
	
	moveMe = "false";
	
}
//define collision function
function testColl(aX, aY, aWidth, aHeight, bX, bY, bWidth, bHeight) {
	return ((aX + aWidth) >= bX && aX <= (bX + bWidth) &&
		(aY + aHeight) >= bY && aY <= (bY + bHeight));
}

function bulletDestroy(){
	for (i = 0; i < bullets.length; i++){
		for (k = 0; k < badDudes.length; k++){
			if (testColl(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, badDudes[k].x, badDudes[k].y, badDudes[k].width, badDudes[k].height) == true){
				bullets.splice(i, 1);
				badDudes.splice(k, 1);
				if (gameover == false){
					powerLevel += 20;
				}
				return;
			}			
		}
		for (k = 0; k < badDudes2.length; k++){
			if (testColl(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, badDudes2[k].x, badDudes2[k].y, badDudes2[k].width, badDudes2[k].height) == true){
				bullets.splice(i, 1);
				badDudes2.splice(k, 1);
				if (gameover == false){
					powerLevel += 20;
				}
				return;
			}			
		}
		
		for (k = 0; k < badDudes3.length; k++){
			if (testColl(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, badDudes3[k].x, badDudes3[k].y, badDudes3[k].width, badDudes3[k].height) == true){
				bullets.splice(i, 1);
				badDudes3.splice(k, 1);
				if (gameover == false){
					powerLevel += 20;
				}
				return;
			}			
		}
		
		for (j = 0; j < blocks.length; j++){
			if (testColl(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, blocks[j].x, 
			blocks[j].y, blocks[j].width, blocks[j].height) == true){
				bullets.splice(i, 1);
				return;
			}
		}
		
		for (l = 0; l < breakables.length; l++){
			if (testColl(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, breakables[l].x, 
			breakables[l].y, breakables[l].width, breakables[l].height) == true){
				if (breakables[l].sx < 350){
					breakables[l].sx += 50;
					if (gameover == false){
						powerLevel += 5;
					}
				}
				else{
					var thisBreakTest = Math.floor((Math.random() * 9) + 1);

					if (thisBreakTest == 2){
						runPower.push({
							x: breakables[l].x,
							y: breakables[l].y,
							width: spriteSizes,
							height: spriteSizes
						});
					}
					else if (thisBreakTest == 3){
						shootPower.push({
							x: breakables[l].x,
							y: breakables[l].y,
							width: spriteSizes,
							height: spriteSizes
						});
					}
					else if (thisBreakTest == 4){
						frequentPower.push({
							x: breakables[l].x,
							y: breakables[l].y,
							width: spriteSizes,
							height: spriteSizes
						});
					}
					else if (thisBreakTest == 1){
						healthPower.push({
							x: breakables[l].x,
							y: breakables[l].y,
							width: spriteSizes,
							height: spriteSizes
						});
					}
					if (gameover == false){
						powerLevel += 20;
					}
					breakables.splice(l, 1);
				}
				bullets.splice(i, 1);
				return;
			}
		}
		
	}	
}

function runDestroy(){
	for (i in runPower){
		if (testColl(mySprite.x, mySprite.y, mySprite.width, mySprite.height, runPower[i].x, runPower[i].y, 
		runPower[i].width, runPower[i].height) == true){
			runPower.splice(i, 1);
			if (gameover == false){
				powerLevel += 10;
			}
			if (mySprite.speed < canvas.width * 0.21)
				{mySprite.speed += (canvas.width * 0.0134);}
			if (mySprite.speed > canvas.width * 0.2)
				{mySprite.speed = canvas.width * 0.2;}
			break;
		}		
	}
}

function shootDestroy(){
	for (i in shootPower){
		if (testColl(mySprite.x, mySprite.y, mySprite.width, mySprite.height, shootPower[i].x, shootPower[i].y, 
			shootPower[i].width, shootPower[i].height) == true){
			shootPower.splice(i, 1);
			if (gameover == false){
				powerLevel += 10;
			}
			if (bullSpeed < 100)
				{bullSpeed += 3;}
			break;
		}		
	}
}

function frequentDestroy(){
	for (i in frequentPower){
		if (testColl(mySprite.x, mySprite.y, mySprite.width, mySprite.height, frequentPower[i].x, frequentPower[i].y, 
			frequentPower[i].width, frequentPower[i].height) == true){
			frequentPower.splice(i, 1);
			if (gameover == false){
				powerLevel += 10;
			}
			bullFreq -= 3;
			if (bullFreq < 2)
			{
				bullFreq = 2;
			}
			break;
		}		
	}
}

function flagDestroy(){
		if (testColl(mySprite.x, mySprite.y, mySprite.width, mySprite.height, myFlag.x, myFlag.y, 
			myFlag.width, myFlag.height) == true){
			flagExists = false;
			if (gameover == false){
				powerLevel += 200;
			}
		}		
}

function healthDestroy(){
	for (i in healthPower){
		if (testColl(mySprite.x, mySprite.y, mySprite.width, mySprite.height, healthPower[i].x, healthPower[i].y, 
			healthPower[i].width, healthPower[i].height) == true){
			healthPower.splice(i, 1);
			if (health < 301){
				health += 50;
			}
			if (health > 300){
				health = 300;
			}
			if (gameover == false){
				powerLevel += 10;
			}
			if (gameover == true){
				health = 0;
			}
			break;
		}		
	}
}

function damageTaken(){
	for (i in badDudes){
		if (testColl(mySprite.x, mySprite.y, mySprite.width, mySprite.height, badDudes[i].x, badDudes[i].y, 
			badDudes[i].width, badDudes[i].height) == true){
			badDudes.splice(i, 1);
			health -= 30;
			if (health < 1){
				gameover = true;
				health = 0;
			}
			break;
		}		
	}
	for (i in badDudes2){
		if (testColl(mySprite.x, mySprite.y, mySprite.width, mySprite.height, badDudes2[i].x, badDudes2[i].y, 
			badDudes2[i].width, badDudes2[i].height) == true){
			badDudes2.splice(i, 1);
			health -= 30;
			if (health < 1){
				gameover = true;
				health = 0;
			}
			break;
		}		
	}
	for (i in badDudes3){
		if (testColl(mySprite.x, mySprite.y, mySprite.width, mySprite.height, badDudes3[i].x, badDudes3[i].y, 
			badDudes3[i].width, badDudes3[i].height) == true){
			badDudes3.splice(i, 1);
			health -= 30;
			if (health < 1){
				gameover = true;
				health = 0;
			}
			break;
		}		
	}	
	for (i in badBullets){
		if (testColl(mySprite.x, mySprite.y, mySprite.width, mySprite.height, badBullets[i].x, badBullets[i].y, 
			badBullets[i].width, badBullets[i].height) == true){
			badBullets.splice(i, 1);
			health -= 30;
			if (health < 1){
				gameover = true;
				health = 0;
			}
			break;
		}		
	}	
}

function run() {
	if (!(window.innerWidth < window.innerHeight))
	{
		if (canvasBad == true)
		{
			canvasBad = false;
			canvas.width = window.innerWidth * 0.95;
			canvas.height = window.innerHeight * 0.95;
		}
		update((Date.now() - time) / 1000);
		render();
		time = Date.now();
		createRunPower();
		createShootPower();
		createFrequentPower();
		createHealthPower();
		createFlag();
		runDestroy();
		shootDestroy();
		frequentDestroy();
		healthDestroy();
		bulletDestroy();
		flagDestroy();
		createBadGuys();
		damageTaken();
		requestAnimFrame(run);
		localStorage.setItem("prevHighScore", highScore);
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
		ctx.drawImage(rotateImg, canvas.width * .1, canvas.height * .4, canvas.width * .85, canvas.height * .4);
		time = Date.now();
		requestAnimFrame(run);
	}
}

var time = Date.now();
createBreakables();
createBlocks();
requestAnimFrame(run);