//LOCKED

//determine orientation of the screen.
function lockedIsVert()
{
	if (window.innerWidth < window.innerHeight)
		return true;
	else
		return false;
}

//this variable is recorded once at the begining to determine if the page
//should be reloaded with the correct orientation.
var lockedIsVertical = window.innerWidth < window.innerHeight;

window.addEventListener("orientationchange", function() {
    if (lockedIsVertical == true)
		location.reload();
});

//define canvas
var canvas = document.createElement("canvas");
document.getElementsByClassName("wrapper")[0].appendChild(canvas);
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth * 0.95;
canvas.height = window.innerHeight * 0.95;

$("#canvas").css("touch-action", "none");

var imageObj = {
	badGuys: {
		bronster: {
			img: new Image(),
			down: {sx: 0, sy: 0, swidth: 50, sheight: 50},
			up: {sx: 0, sy: 51, swidth: 50, sheight: 50},
			left: {sx: 0, sy: 101, swidth: 50, sheight: 50},
			right: {sx: 0, sy: 151, swidth: 50, sheight: 50}
		}
	},
	fruit: {
		img: new Image(),
		pineapple: {sx: 0, sy: 0, swidth: 50, sheight: 50},
		lemon: {sx: 51, sy: 0, swidth: 49, sheight: 50},
		apple: {sx: 101, sy: 0, swidth: 49, sheight: 50},
		blueberry: {sx: 151, sy: 0, swidth: 49, sheight: 50},
		strawberry: {sx: 0, sy: 51, swidth: 50, sheight: 50},
		plumb: {sx: 51, sy: 51, swidth: 49, sheight: 50},
		cherry: {sx: 101, sy: 51, swidth: 49, sheight: 50},
		banana: {sx: 151, sy: 51, swidth: 49, sheight: 50}		
	},
	frog: {
		img: new Image(),
		down: {sx: 0, sy: 0, swidth: 100, sheight: 100},
		up: {sx: 0, sy: 101, swidth: 100, sheight: 100},
		left: {sx: 0, sy: 201, swidth: 100, sheight: 100},
		right: {sx: 0, sy: 301, swidth: 100, sheight: 100}			
	},
	backgroundPics: {number: 5,
					colors: ["#afa", "#faa", "#aaf", "#cfffca", "#ffa", "#aff", "#faf", "#a33", "#3a3", "#fff", "#33a"]
	},
	setPics: function(){
		this.badGuys.bronster.img.src = "images/bronster.png";
		this.fruit.img.src = "images/fruit.png";
		this.frog.img.src = "images/frog.png";
	}
}
imageObj.setPics();

var fruitFrogs = {
	gamestate: "play",
	isTouchScreen: false,
	touchX: 0,
	touchY: 0,
	score: 0
};

var brownMonster = function(obj, x, y, width, height){
	this.name = "Bronster";
	this.img = obj.img;
	this.speed = canvas.height * .0035;
	this.counter = 0;
	this.dir = "down";
	this.state = "norm";
	this.diecounter = 0;
	this.sx = obj.down.sx;
	this.sy = obj.down.sy;
	this.swidth = obj.down.swidth;
	this.sheight = obj.down.sheight;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.update = function(){
		if (this.dir == "down" && this.state == "norm")
		{
			this.y+= this.speed;
			this.sy = obj.down.sy;
			if (this.y + this.height > canvas.height)
			{
				this.dir = "up";
			}
		}
		if (this.dir == "up" && this.state == "norm")
		{
			this.y-= this.speed;
			this.sy = obj.up.sy;
			if (this.y < 0)
			{
				this.dir = "down";
			}
		}
		if (this.dir == "left" && this.state == "norm")
		{
			this.x-= this.speed;
			this.sy = obj.left.sy;
			if (this.x < 0)
			{
				this.dir = "right";
			}
		}
		if (this.dir == "right" && this.state == "norm")
		{
			this.x+= this.speed;
			this.sy = obj.right.sy;
			if (this.x + this.width > canvas.width)
			{
				this.dir = "left";
			}
		}
		if (this.counter % 3 === 0 && this.state == "norm")
		{
			this.sx+=this.swidth;
			if (this.sx >= 400)
			{
				this.sx = 0;
			}
		}
		if (this.counter > 130)
		{
			var chance = Math.random() * 10;
			if (chance < 2.5)
			{
				this.dir = "left";
			}
			else if (chance > 2.5 && chance < 5)
			{
				this.dir = "right";
			}
			else if (chance > 5 && chance < 7.5)
			{
				this.dir = "up";
			}
			else
			{
				this.dir = "down";
			}
			this.counter = 0;
		}
		if (this.state == "dead")
		{
			this.width *= 1.2;
			this.height *= 1.2;
			this.diecounter++;
		}
		this.counter++;
	};
	this.draw = function(){
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	};
};

