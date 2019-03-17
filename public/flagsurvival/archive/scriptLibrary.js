//define requestAnimFrame in case browser is old
var requestAnimFrame =  window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(callback) {
                        window.setTimeout(callback, 1000 / 1);
                    };
					
//define canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 180;

var gridWidth = 29;
var gridHeight = 15;
var sprtHtControl = canvas.width / gridWidth;

canvas.height = sprtHtControl * gridHeight;

if (window.innerWidth < window.innerHeight)
{
	canvas.height = canvas.height * 2;
}

//images
var img = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var runImage = new Image();
var blockimg = new Image();
var shootImage = new Image();
var frequentImage = new Image();
var healthImage = new Image();
var badGuy = new Image();
var badGuy2 = new Image();
var badGuy3 = new Image();
var breakable = new Image();
var flagImg = new Image();

//declare variables
var direction = "right";
var restartSwitch = 0;
var animateSpeedControl = 0;
var bulControl = 0;
var bulTrigger = 0;
var flagCount = 0;
var bullSpeed = canvas.width * 0.00461;
var bullFreq = 12;
var moveMe = "false";
var roomNum = 1;
var health = 200;
var powerLevel = 0;
var gameover = false;
var spriteSizes = sprtHtControl;
var dirLead = "default";
var keysDown = {};
var keysUp = {};

//declare arrays
var bullets = [];
var badBullets = [];
var blocks = [];
var breakables = [];
var runPower = [];
var shootPower = [];
var frequentPower = [];
var healthPower = [];
var badDudes = [];
var badDudes2 = [];
var badDudes3 = [];

//Cache the high score for a future instance of the game.
// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
	if (localStorage.prevHighScore){
    // Retrieve
		var highScore = localStorage.getItem("prevHighScore");
	}
	else{
		localStorage.setItem("prevHighScore", 0);
		var highScore = localStorage.getItem("prevHighScore");
	}
} else {
    var highScore = powerLevel;
}

//declare randomness
var runPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var runPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
var shootPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var shootPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
var frequentPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var frequentPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);

//load source for all images
img.src = "player_animate_front.png";
img2.src = "player_animate_back.png";
img3.src = "player_animate_right.png";
img4.src = "player_animate_left.png";
blockimg.src = "block.png";
runImage.src = "run.png";
shootImage.src = "shoot.png";
frequentImage.src = "frequent.png";
healthImage.src = "health.png";
badGuy.src = "badguy.png";
badGuy2.src = "badguy2.png";
badGuy3.src = "badguy3.png";
breakable.src = "breakable.png";
flagImg.src = "flag.png";

