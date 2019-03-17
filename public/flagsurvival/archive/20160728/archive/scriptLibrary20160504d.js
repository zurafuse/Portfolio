//define requestAnimFrame in case browser is old
var requestAnimFrame =  window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(callback) {
                        window.setTimeout(callback, 1000 / 1);
                    };

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var direction = "front";
var img = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var blockimg = new Image();
var speedControl = 0;
var bulControl = 0;
var bulTrigger = 0;
var moveMe = "false";
var bullets = [];

img.src = "player_animate_front.png";
img2.src = "player_animate_back.png";
img3.src = "player_animate_right.png";
img4.src = "player_animate_left.png";
blockimg.src = "block.png";
canvas.width = 960;
canvas.height = 600;

var mySprite = {
	sx: 0,
	sy: 0,
	swidth: 50,
	sheight: 50,
    x: 400,
    y: 188,
    width: 36,
    height: 36,
    speed: 200,
    color: '#007000'
};

var blockSprite = {
    x: 0,
    y: 0,
    width: 36,
    height: 36,
};

var bulxPos = mySprite.x + 16;
var bulyPos = mySprite.y + 14;

function updateBulletPos(z){
	if (z == "front")
	{
		bulxPos = mySprite.x + 16;
		bulyPos = mySprite.y + 14;
	}
	if (z == "up")
	{
		bulxPos = mySprite.x + 16;
		bulyPos = mySprite.y - 4;
	}
	if (z == "right")
	{
		bulxPos = mySprite.x + 34;
		bulyPos = mySprite.y + 8;
	}
	if (z == "left")
	{
		bulxPos = mySprite.x - 1;
		bulyPos = mySprite.y + 8;
	}
}
var keysDown = {};
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});

function showDom(){
		if (!(38 in keysDown) && !(39 in keysDown) && !(40 in keysDown)){
			return "left";
		}
		if (!(38 in keysDown) && !(37 in keysDown) && !(40 in keysDown)){
			return "right";
		}
		if (!(39 in keysDown) && !(37 in keysDown) && !(40 in keysDown)){
			return "up";
		}
		if (!(38 in keysDown) && !(37 in keysDown) && !(39 in keysDown)){
			return "front";
		}		
}

function update(mod) {
	if (32 in keysDown){
		if (bulControl % 9 == 0  || bulTrigger == 0){
			updateBulletPos(direction);
			bullets.push({
				dir: direction,
				x: bulxPos,
				y: bulyPos,
				speed: 5
			});
		bulTrigger = 1;
		}
	}
    if (37 in keysDown) {
		mySprite.x -= mySprite.speed * mod;
		if (showDom() == "left"){
			direction = "left";
		}
		moveMe = "true";
    }
    if (38 in keysDown) {
		mySprite.y -= mySprite.speed * mod;
		if (showDom() == "up"){	
			direction = "up";
		}
		moveMe = "true";
    }
    if (39 in keysDown) {
		mySprite.x += mySprite.speed * mod;
		if (showDom() == "right"){	
			direction = "right";
		}
		moveMe = "true";
    }
    if (40 in keysDown) {
		mySprite.y += mySprite.speed * mod;
		if (showDom() == "front"){
			direction = "front";
		}
		moveMe = "true";
    }
}

function spitBullets(){
	for (i = 0; i < bullets.length; i++)
	{
			if (bullets[i].dir == "front")
			{
				bullets[i].y += bullets[i].speed;
			}
			if (bullets[i].dir == "right")
			{
				bullets[i].x += bullets[i].speed;			
			}
			if (bullets[i].dir == "left")
			{
				bullets[i].x -= bullets[i].speed;			
			}		
			if (bullets[i].dir == "up")
			{
				bullets[i].y -= bullets[i].speed;			
			}	
			ctx.fillStyle = mySprite.color;
			ctx.fillRect(bullets[i].x,bullets[i].y,5,5);
	}
}

function render() {
	
	if (moveMe == "true"){
		if (speedControl % 3 == 0){
			if (mySprite.sx < 350){
				mySprite.sx += 50;
			}else{
				mySprite.sx = 0;
			}
		}
	}else{mySprite.sx = 0;}
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
/* This is another way of clearing the canvas
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = mySprite.color;
*/

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
			
	ctx.drawImage(blockimg, blockSprite.x, blockSprite.y, blockSprite.width, blockSprite.height);
	
spitBullets();
	
	speedControl++;
	if (speedControl > 3600)
		{speedControl = 1;}
	if (bulControl % 300 == 0)
		{bullets.shift();}
	
	bulControl++;
	if (bulControl > 899)
	{
		bulControl = 1;
		bulTrigger = 0;
	}
	
	moveMe = "false";
	
}

function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
	requestAnimFrame(run)
}

var time = Date.now();
requestAnimFrame(run)