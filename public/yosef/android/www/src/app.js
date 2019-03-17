

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

var gridWidth = 21;
var gridHeight = 11;
var sprtHtControl = canvas.width / gridWidth;
var canvasBad = false;

canvas.height = sprtHtControl * gridHeight;

//images
var imageObj = {
	badGuys: {
		badGuy: new Image(),
		badGuy2: new Image(),
		badGuy3: new Image(),
		sockPuppet: new Image(),
		fire: new Image()
	},
	blocks: {
		blockimg: new Image(),
		blockimg2: new Image(),
		blockimg3: new Image(),
		blockimg4: new Image(),
		blockimg5: new Image(),
		breakable: new Image(),
		spring: new Image()
	},
	powerUps: {
		runImage: new Image(),
		shootImage: new Image(),
		frequentImage: new Image(),
		healthImage: new Image(),
		gem: new Image()
	},
	backgrounds: {
		crystalBush: new Image(),
		flower2: new Image(),
		hillBackground: new Image(),
		shroom1: new Image(),
		tree2: new Image(),
		tree: new Image(),
		shroom2: new Image(),
		flower: new Image(),
		rainbow: new Image(),
		palm: new Image(),
		cloud: new Image(),
		cloud2: new Image(),
		arrow: new Image(),
		cloud_background: new Image(),
		forest_background: new Image(),
		green_background: new Image(),
		heiro_background: new Image()
	},
	UI: {
		shoot: new Image(),
		logo: new Image(),
		rotate: new Image()
	},
	player: {
		playerRight: new Image(),
		playerLeft: new Image()
	},
	setPics: function(){
		this.badGuys.badGuy.src = "img/badguy.png";
		this.badGuys.badGuy2.src = "img/badguy2.png";
		this.badGuys.badGuy3.src = "img/badguy3.png";
		this.badGuys.sockPuppet.src = "img/sock_puppet.png";
		this.badGuys.fire.src = "img/fire.png";
		this.blocks.blockimg.src = "img/block.png";
		this.blocks.blockimg2.src = "img/block2.png";
		this.blocks.blockimg3.src = "img/block3.png";
		this.blocks.blockimg4.src = "img/block4.png";
		this.blocks.blockimg5.src = "img/block5.png";
		this.blocks.breakable.src = "img/breakable.png";
		this.blocks.spring.src = "img/spring.png";		
		this.powerUps.runImage.src = "img/run.png";
		this.powerUps.shootImage.src = "img/shoot.png";
		this.powerUps.frequentImage.src = "img/frequent.png";
		this.powerUps.healthImage.src = "img/health.png";
		this.powerUps.gem.src = "img/gem.png";		
		this.backgrounds.crystalBush.src = "img/crystal_bush.PNG";
		this.backgrounds.flower2.src = "img/flower_2.PNG";
		this.backgrounds.hillBackground.src = "img/hill_background.png";
		this.backgrounds.shroom1.src = "img/shroom1.PNG";
		this.backgrounds.tree2.src = "img/tree2.PNG";
		this.backgrounds.tree.src = "img/tree.PNG";
		this.backgrounds.palm.src = "img/palm.png";
		this.backgrounds.shroom2.src = "img/shroom2.PNG";
		this.backgrounds.flower.src = "img/flower.png";
		this.backgrounds.rainbow.src = "img/rainbow.png";		
		this.backgrounds.cloud.src = "img/cloud.png";
		this.backgrounds.cloud2.src = "img/cloud2.png";
		this.backgrounds.arrow.src = "img/arrow.png";		
		this.backgrounds.cloud_background.src = "img/cloud_background.png";
		this.backgrounds.forest_background.src = "img/forest_background.png";
		this.backgrounds.green_background.src = "img/green_background.png";
		this.backgrounds.heiro_background.src = "img/heiro_background.png";
		this.UI.shoot.src = "img/circle.png";
		this.UI.logo.src = "img/sticklogo.png";
		this.UI.rotate.src = "img/rotate.png";
		this.player.playerRight.src = "img/player.png";
		this.player.playerLeft.src = "img/playerLeft.png";
	}
};
imageObj.setPics();

//Create sounds object
var soundObj = {
	music: document.getElementById("music"),
	crunch: document.getElementById("crunch"),
	laser: document.getElementById("laser"),
	gem: document.getElementById("gem")
};

//declare variables
var direction = "right";
var restartSwitch = 0;
var animateSpeedControl = 0;
var bulControl = 0;
var bulTrigger = 0;
var bullSpeed = canvas.width * 0.00461;
var bullFreq = 12;
var moveMe = "false";
var health = 200;
var powerLevel = 0;
var gameover = false;
var spriteSizes = sprtHtControl;
var dirLead = "default";
var keysDown = {};
var keysUp = {};
var jump = false;
var jumpTrigger = 0;
var screenMax = canvas.width * 4;
var	levelEnd = screenMax / spriteSizes;
var introCredit = true;

//declare arrays
var bullets = [];
var badBullets = [];
var blocks = [];
var breakables = [];
var runPower = [];
var shootPower = [];
var frequentPower = [];
var healthPower = [];
var badUFOs = [];
var badDudes2 = [];
var badDudes3 = [];
var sockPuppets = [];
var fires = [];
var backgrounds = [];
var backgrounds2 = [];
var springs = [];
var gems = [];