//define the main player object
var mySprite = {
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
var bulxPos = mySprite.x + (0.444 * spriteSizes);
var bulyPos = mySprite.y + (0.388 * spriteSizes);

//define the green flag
var myFlag = {
	x:-25,
	y:-25,
	width: spriteSizes,
	height: spriteSizes
};
var flagExists = false;

/*This function creates blocks
The location of the blocks is dependent on which room you are in.
*/
function createBlocks(){
	if (roomNum == 1){
//top row of blocks
		for (i = 0; i < canvas.width; i += spriteSizes){
			blocks.push({
			x: i,
			y: spriteSizes,
			width: spriteSizes,
			height: spriteSizes
			},
//bottom row of blocks
			{
			x: i,
			y: canvas.height - (spriteSizes - 1),
			width: spriteSizes,
			height: spriteSizes
			});
		}
//left row of blocks
		for (i = spriteSizes; i < canvas.height; i += spriteSizes){
			blocks.push({
			x: 0,
			y: i,
			width: spriteSizes,
			height: spriteSizes
			},
//right row of blocks
			{
			x: canvas.width - spriteSizes,
			y: i,
			width: spriteSizes,
			height: spriteSizes
			});
		}		
//random blocks
		for (i = 0; i < canvas.width / spriteSizes; i++){
			if (i > 2 && (i < 11 || i > 15) && i < 24){
				blocks.push({
					x: spriteSizes * i,
					y: spriteSizes * 5,
					width: spriteSizes,
					height: spriteSizes
				});
			}
			if (i > 6 && i < 22){
				blocks.push({
					x: spriteSizes * i,
					y: spriteSizes * 9,
					width: spriteSizes,
					height: spriteSizes
				});
			}
		}
	}
}

function createBreakables(){
	if (roomNum == 1){
		for (i = 2; i < 5; i++){
			breakables.push(
			{
				sx: 0,
				sy: 0,
				swidth: 50,
				sheight: 50,
				x: spriteSizes * i,
				y: spriteSizes * 10,
				width: spriteSizes,
				height: spriteSizes			
			});
		}
		
		for (i = 1; i < 6; i++){
			breakables.push(
			{
				sx: 0,
				sy: 0,
				swidth: 50,
				sheight: 50,
				x: spriteSizes * i,
				y: spriteSizes * 11,
				width: spriteSizes,
				height: spriteSizes			
			});
		}
	
		for (i = 1; i < 7; i++){
			breakables.push(
			{
				sx: 0,
				sy: 0,
				swidth: 50,
				sheight: 50,
				x: spriteSizes * i,
				y: spriteSizes * 12,
				width: spriteSizes,
				height: spriteSizes			
			});
		}	
		for (i = 1; i < 27; i++){
			if ((i < 25 && i > 23) || i < 8){
			breakables.push(
			{
				sx: 0,
				sy: 0,
				swidth: 50,
				sheight: 50,
				x: spriteSizes * i,
				y: spriteSizes * 13,
				width: spriteSizes,
				height: spriteSizes			
			});}
		}
		for (i = 3; i < 7; i++){
			breakables.push(
			{
				sx: 0,
				sy: 0,
				swidth: 50,
				sheight: 50,
				x: spriteSizes * i,
				y: spriteSizes * 3,
				width: spriteSizes,
				height: spriteSizes			
			});
		}
	}
}

function createFlag(){
	if (flagExists == false){
			flagLocX = Math.floor((Math.random() * (gridWidth - 2)) + 1);
			flagLocY = Math.floor((Math.random() * (gridHeight - 3)) + 2);
			myFlag.x = spriteSizes * flagLocX;
			myFlag.y = spriteSizes * flagLocY;
			flagCount = 0;
			flagExists = true;
	}
}

function createRunPower(){
	if (runPower.length < 3){
		if (Math.floor((Math.random() * 4000) + 1) == 2500){
			runPowerLocX = Math.floor((Math.random() * (gridWidth - 2)) + 1);
			runPowerLocY = Math.floor((Math.random() * (gridHeight - 3)) + 2);
			runPower.push({
				x: spriteSizes * runPowerLocX,
				y: spriteSizes * runPowerLocY,
				width: spriteSizes,
				height: spriteSizes * 0.65
			});
		}
	}
}

function createShootPower(){
	if (shootPower.length < 3){
		if (Math.floor((Math.random() * 4000) + 1) == 2500){
			shootPowerLocX = Math.floor((Math.random() * (gridWidth - 2)) + 1);
			shootPowerLocY = Math.floor((Math.random() * (gridHeight - 3)) + 2);
			shootPower.push({
				x: spriteSizes * shootPowerLocX,
				y: spriteSizes * shootPowerLocY,
				width: spriteSizes,
				height: spriteSizes * 0.65
			});
		}
	}
}

function createFrequentPower(){
	if (frequentPower.length < 3){
		if (Math.floor((Math.random() * 4000) + 1) == 2500){
			frequentPowerLocX = Math.floor((Math.random() * (gridWidth - 2)) + 1);
			frequentPowerLocY = Math.floor((Math.random() * (gridHeight - 3)) + 2);		
			frequentPower.push({
				x: spriteSizes * frequentPowerLocX,
				y: spriteSizes * frequentPowerLocY,
				width: spriteSizes,
				height: spriteSizes * 0.65
			});
		}
	}
}

function createHealthPower(){
	if (healthPower.length < 3){
		if (Math.floor((Math.random() * 3600) + 1) == 1800){
			healthPowerLocX = Math.floor((Math.random() * (gridWidth - 2)) + 1);
			healthPowerLocY = Math.floor((Math.random() * (gridHeight - 3)) + 2);
			healthPower.push({
				x: spriteSizes * healthPowerLocX,
				y: spriteSizes * healthPowerLocY,
				width: spriteSizes,
				height: spriteSizes * 0.65
			});
		}
	}
}
//function to generate bad guys and add them to arrays
function createBadGuys(){
		var thisChange = Math.floor((Math.random() * 3600) + 1);
		if (thisChange > 1000 && thisChange < 1009 && badDudes.length < 6){
			var badGuyLocX = Math.floor((Math.random() * (gridWidth - 2)) + 1);
			var badGuyLocY = Math.floor((Math.random() * (gridHeight - 3)) + 2);
			var badDirChance = Math.floor(Math.random() * 10, 1);
			var collCondition = false;
			if (badDirChance > 5){
				var badDirStart = "left";
			}
			else{
				var badDirStart = "right";
			}

			for (i in blocks){
				if (testColl((spriteSizes * badGuyLocX), (spriteSizes * badGuyLocY), spriteSizes, spriteSizes, 
					blocks[i].x, blocks[i].y, blocks[i].width, blocks[i].height) == true){
					collCondition = true;
				}
			}
			if (collCondition == false){
				badDudes.push({
					x: spriteSizes * badGuyLocX,
					y: spriteSizes * badGuyLocY,
					width: spriteSizes,
					height: spriteSizes,
					dir: badDirStart,
					time: Date.now() / 1000
				});
			}
		}
		if (thisChange > 1008 && thisChange < 1020 && badDudes2.length < 6){
			var badGuyLocX = Math.floor((Math.random() * (gridWidth - 2)) + 1);
			var badGuyLocY = Math.floor((Math.random() * (gridHeight - 3)) + 2);
			badDudes2.push({
				sx: 0,
				sy: 0,
				swidth: 50,
				sheight: 50,
				x: spriteSizes * badGuyLocX,
				y: spriteSizes * badGuyLocY,
				width: spriteSizes,
				height: spriteSizes
			});
		}
		if (thisChange > 1019 && thisChange < 1030 && badDudes3.length < 6){
			var badGuyLocX = Math.floor((Math.random() * (gridWidth - 2)) + 1);
			var badGuyLocY = Math.floor((Math.random() * (gridHeight - 3)) + 2);
			badDudes3.push({
				sx: 0,
				sy: 0,
				swidth: 50,
				sheight: 50,
				x: spriteSizes * badGuyLocX,
				y: spriteSizes * badGuyLocY,
				width: spriteSizes,
				height: spriteSizes,
				timer: 0
			});
		}
}

function updateBulletPos(z){
	if (z == "front")
	{
		bulxPos = mySprite.x + (0.444 * spriteSizes);
		bulyPos = mySprite.y + (0.388 * spriteSizes);
	}
	if (z == "up")
	{
		bulxPos = mySprite.x + (0.444 * spriteSizes);
		bulyPos = mySprite.y - (0.111 * spriteSizes);
	}
	if (z == "right")
	{
		bulxPos = mySprite.x + (0.944 * spriteSizes);
		bulyPos = mySprite.y + (0.222 * spriteSizes);
	}
	if (z == "left")
	{
		bulxPos = mySprite.x - (0.027 * spriteSizes);
		bulyPos = mySprite.y + (0.222 * spriteSizes);
	}
}

//Input
window.addEventListener('keydown', function(e) {
		keysDown[e.keyCode] = true;
		delete keysUp[e.keyCode];
});
window.addEventListener('keyup', function(e) {
		keysUp[e.keyCode] = true;
		delete keysDown[e.keyCode];
		if ((e.keyCode == 37 && dirLead == "left") || (e.keyCode == 38 && dirLead == "up") || 
			(e.keyCode == 39 && dirLead == "right") || (e.keyCode == 40 && dirLead == "front")){
			dirLead = "default";
		}
});

// touch event handlers
// Set up touch events for mobile, etc
window.addEventListener("touchstart", function (e) {
        mousePos = getTouchPos(canvas, e);
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
  var mouseEvent = new MouseEvent("mouseup", {});
  canvas.dispatchEvent(mouseEvent);
  	delete keysDown[38];
  	delete keysDown[39];
  	delete keysDown[40];
  	delete keysDown[37];
  	delete keysDown[32];
}, false);

// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
  var thisXPos = touchEvent.touches[0].clientX;
  var thisYPos = touchEvent.touches[0].clientY;
  
  if (thisXPos < canvas.width * 0.25 && thisYPos > canvas.height * 0.19 && thisYPos < canvas.height * 0.90)
  {
  	delete keysDown[38];
  	delete keysDown[39];
  	delete keysDown[40];
	delete keysUp[37];
	
	dirLead = "left";
	keysDown[37] = true;
  }
  
   else if (thisXPos > canvas.width * 0.74 && thisYPos > canvas.height * 0.19 && thisYPos < canvas.height * 0.90)
  {
	delete keysDown[37];
  	delete keysDown[38];
 	delete keysDown[40];
	delete keysUp[39];
	
	dirLead = "right";
  	keysDown[39] = true;
  }
  
   else if (thisXPos < canvas.width * 0.74 && thisXPos > canvas.width * 0.25 && thisYPos < canvas.height * 0.35)
  {
	delete keysDown[37];
  	delete keysDown[39];
  	delete keysDown[40];
	delete keysUp[38];
	
	dirLead = "up";
	keysDown[38] = true;
  }
  
   else if (thisXPos < canvas.width * 0.74 && thisXPos > canvas.width * 0.25 && thisYPos > canvas.height * 0.65)
  {
	delete keysDown[37];
  	delete keysDown[38];
 	delete keysDown[39];
	delete keysUp[40];
	
	dirLead = "front";
  	keysDown[40] = true;
  }
  
   else if (thisXPos < canvas.width * 0.74 && thisXPos > canvas.width * 0.25 && thisYPos > canvas.height * 0.35 && thisYPos < canvas.height * 0.65)
  {
  	keysDown[32] = true;
  }
  
}

