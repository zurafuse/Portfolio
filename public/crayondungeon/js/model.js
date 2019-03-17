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
/*var newElement = document.createElement("canvas");
newElement.id = "canvas";
document.getElementsByClassName("wrapper")[0].append(newElement);*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 180;
if (window.innerWidth < 600)
{
	canvas.width = window.innerWidth * .85;	
}

var keysUp = [];
var keysDown = [];
var dir = {
	right: false,
	left: false,
	up: false,
	down: false,
	fire: false,
	lead: "down"
}
//determine if the screen is on a mobile devices
var crayon = {
	isMobile: true,
	canvasBad: false
};

var gridWidth = 29;
var gridHeight = 15;
var sprtHtControl = canvas.width / gridWidth;

canvas.height = sprtHtControl * gridHeight;

if (window.innerWidth < window.innerHeight)
{
	canvas.height = canvas.height * 2;
}

var crayonImages = {
	player: new Image(),
	shoot: new Image(),
	sword: new Image(),
	hammer: new Image(),
	key: new Image(),
	boat: new Image(),
	plunger: new Image(),
	rotate: new Image(),
	backgrounds: new Image(),
	grass: new Image(),
	supertoilet: new Image(),
	gem: new Image(),
	gemLock: new Image(),
	heart: new Image(),
	octaforce: new Image(),
	coldshower: new Image(),
	toilets: new Image(),
	run: function(){
		this.player.src = "images/player.png";
		this.shoot.src = "images/shoot.png";
		this.sword.src = "images/sword.png";
		this.hammer.src = "images/hammer.png";
		this.key.src = "images/key.png";
		this.boat.src = "images/boat.png";
		this.plunger.src = "images/plunger.png";
		this.rotate.src = "images/rotate.png";
		this.backgrounds.src = "images/object_tile.png";
		this.grass.src = "images/grass.png";
		this.supertoilet.src = "images/supertoilet.png";
		this.gem.src = "images/gem.png";
		this.gemLock.src = "images/gemLock.png";
		this.heart.src = "images/heart.png";
		this.octaforce.src = "images/octaforce.png";
		this.coldshower.src = "images/cold_shower.png";
		this.toilets.src = "images/toilets.png";
	}
};
crayonImages.run();

var gemClass = function(x, y, roomNum){
	this.img = crayonImages.gem;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 100;
	this.sheight = 100;
	this.x = x * sprtHtControl;
	this.y = y * sprtHtControl;
	this.width = sprtHtControl * .85;
	this.height = sprtHtControl * .85;
	this.room = roomNum;
	this.update = function(){
		this.sx += 100;
		if (this.sx > 500)
		{
			this.sx = 0;
		}
	};
};

var heartClass = function(x, y, room){
	this.img = crayonImages.heart;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 100;
	this.sheight = 100;
	this.x = x * sprtHtControl;
	this.y = y * sprtHtControl;
	this.width = sprtHtControl * .85;
	this.height = sprtHtControl * .85;
	this.room = room;
};

var blockClass = function(img, sx, sy, swidth, sheight, x, y, width, height, type){
	this.img = img;
	this.sx = sx;
	this.sy = sy;
	this.swidth = swidth;
	this.sheight = sheight;
	this.x = x * sprtHtControl;
	this.y = y * sprtHtControl;
	this.width = width;
	this.height = height;
	this.type = type;
};

var showerClass = function(x, y){
	this.img = crayonImages.coldshower;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 80;
	this.sheight = 144;
	this.x = x * sprtHtControl;
	this.y = y * sprtHtControl;
	this.width = sprtHtControl * 1.3;
	this.height = sprtHtControl * 2;
	this.counter = 0;
	this.bulletCount = 0;
	this.dir = "right";
	this.update = function(){
		if (this.dir == "left")
		{
			this.sy = 0;
		}
		else
		{
			this.sy = 145;
		}
		//use counter to handle animations that should be slower than 60 fps
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
		this.counter++;
		if (this.counter > 3)
		{
			this.counter = 0;
		}
		if (this.counter % 3 == 0)
		{
			this.sx += 80
			if (this.sx >= 560)
			{
				this.sx = 0;
			}
		}
		//damage player
		if (isCollision(this.x, this.y, this.width, this.height, player.x, player.y,
			player.width, player.height) == true)
		{
			player.health--;		
		}
		//face direction of player.
		if (player.x > this.x)
		{
			this.dir = "right";
		}
		else
		{
			this.dir = "left";		
		}
		if (this.y < player.y + player.height && this.y + this.height > player.y)
		{
			if (this.bulletCount == 0)
			{
				if (this.dir == "right")
				{
					bullets.push(new bulletClass(this.x + this.width, this.y, this.dir));
				}
				else
				{
					bullets.push(new bulletClass(this.x, this.y, this.dir));
				}
			}
			this.bulletCount++;
			if (this.bulletCount > 25)
			{
				this.bulletCount = 0;
			}
		}
	};
};

var toiletClass = function(x, y, dir){
	this.img = crayonImages.toilets;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
	this.x = x * sprtHtControl;
	this.y = y * sprtHtControl;
	this.width = sprtHtControl;
	this.height = sprtHtControl;
	this.counter = 0;
	this.speed = sprtHtControl * .06;
	this.dir = dir;
	this.update = function(){
		if (this.dir == "left")
		{
			this.sy = 51;
		}
		else
		{
			this.sy = 0;
		}
		//use counter to handle animations that should be slower than 60 fps
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
		this.counter++;
		if (this.counter > 3)
		{
			this.counter = 0;
		}
		if (this.counter % 3 == 0)
		{
			this.sx += 50
			if (this.sx >= 200)
			{
				this.sx = 0;
			}
		}
		//damage player
		if (isCollision(this.x, this.y, this.width, this.height, player.x, player.y,
			player.width, player.height) == true)
		{
			player.health--;		
		}
		//move around
		if (this.dir == "left")
		{
			this.x -= this.speed;
		}
		else
		{
			this.x += this.speed;
		}
		//if toilet hits a block, change course.
		for (i in blocks)
		{
		if (isCollision(this.x, this.y, this.width, this.height, blocks[i].x, blocks[i].y,
			blocks[i].width, blocks[i].height) == true)
			{
				if (this.dir == "left")
				{
					this.dir = "right";
				}
				else
				{
					this.dir = "left";
				}
			}
		}
		//if a toilet walks off the screen, reverse course.
		if (this.x < 0)
		{
			this.dir = "right";
		}
		if (this.x + this.width > canvas.width)
		{
			this.dir = "left";
		}
	};
};

var bulletClass = function(x, y, dir){
	this.x = x;
	this.y = y + (sprtHtControl * .28);
	this.width = sprtHtControl * .4;
	this.height = sprtHtControl * .13;
	this.color = "blue";
	this.speed = sprtHtControl * .1;
	this.update = function(){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.width,this.height);
		if (dir == "left")
		{
			this.x-= this.speed;
		}
		else
		{
			this.x+= this.speed;
		}
		//to save memory, remove bullet from array if it goes off the screen.
		if (this.x < 0 || this.x > canvas.width)
		{
			bullets.splice(i,1)
		}
		//damage player
		if (isCollision(this.x, this.y, this.width, this.height, player.x, player.y,
			player.width, player.height) == true)
		{
			player.health-= 10;
			bullets.splice(i,1);
		}		
	};
};

var gemLockClass = function(x, y, roomNum){
	this.x = sprtHtControl * x;
	this.y =  sprtHtControl * y;
	this.width =  sprtHtControl * 2;
	this.height =  sprtHtControl * 2;
	this.sx =  0;
	this.sy =  0;
	this.swidth = 100;
	this.sheight = 100;
	this.room = roomNum;
	this.exist = true;
	this.img = crayonImages.gemLock;
	this.update = function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			if (gems.length == 0)
			{
				this.exist = false;
			}
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	};		
};

var gemLock = new gemLockClass(4.5, 2, 30);
var gemLock2 = new gemLockClass(0, 5, 6);

var superToilet = {
	x: sprtHtControl * 1,
	y:  sprtHtControl * 6,
	width:  sprtHtControl * 2.5,
	height:  sprtHtControl * 2.5,
	sx:  0,
	sy:  0,
	swidth:  150,
	sheight:  150,
	exist: true,
	room: 5,
	img: crayonImages.supertoilet,
	update: function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			if (player.plunger == true)
			{
				this.exist = false;
			}
		}
		if (isCollision(this.x, this.y, this.width, this.height,
			sword.x, sword.y, sword.width, sword.height) == true)
		{
			if (player.plunger == true)
			{
				this.exist = false;
			}
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
}

var octaforce = {
	x: sprtHtControl * 10,
	y:  sprtHtControl * 6,
	width:  sprtHtControl * 3,
	height:  sprtHtControl * 3,
	sx:  0,
	sy:  0,
	swidth:  100,
	sheight:  100,
	exist: true,
	message: false,
	room: 4,
	img: crayonImages.octaforce,
	update: function(){
		this.sx += 100;
		if (this.sx > 501)
		{
			this.sx = 0;
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
}

var weapon = {
	x: sprtHtControl * 13.9,
	y:  sprtHtControl * 4.5,
	width:  sprtHtControl * 1.3,
	height:  sprtHtControl * 1.3,
	sx:  0,
	sy:  0,
	swidth:  24,
	sheight:  41,
	exist: true,
	room: 13,
	img: crayonImages.sword,
	update: function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			player.sword = true;
			this.exist = false;
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
}

var hammer = {
	x: sprtHtControl * 12,
	y:  sprtHtControl * 8,
	width:  sprtHtControl,
	height:  sprtHtControl,
	sx:  0,
	sy:  0,
	room: 37,
	swidth:  45,
	sheight:  60,
	exist: true,
	img: crayonImages.hammer,
	update: function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			player.hammer = true;
			this.exist = false;
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
};

var key = {
	x: sprtHtControl * 21,
	y:  sprtHtControl * 12,
	width:  sprtHtControl,
	height:  sprtHtControl * .6,
	sx:  0,
	sy:  0,
	swidth:  87,
	sheight:  38,
	exist: true,
	room: 3,
	img: crayonImages.key,
	update: function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			player.key = true;
			this.exist = false;
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
};

var plunger = {
	x: sprtHtControl * 2,
	y:  sprtHtControl * 2,
	width:  sprtHtControl,
	height:  sprtHtControl,
	sx:  45,
	sy:  0,
	swidth:  44,
	sheight:  60,
	exist: true,
	room: 30,
	img: crayonImages.plunger,
	touchPlayer: function(){
		sword.img = crayonImages.plunger;
		sword.swidth = 44;
		sword.sheight = 60;
	},
	update: function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			player.plunger = true;
			this.exist = false;
			this.touchPlayer();
			player.sword = true;
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
};

var boat = {
	x: sprtHtControl * 2,
	y:  sprtHtControl * 11,
	width:  sprtHtControl * 2,
	height:  sprtHtControl * 1.5,
	sx:  0,
	sy:  0,
	swidth:  87,
	sheight:  60,
	exist: true,
	room: 0,
	img: crayonImages.boat,
	update: function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			player.boat = true;
			this.exist = false;
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
};

var sword = {
	x: 0,
	y: 0,
	width:  sprtHtControl * .75,
	height:  sprtHtControl,
	sx:  0,
	sy:  0,
	swidth:  24,
	sheight:  41,
	img: crayonImages.sword,
	angle: 2.2,
	counter: 0,
	range: sprtHtControl * .75,
	update: function(){
		//the positioning of the sword is dependent on the player's direction.
		if (dir.lead == "down")
		{
			this.angle = 2.2;
			this.x = player.x - sprtHtControl * .15;
			this.y = player.y + sprtHtControl * .89;
			if (player.attack == true)
			{
				this.y = player.y + sprtHtControl * .39; 
				this.angle = 1.9;
				this.counter++;
				this.x += sprtHtControl * (this.counter * .02);
				this.y += sprtHtControl * .15;
				if (this.counter > 4)
				{
					this.y = player.y + sprtHtControl * .89;
					this.counter = 0;
				}
				else
				{
					this.extend += sprtHtControl * .1;	
				}
			}
		}
		else if (dir.lead == "up")
		{
			this.angle = -1;
			this.x = player.x + sprtHtControl * 1.2;
			this.y = player.y + sprtHtControl * .75;
			if (player.attack == true)
			{
				this.counter++;
				this.x -= sprtHtControl * (this.counter * .02);
				this.y -= sprtHtControl * (this.counter * .13);
				if (this.counter > 4)
				{
					this.counter = 0;
				}
			}
		}
		else if (dir.lead == "right")
		{
			this.angle = 3.8;
			this.x = player.x + sprtHtControl * .92;
			this.y = player.y + sprtHtControl * 1.1;
			if (player.attack == true)
			{
				this.angle = 3.175;
				this.counter++;
				this.x -= sprtHtControl * .3;
				this.x += sprtHtControl * (this.counter * .1);
				if (this.counter > 4)
				{
					this.counter = 0;
				}
			}
		}
		else if (dir.lead == "left")
		{
			this.angle = -.75;
			this.x = player.x + sprtHtControl * .38;
			this.y = player.y + sprtHtControl * .55;
			if (player.attack == true)
			{
				this.angle = 0;
				this.counter++;
				this.x -= sprtHtControl * (this.counter * .05);
				this.y = this.y +- sprtHtControl * .2;
				if (this.counter > 4)
				{
					this.counter = 0;
				}
			}
		}
		
		//draw the sword onto the canvas.
		if (player.sword == true)
		{
			ctx.translate(this.x, this.y);
			ctx.rotate(-this.angle + Math.PI/2.0);
			ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, 0, 0, this.width, this.height);
			ctx.rotate(this.angle - Math.PI/2.0);
			ctx.translate(-this.x, -this.y);
		}
	}
};

var Player = function(){
	this.x = sprtHtControl * 14;
	this.y =  sprtHtControl * 7;
	this.width =  sprtHtControl;
	this.height =  sprtHtControl;
	this.sx =  0;
	this.sy =  0;
	this.swidth =  50;
	this.sheight =  50;
	this.speed =  sprtHtControl * 0.15;
	this.sword = false;
	this.hammer = false;
	this.plunger = false;
	this.health = 100;
	this.key = false;
	this.attack =  false;
	this.counter =  0;
};

Player.prototype.update = function(){
		//if player goes off screen, go to another room
		//go up one room
		if (this.y < 0 - (sprtHtControl * .5))
		{
				this.y = sprtHtControl * (gridHeight - .5);
				room = room + 10;
				populate(room);
		}
		//go down one room
		if (this.y > sprtHtControl * gridHeight)
		{
			this.y = 0 - (gridHeight * .3);
			room = room - 10;
			populate(room);
		}
		//go left one room
		if (this.x < 0 - (sprtHtControl * .5))
		{
			this.x = gridWidth * (sprtHtControl - .5);
			room = room - 1;
			populate(room);
		}
		//go right one room
		if (this.x > sprtHtControl * gridWidth)
		{
			this.x = 0 - (gridHeight * .3);
			room = room + 1;
			populate(room);
		}
		if (this.attack == true){
			for (i in showers)
			{
				if (playerStrike(this, showers[i]) == true)
				{
					showers.splice(i, 1);
				}
			}
			for (i in toilets)
			{
				if (playerStrike(this, toilets[i]) == true)
				{
					toilets.splice(i, 1);
				}
			}
			if (playerStrike(this, superToilet) == true && superToilet.exist == true && this.plunger == true && superToilet.room == room)
			{
				superToilet.exist = false;
			}
			this.sx += 50;
			if (this.sx >= 200){
				this.sx = 0;
				//once attack is complete, return character to original place on sprite map.
				if (dir.lead == "down")
					{this.sy = 0;}
				else if (dir.lead == "up")
					{this.sy = 50;}
				else if (dir.lead == "right")
					{this.sy = 100;}
				else if (dir.lead == "left")
					{this.sy = 150;}
				this.attack = false;
			}
		}
		//use counter to handle animations that should be slower than 60 fps
		this.counter++;
		if (this.counter > 3)
		{
			this.counter = 0;
		}
		//determine movement based on key pressed
		var rightCollision = false;
		var leftCollision = false;
		var upCollision = false;
		var downCollision = false;
		//right
		if(dir.right == true)
		{
			this.sy = 100;
			for (i in blocks)
			{
				if (isCollision(this.x + this.speed, this.y, this.width, this.height, blocks[i].x, blocks[i].y,
					blocks[i].width, blocks[i].height, "right") == true)
				{
					rightCollision = true;
					if (blocks[i].type == "rock" && player.hammer == true)
					{
						blocks.splice(i,1);
					}
					else if (blocks[i].type == "lock" && player.key == true)
					{
						blocks.splice(i,1);
					}
					else if (blocks[i].type == "water" && player.boat == true)
					{
						rightCollision = false;
					}
				}
			}
			if (isCollision(this.x + this.speed, this.y, this.width, this.height, superToilet.x, superToilet.y,
				superToilet.width, superToilet.height) == true && player.plunger == false && room == superToilet.room)
			{
				rightCollision = true;
			}
			if (isCollision(this.x + this.speed, this.y, this.width, this.height, gemLock.x, gemLock.y,
				gemLock.width, gemLock.height) == true && gems.length > 0 && room == gemLock.room)
			{
				rightCollision = true;
			}
			if (isCollision(this.x + this.speed, this.y, this.width, this.height, gemLock2.x, gemLock2.y,
				gemLock2.width, gemLock2.height) == true && gems.length > 0 && room == gemLock2.room)
			{
				rightCollision = true;
			}
			if (rightCollision == false)
			{
				this.x+= this.speed;
			}
		}
		//left
		if(dir.left == true)
		{
			//The follow IF statement ensures that the player does not walk off the grid.
			if (player.x > sprtHtControl || (room - 1 != -1 && room - 1 != 9 && room - 1 != 19 && room - 1 != 29))
			{
				this.sy = 150;
				for (i in blocks)
				{
					if (isCollision(this.x - this.speed, this.y, this.width, this.height, blocks[i].x, blocks[i].y,
						blocks[i].width, blocks[i].height, "left") == true)
					{
						leftCollision = true;
						if (blocks[i].type == "rock" && player.hammer == true)
						{
							blocks.splice(i,1);
						}
						else if (blocks[i].type == "lock" && player.key == true)
						{
							blocks.splice(i,1);
						}
						else if (blocks[i].type == "water" && player.boat == true)
						{
							leftCollision = false;
						}
					}
				}
				if (isCollision(this.x - this.speed, this.y, this.width, this.height, superToilet.x, superToilet.y,
					superToilet.width, superToilet.height) == true && player.plunger == false && room == superToilet.room)
				{
					leftCollision = true;
					this.health--;
				}
				if (isCollision(this.x - this.speed, this.y, this.width, this.height, gemLock.x, gemLock.y,
					gemLock.width, gemLock.height) == true && gems.length > 0 && room == gemLock.room)
				{
					leftCollision = true;
				}
				if (isCollision(this.x - this.speed, this.y, this.width, this.height, gemLock2.x, gemLock2.y,
					gemLock2.width, gemLock2.height) == true && gems.length > 0 && room == gemLock2.room)
				{
					leftCollision = true;
				}
				if (leftCollision == false)
				{
					this.x-= this.speed;
				}
			}
		}
		//up
		if(dir.up == true)
		{
			//add IF statement to prevent player from wandering off the grid.
			if (player.y > sprtHtControl || room + 10 < 40)
			{
				this.sy = 50;
				for (i in blocks)
				{
					if (isCollision(this.x, this.y, this.width, this.height, blocks[i].x, blocks[i].y,
						blocks[i].width, blocks[i].height + this.speed, "up") == true)
					{
						upCollision = true;
						if (blocks[i].type == "rock" && player.hammer == true)
						{
							blocks.splice(i,1);
						}
						else if (blocks[i].type == "lock" && player.key == true)
						{
							blocks.splice(i,1);
						}
						else if (blocks[i].type == "water" && player.boat == true)
						{
							upCollision = false;
						}
					}
				}
				if (isCollision(this.x, this.y, this.width, this.height, superToilet.x, superToilet.y,
					superToilet.width, superToilet.height + this.speed) == true && player.plunger == false && room == superToilet.room)
				{
					upCollision = true;
				}
				if (isCollision(this.x, this.y, this.width, this.height, gemLock.x, gemLock.y,
					gemLock.width, gemLock.height + this.speed) == true && gems.length > 0 && room == gemLock.room)
				{
					upCollision = true;
				}
				if (isCollision(this.x, this.y, this.width, this.height, gemLock2.x, gemLock2.y,
					gemLock2.width, gemLock2.height + this.speed) == true && gems.length > 0 && room == gemLock2.room)
				{
					upCollision = true;
				}
				if (upCollision == false)
				{
					this.y-= this.speed;
				}
			}
		}
		//down
		if(dir.down == true)
		{
			this.sy = 0;
			for (i in blocks)
			{
				if (isCollision(this.x, this.y + this.speed, this.width, this.height, blocks[i].x, blocks[i].y,
					blocks[i].width, blocks[i].height, "down") == true)
				{
					downCollision = true;
					if (blocks[i].type == "rock" && player.hammer == true)
					{
						blocks.splice(i,1);
					}
					else if (blocks[i].type == "lock" && player.key == true)
					{
						blocks.splice(i,1);
					}
					else if (blocks[i].type == "water" && player.boat == true)
					{
						downCollision = false;
					}
				}
			}
			if (isCollision(this.x, this.y + this.speed, this.width, this.height, superToilet.x, superToilet.y,
				superToilet.width, superToilet.height) == true && player.plunger == false && room == superToilet.room)
			{
				downCollision = true;
			}
			if (isCollision(this.x, this.y + this.speed, this.width, this.height, gemLock.x, gemLock.y,
				gemLock.width, gemLock.height) == true && gems.length > 0 && room == gemLock.room)
			{
				downCollision = true;
			}
			if (isCollision(this.x, this.y + this.speed, this.width, this.height, gemLock2.x, gemLock2.y,
				gemLock2.width, gemLock2.height) == true && gems.length > 0 && room == gemLock2.room)
			{
				downCollision = true;
			}
			if (downCollision == false)
			{
				this.y+= this.speed;
			}
		}	
		if(dir.fire == true)
		{
			if (this.attack == false)
			{
				this.attack = true;
				this.sx = 0;
			}
		}
		if (this.attack == true)
		{
			if (dir.lead == "left")
			{
				this.sy = 300;
			}
			if (dir.lead == "right")
			{
				this.sy = 250;				
			}
			if (dir.lead == "up")
			{
				this.sy = 350;
			}
			if (dir.lead == "down")
			{
				this.sy = 200;
			}			
		}
		if (this.sx > 151)
		{
			this.sx = 0;
		}	
		//draw onto the canvas.
		ctx.drawImage(crayonImages.player, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
		//if the player is moving, animate him.
		if ((dir.up == true || dir.down == true || dir.right == true || dir.left == true) && this.counter == 3){
			this.sx += 50;
		}
};

player = new Player();

//Create the UI object.
var crayonUI = {
	x: 0,
	y: 0,
	joyStick: 
	{
		left: {},
		right: {},
		up: {},
		down: {},
		shoot: {}
	},
	draw: function()
	{
		ctx.globalAlpha = 0.6;
		if (player.sword == true)
		{
			ctx.drawImage(crayonImages.sword, 0, 0, weapon.swidth, weapon.sheight, sprtHtControl, sprtHtControl * .5, sprtHtControl, sprtHtControl);
		}
		if (player.hammer == true)
		{
			ctx.drawImage(crayonImages.hammer, 0, 0, hammer.swidth, hammer.sheight, sprtHtControl * 3, sprtHtControl * .5, sprtHtControl, sprtHtControl);
		}		
		if (player.key == true)
		{
			ctx.drawImage(crayonImages.key, 0, 0, key.swidth, key.sheight, sprtHtControl * 5, sprtHtControl * .5, sprtHtControl, sprtHtControl);
		}
		if (player.boat == true)
		{
			ctx.drawImage(crayonImages.boat, 0, 0, boat.swidth, boat.sheight, sprtHtControl * 7, sprtHtControl * .5, sprtHtControl, sprtHtControl);
		}	
		if (player.plunger == true)
		{
			ctx.drawImage(crayonImages.plunger, 45, 0, plunger.swidth, plunger.sheight, sprtHtControl * 9, sprtHtControl * .5, sprtHtControl, sprtHtControl);
		}
		//draw the gem count in the UI
		ctx.drawImage(crayonImages.gem, 0, 0, 100, 100, sprtHtControl * 16, sprtHtControl * .5, sprtHtControl, sprtHtControl);
		ctx.font = canvas.width * 0.035  + "px Arial";
		ctx.fillStyle = "black";
		ctx.fillText(" remaining : " + gems.length, sprtHtControl * 17, sprtHtControl * 1.3);
		//display the user's health in the UI
		ctx.drawImage(crayonImages.heart, 0, 0, 100, 100, sprtHtControl * 25, sprtHtControl * .5, sprtHtControl * 1.4, sprtHtControl * 1.4);
		ctx.font = canvas.width * 0.021  + "px Arial";
		ctx.fillStyle = "black";
		ctx.fillText(("00" + player.health).slice(-3), sprtHtControl * 25.18, sprtHtControl * 1.32);		
		if (crayon.isMobile == true)
		{
			ctx.fillStyle = "cyan";
			//draw joy stick for mobile devices
			//left
			ctx.beginPath();
			ctx.moveTo(this.joyStick.left.x, this.joyStick.left.y);
			ctx.lineTo(this.joyStick.left.x + this.joyStick.left.width, this.joyStick.left.y - (this.joyStick.left.height * 0.5));
			ctx.lineTo(this.joyStick.left.x + this.joyStick.left.width, this.joyStick.left.y + (this.joyStick.left.height * 0.5));
			ctx.fill();
			//right
			ctx.beginPath();
			ctx.moveTo(this.joyStick.right.x, this.joyStick.right.y);
			ctx.lineTo(this.joyStick.right.x, this.joyStick.right.y - (this.joyStick.right.height * 0.5));
			ctx.lineTo(this.joyStick.right.x + this.joyStick.right.width, this.joyStick.right.y);
			ctx.lineTo(this.joyStick.right.x, this.joyStick.right.y + (this.joyStick.right.height * 0.5));		
			ctx.fill();
			//up
			ctx.beginPath();
			ctx.moveTo(this.joyStick.up.x, this.joyStick.up.y);
			ctx.lineTo(this.joyStick.up.x + (this.joyStick.up.width * 0.5), this.joyStick.up.y + this.joyStick.up.height);
			ctx.lineTo(this.joyStick.up.x - (this.joyStick.up.width * 0.5), this.joyStick.up.y + this.joyStick.up.height);
			ctx.fill();
			//down
			ctx.beginPath();
			ctx.moveTo(this.joyStick.down.x, this.joyStick.down.y);
			ctx.lineTo(this.joyStick.down.x + this.joyStick.down.width, this.joyStick.down.y);
			ctx.lineTo(this.joyStick.down.x + (this.joyStick.down.width * 0.5), this.joyStick.down.y + this.joyStick.down.height);
			ctx.fill();
			//shoot
			ctx.drawImage(crayonImages.shoot, this.joyStick.shoot.x, this.joyStick.shoot.y, this.joyStick.shoot.width, this.joyStick.shoot.height);
		}
		ctx.globalAlpha = 1;
	}
};
crayonUI.joyStick.left.x = sprtHtControl * .7;
crayonUI.joyStick.left.y = sprtHtControl * 10.5;
crayonUI.joyStick.left.width = sprtHtControl * 2;
crayonUI.joyStick.left.height = sprtHtControl * 2;

crayonUI.joyStick.right.x = sprtHtControl * 7;
crayonUI.joyStick.right.y = sprtHtControl * 10.5;
crayonUI.joyStick.right.width = sprtHtControl * 2;
crayonUI.joyStick.right.height = sprtHtControl * 2;

crayonUI.joyStick.up.x = sprtHtControl * 5;
crayonUI.joyStick.up.y = sprtHtControl * 6;
crayonUI.joyStick.up.width = sprtHtControl * 2;
crayonUI.joyStick.up.height = sprtHtControl * 2;

crayonUI.joyStick.down.x = sprtHtControl * 4;
crayonUI.joyStick.down.y = sprtHtControl * 12.5;
crayonUI.joyStick.down.width = sprtHtControl * 2;
crayonUI.joyStick.down.height = sprtHtControl * 2;

crayonUI.joyStick.shoot.x = sprtHtControl * 24;
crayonUI.joyStick.shoot.y = sprtHtControl * 10;
crayonUI.joyStick.shoot.width = sprtHtControl * 3;
crayonUI.joyStick.shoot.height = sprtHtControl * 3;