//declare randomness
var runPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var runPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
var shootPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var shootPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
var frequentPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
var frequentPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);

//Create Classes

//Create blocks class
var blockClass = function(inputx, inputy, inputpic, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.x = spriteSizes * inputx,
	this.y = spriteSizes * inputy,
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.pic = inputpic
};
//Create breakables class
var breakClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.x = spriteSizes * inputx;
	this.y = spriteSizes * inputy;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
};
//Create spring class
var springClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.pic = imageObj.blocks.spring;
	this.bounce = function(index){
		if (testColl(player.x, player.y, player.width, player.height, springs[index].x, springs[index].y, 
		springs[index].width, springs[index].height) == true){
			player.goUp = true;
		}
	};
};
//Create badUFOs class
var ufoClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.dir = "left";
	this.time = Date.now() / 1000;
	this.behavior = function(){
		if (this.x < player.x + canvas.width && this.x > player.x - canvas.width){
			for (j in blocks){
				if (testColl(this.x, this.y, this.width, this.height, 
				blocks[j].x, blocks[j].y, blocks[j].width, blocks[j].height)){
					if (this.dir == "left"){
						this.x += 2;
						this.dir = "right";
					}
					else{
						this.x -= 2;
						this.dir = "left";
					}
				}
			}
			if (this.dir == "right"){
				this.x+= canvas.width * 0.001;
			}
			else{
				this.x-= canvas.width * 0.001;
			}
			if (this.x < -15){
				this.dir = "right";
			}
			if (this.x > blocks[blocks.length - 1].x){
				this.x -= 2;
				this.dir = "left";
			}
		}		
	};
};
//Create bat class
var batClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
};
//Create angry cloud class
var cloudClass = function (inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.timer = 0;
	//badDudes3 AI
	this.behavior = function(){
		if (this.x < player.x + canvas.width && this.x > player.x - canvas.width){
			if (this.timer < 190){
				if (this.x > player.x + (player.width - 4)){
					this.x-= canvas.width * 0.0006;
				}
				if (this.x + this.width < player.x + 4){
					this.x+= canvas.width * 0.0006;
				}
				if (this.y > player.y + (player.height - 4)){
					this.y-= canvas.width * 0.0006;
				}
				if (this.y + this.width < player.y + 4){
					this.y+= canvas.width * 0.0006;
				}
			}
			else if (this.timer == 265){
				badBullets.push({
					dir: "up",
					x: this.x + (this.width * 0.5),
					y: this.y,
					width: 0.138 * this.width,
					height: 0.138 * this.width
				});
				badBullets.push({
					dir: "front",
					x: this.x + (this.width * 0.5),
					y: this.y + this.height,
					width: 0.138 * this.width,
					height: 0.138 * this.width
				});
				badBullets.push({
					dir: "right",
					x: this.x + this.width,
					y: this.y + (this.height * 0.5),
					width: 0.138 * this.width,
					height: 0.138 * this.width
				});
				badBullets.push({
					dir: "left",
					x: this.x,
					y: this.y + (this.height * 0.5),
					width: 0.138 * this.width,
					height: 0.138 * this.height
				});
			}
			else if (this.timer > 320){
				this.timer = 0;
			}
			this.timer++;
		}		
	};
};
//Create puppet class
var puppetClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 0.75;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 100;
	this.sheight = 162;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.timer = 0;
	this.shoot = false;
	this.behavior = function(){
		if (this.shoot == true){
			this.timer++;
			if (this.timer == 150){
				this.sx = 100;
				badBullets.push({
					dir: "left",
					x: this.x,
					y: this.y + (this.width * 0.2),
					width: 0.138 * this.width,
					height: 0.138 * this.height
				});
			}
			if (this.timer > 175){
				this.timer = 0;
				this.sx = 0;
			}
		}
		else{
			this.timer = 0;
			this.sx = 0;
		}
		if (this.x < player.x + (canvas.width * 0.5) && this.x > player.x + player.width){
			this.shoot = true;
		}
		else{
			this.shoot = false;
		}		
	};
};
//Create fire class
var fireClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 50;
	this.sheight = 50;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = width * spriteSizes;
	this.height = height * spriteSizes;
	this.behavior = function(){
		this.sx += 50;
		if (this.sx > 350){
			this.sx = 0;
		}	
	}
};
//Create gem class
var gemClass = function(inputx, inputy, width, height){
	width = (typeof width !== 'undefined') ?  width : 0.5;
	height = (typeof height !== 'undefined') ?  height : 0.5;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 100;
	this.sheight = 100;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = width * spriteSizes,
	this.height = height * spriteSizes,
	this.collect = function(index){
		if (testColl(player.x, player.y, player.width, player.height, gems[index].x, gems[index].y, 
		gems[index].width, gems[index].height) == true){
			powerLevel += 10;
			gems.splice(index, 1);
		}
	};
};
//Create backgrounds Class
var backClass = function(inputx, inputy, pic, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = spriteSizes * width;
	this.height = spriteSizes * height;
	this.pic = pic;
};
//Create forefront backgrounds Class
var backClass2 = function(inputx, inputy, pic, width, height){
	width = (typeof width !== 'undefined') ?  width : 1;
	height = (typeof height !== 'undefined') ?  height : 1;
	this.x = inputx * spriteSizes;
	this.y = inputy * spriteSizes;
	this.width = spriteSizes * width;
	this.height = spriteSizes * height;
	this.pic = pic;
};	
//define background
var Background = {
	x: 0,
	y: 0,
	width: canvas.width,
	height: canvas.height,
	pic: imageObj.backgrounds.hillBackground
};