//Collisions
function dudeLeftColl(dude) {
	for (i = 0; i < blocks.length; i++){
		if ((dude.y + dude.height) >= blocks[i].y + 4 && 
			dude.y <= (blocks[i].y + blocks[i].height) - 4 && 
			dude.x <= (blocks[i].x + blocks[i].width)){
				if (dude.x + dude.width > blocks[i].x + blocks[i].width){
					dude.x = blocks[i].x + blocks[i].width;
					return false;
				}
				else if ((dude.x - mySprite.speed * ((Date.now() - time) / 1000)) + 
					dude.width > blocks[i].x + blocks[i].width){
					dude.x = blocks[i].x + blocks[i].width;
					return false;
				}								
		}
	}
	for (i = 0; i < breakables.length; i++){
		if ((dude.y + dude.height) >= breakables[i].y + 4 && 
			dude.y <= (breakables[i].y + breakables[i].height) - 4 && 
			dude.x <= (breakables[i].x + breakables[i].width)){
				if (dude.x + dude.width > breakables[i].x + breakables[i].width){
					dude.x = breakables[i].x + breakables[i].width;
					return false;
				}
				else if ((dude.x - mySprite.speed * ((Date.now() - time) / 1000)) + 
					dude.width > breakables[i].x + breakables[i].width){
					dude.x = breakables[i].x + breakables[i].width;
					return false;
				}								
		}
	}	
	return true;
}

