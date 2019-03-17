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

//determine if the screen is on a mobile devices
var isMobile = true;
var canvasBad = false;

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
var shootButtonImg = new Image();
var rotateImg = new Image();

//load source for all images
img.src = "images/player_animate_front.png";
img2.src = "images/player_animate_back.png";
img3.src = "images/player_animate_right.png";
img4.src = "images/player_animate_left.png";
blockimg.src = "images/block.png";
runImage.src = "images/run.png";
shootImage.src = "images/shoot.png";
frequentImage.src = "images/frequent.png";
healthImage.src = "images/health.png";
badGuy.src = "images/badguy.png";
badGuy2.src = "images/badguy2.png";
badGuy3.src = "images/badguy3.png";
breakable.src = "images/breakable.png";
flagImg.src = "images/flag.png";
shootButtonImg.src = "images/circle.png";
rotateImg.src = "images/rotate.png";

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

//Create the UI object.
var FlagUI = {
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
		if (isMobile == true)
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
			ctx.drawImage(shootButtonImg, this.joyStick.shoot.x, this.joyStick.shoot.y, this.joyStick.shoot.width, this.joyStick.shoot.height);
		}
		ctx.globalAlpha = 1;
	}
};
FlagUI.joyStick.left.x = sprtHtControl * 1;
FlagUI.joyStick.left.y = sprtHtControl * 11;
FlagUI.joyStick.left.width = sprtHtControl * 1.8;
FlagUI.joyStick.left.height = sprtHtControl * 1.8;

FlagUI.joyStick.right.x = sprtHtControl * 6;
FlagUI.joyStick.right.y = sprtHtControl * 11;
FlagUI.joyStick.right.width = sprtHtControl * 1.8;
FlagUI.joyStick.right.height = sprtHtControl * 1.8;

FlagUI.joyStick.up.x = sprtHtControl * 4.4;
FlagUI.joyStick.up.y = sprtHtControl * 7.5;
FlagUI.joyStick.up.width = sprtHtControl * 1.8;
FlagUI.joyStick.up.height = sprtHtControl * 1.8;

FlagUI.joyStick.down.x = sprtHtControl * 3.5;
FlagUI.joyStick.down.y = sprtHtControl * 12.5;
FlagUI.joyStick.down.width = sprtHtControl * 1.8;
FlagUI.joyStick.down.height = sprtHtControl * 1.8;

FlagUI.joyStick.shoot.x = sprtHtControl * 24;
FlagUI.joyStick.shoot.y = sprtHtControl * 10;
FlagUI.joyStick.shoot.width = sprtHtControl * 3;
FlagUI.joyStick.shoot.height = sprtHtControl * 3;