//define yosef main controller object
var yosef = {
	isMobile : true,
	gameStart: false,
	gamestate: "title",
	title:
	{
		blinkCount: 0,
		blinkText: function()
		{
			this.blinkCount++;
			if (this.blinkCount > 60)
			{
				this.blinkCount = 0;
			}
		},
		draw()
		{
			ctx.fillStyle = "white";
			ctx.font = canvas.width * 0.08  + "px Verdana";
			ctx.fillText("THE AMAZING YOSEF", canvas.width * .08, canvas.height * .2);
			if (this.blinkCount > 30)
			{
				ctx.font = canvas.width * 0.05  + "px Arial";
				ctx.fillText("TOUCH THE SCREEN", canvas.width * .21, canvas.height * .43);
			}
			ctx.drawImage(imageObj.UI.logo, canvas.width * .35, canvas.height * .5, canvas.width * .2, canvas.width * .2);
		}
	}
};


//define the main player object
var player = {
	sx: 0,
	sy: 0,
	swidth: 50,
	sheight: 50,
    x: 0 - spriteSizes,
    y: (canvas.height / 2) - spriteSizes,
    width: spriteSizes * 0.6,
    height: spriteSizes,
    speed: spriteSizes * 5,
    color: 'blue',
	bulxPos: this.x + (0.444 * spriteSizes),
	bulyPos: this.y + (0.388 * spriteSizes),
	shoot: false,
	dir: "right",
	picRight: imageObj.player.playerRight,
	picLeft: imageObj.player.playerLeft,
	entry: "left",
	goUp: false,
	controller: 
	{
		up: false,
		down: false,
		left: false,
		right: false
	},
	bounceTrigger: 0,
	bounce: function(){
		if (dudeUpColl(player) == true){
			if (this.goUp == true){
				if (this.bounceTrigger < 60){
					player.y -= ((player.speed * ((Date.now() - time) / 1000)) * 3);
				}else{
					this.goUp = false;
					this.bounceTrigger = 0;
				}
			}
		}else{
			this.goUp = false;
			this.bounceTrigger = 0;
		}
	},
	updateBull: function(z){
		if (z == "front")
		{
			this.bulxPos = this.x + (0.444 * spriteSizes);
			this.bulyPos = this.y + (0.388 * spriteSizes);
		}
		if (z == "up")
		{
			this.bulxPos = this.x + (0.444 * spriteSizes);
			this.bulyPos = this.y - (0.111 * spriteSizes);
		}
		if (z == "right")
		{
			this.bulxPos = this.x + (0.944 * spriteSizes);
			this.bulyPos = this.y + (0.222 * spriteSizes);
		}
		if (z == "left")
		{
			this.bulxPos = this.x - (0.027 * spriteSizes);
			this.bulyPos = this.y + (0.222 * spriteSizes);
		}		
	}
};

//Create the UI object.
var yosefUI = {
	x: 0,
	y: 0,
	joyStick: 
	{
		left: {},
		right: {},
		up: {},
		down: {}
	},
	draw: function()
	{
		ctx.globalAlpha = 0.6;
		if (yosef.isMobile == true)
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
			if (player.shoot == true)
			{
				ctx.drawImage(imageObj.UI.shoot, this.joyStick.down.x, this.joyStick.down.y, this.joyStick.down.width, this.joyStick.down.height);
			}
		}
		ctx.globalAlpha = 1;
	}
};
yosefUI.joyStick.left.x = spriteSizes * 0.5;
yosefUI.joyStick.left.y = spriteSizes * 7;
yosefUI.joyStick.left.width = spriteSizes * 1.8;
yosefUI.joyStick.left.height = spriteSizes * 1.8;

yosefUI.joyStick.right.x = spriteSizes * 5;
yosefUI.joyStick.right.y = spriteSizes * 7;
yosefUI.joyStick.right.width = spriteSizes * 1.8;
yosefUI.joyStick.right.height = spriteSizes * 1.8;

yosefUI.joyStick.up.x = spriteSizes * 20;
yosefUI.joyStick.up.y = spriteSizes * 7;
yosefUI.joyStick.up.width = spriteSizes * 1.8;
yosefUI.joyStick.up.height = spriteSizes * 1.8;

yosefUI.joyStick.down.x = spriteSizes * 15;
yosefUI.joyStick.down.y = spriteSizes * 7;
yosefUI.joyStick.down.width = spriteSizes * 1.8;
yosefUI.joyStick.down.height = spriteSizes * 1.8;

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