function dudeRightColl(dude) {
	for (i = 0; i < blocks.length; i++){
		if ((dude.y + dude.height) >= blocks[i].y + 4 && 
			dude.y <= (blocks[i].y + blocks[i].height) - 4 && 
			dude.x + dude.width >= blocks[i].x){
				if (dude.x + dude.width < blocks[i].x + blocks[i].width){
					dude.x = blocks[i].x - dude.width;
					return false;
				}
				else if ((dude.x + mySprite.speed * ((Date.now() - time) / 1000)) + 
					dude.width < blocks[i].x + blocks[i].width){
					dude.x = blocks[i].x - dude.width;
					return false;
				}
		}
	}
	for (i = 0; i < breakables.length; i++){
		if ((dude.y + dude.height) >= breakables[i].y + 4 && 
			dude.y <= (breakables[i].y + breakables[i].height) - 4 && 
			dude.x + dude.width >= breakables[i].x){
				if (dude.x + dude.width < breakables[i].x + breakables[i].width){
					dude.x = breakables[i].x - dude.width;
					return false;
				}
				else if ((dude.x + mySprite.speed * ((Date.now() - time) / 1000)) + 
					dude.width < breakables[i].x + breakables[i].width){
					dude.x = breakables[i].x - dude.width;
					return false;
				}
		}
	}
	return true;
}