var frogClass = function(obj, x, y, width, height){
	this.name = "Frog";
	this.img = obj.img;
	this.counter = 0;
	this.dir = "down";
	this.state = "norm";
	this.sx = obj.down.sx;
	this.sy = obj.down.sy;
	this.swidth = obj.down.swidth;
	this.sheight = obj.down.sheight;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.update = function(){
		this.counter++;
		if (this.counter > 75)
		{
			if (Math.random() * 10 > 6)
			{
				this.state = "active";
			}
			else
			{
				this.sx = 0;
				this.state = "norm";
			}
			this.counter = 0;
		}
		if (this.state == "active")
		{
			if (Math.random() * 10 > 6)
			{
				this.sx += 100;
				if (this.sx > 300)
				{
					this.sx = 0;
				}
			}
		}
	}	
	this.draw = function(){
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}	
};

var fruitClass = function(obj, x, y, width, height, type)
{
	this.name = "Fruit";
	this.state = "normal";
	this.img = obj.img;
	this.counter = 0;
	this.isTouched = false;
	this.sx = type.sx;
	this.sy = type.sy;
	this.swidth = type.swidth;
	this.sheight = type.sheight;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.update = function(){	
		for (var i = 0; i < frogs.length; i++)
		{
			if (this.x < frogs[i].x + frogs[i].width && this.x + this.width > frogs[i].x && 
				this.y + this.height > frogs[i].y && this.y < frogs[i].y + frogs[i].height)
				{
					frogs[i].state = "active";
					addScore(100, this.x, this.y);
					this.state = "delete";
				}
		}
		for (var i = 0; i < bronsters.length; i++)
		{
			if (this.x < bronsters[i].x + bronsters[i].width && this.x + this.width > bronsters[i].x && 
				this.y + this.height > bronsters[i].y && this.y < bronsters[i].y + bronsters[i].height)
				{
					if (bronsters[i].state != "dead")
					{
						addScore(-50, this.x, this.y, true);
						this.state = "delete";
					}
				}
		}
		if (this.isTouched == true)
		{
			//drag fruit
			this.x = fruitFrogs.touchX - this.width * .55;
			this.y = fruitFrogs.touchY - this.height * .55;
		}
	};
		this.draw = function(){
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	};
};

var scoreClass = function(amount, x, y, monster)
{
	this.amount = amount;
	this.x = x;
	this.y = y;
	this.counter = 0;
	this.alive = true;
	this.update = function(){
		if (monster == true)
		{
			this.y++;
		}
		else
		{
			this.y--;
		}
		this.counter++;
		// Create gradient
		var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
		if (monster == true)
		{
			gradient.addColorStop("0","#faa");
			gradient.addColorStop("0.5","#f5a");
			gradient.addColorStop("1.0","#f33");			
		}
		else
		{
			gradient.addColorStop("0","magenta");
			gradient.addColorStop("0.5","blue");
			gradient.addColorStop("1.0","green");
		}
		// Fill with gradient
		ctx.strokeStyle=gradient;
		if (monster == true)
		{
			ctx.strokeText(this.amount, this.x, this.y);
		}
		else
		{
			ctx.strokeText("+ " + this.amount, this.x, this.y);			
		}
		if (this.counter > 50)
		{
			this.alive = false;
		}
	};
};