function dudeUpColl(dude) {
	for (i = 0; i < blocks.length; i++){
		if ( 
			(dude.x + dude.width) >= blocks[i].x + 4 && 
			dude.x <= (blocks[i].x + blocks[i].width) - 4 && 
			dude.y <= (blocks[i].y + blocks[i].height)){
				if (dude.y > blocks[i].y){
					dude.y = blocks[i].y + blocks[i].height;
					return false;
				}
				else if ((dude.y - mySprite.speed * ((Date.now() - time) / 1000)) > 
					blocks[i].y){
					dude.y = blocks[i].y + blocks[i].height;
					return false;
				}
		}
	}
	for (i = 0; i < breakables.length; i++){
		if ( 
			(dude.x + dude.width) >= breakables[i].x + 4 && 
			dude.x <= (breakables[i].x + breakables[i].width) - 4 && 
			dude.y <= (breakables[i].y + breakables[i].height)){
				if (dude.y > breakables[i].y){
					dude.y = breakables[i].y + breakables[i].height;
					return false;
				}
				else if ((dude.y - mySprite.speed * ((Date.now() - time) / 1000)) > 
					breakables[i].y){
					dude.y = breakables[i].y + breakables[i].height;
					return false;
				}
		}
	}
	return true;
}

function dudeFrontColl(dude) {
	for (i = 0; i < blocks.length; i++){
		if ( 
			(dude.x + dude.width) >= blocks[i].x + 4 && 
			dude.x <= (blocks[i].x + blocks[i].width) - 4 && 
			dude.y + dude.height >= blocks[i].y){
				if (dude.y < blocks[i].y){
					dude.y = blocks[i].y - blocks[i].height;
					return false;
				}
				else if ((dude.y + mySprite.speed * ((Date.now() - time) / 1000)) < blocks[i].y){
					dude.y = blocks[i].y - blocks[i].height;
					return false;
				}
		}
	}
	for (i = 0; i < breakables.length; i++){
		if ( 
			(dude.x + dude.width) >= breakables[i].x + 4 && 
			dude.x <= (breakables[i].x + breakables[i].width) - 4 && 
			dude.y + dude.height >= breakables[i].y){
				if (dude.y < breakables[i].y){
					dude.y = breakables[i].y - breakables[i].height;
					return false;
				}
				else if ((dude.y + mySprite.speed * ((Date.now() - time) / 1000)) < breakables[i].y){
					dude.y = breakables[i].y - breakables[i].height;
					return false;
				}
		}
	}
	return true;
}

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

var time = Date.now();
createBreakables();
createBlocks();
requestAnimFrame(run);