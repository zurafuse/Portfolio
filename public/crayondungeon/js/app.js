//create the arrays for multiples, enemies, and collectibles.
var showers = [];
var toilets = [];
var blocks = [];
var gems = [];
var hearts = [];
var backgrounds = [];
var bullets = [];

//var myMusic = new Audio("sound/music.mp3");
//myMusic.loop = true;
//myMusic.play();

var playerStrike = function(striker, target){
		if (dir.lead == "left" && player.sword == true)
		{
			if (target.x + target.width > striker.x - (striker.width * .75) && target.x + target.width < striker.x + striker.width && 
				target.y < striker.y + striker.height && target.y + target.height > striker.y)
			{
				return true;
			}
		}
		if (dir.lead == "right" && player.sword == true)
		{
			if (target.x < striker.x + striker.width + (striker.width * .75) && target.x + target.width > striker.x && 
				target.y < striker.y + striker.height && target.y + target.height > striker.y)
			{
				return true;
			}
		}
		if (dir.lead == "up" && player.sword == true)
		{
			if (target.x + target.width > striker.x && target.x < striker.x + striker.width && 
				target.y + target.height > striker.y - (striker.height * .75) && target.y < striker.y)
			{
				return true;
			}
		}
		if (dir.lead == "down" && player.sword == true)
		{
			if (target.x + target.width > striker.x && target.x < striker.x + striker.width && 
				target.y < striker.y + striker.height + (striker.height * .75) && target.y + target.height > striker.y * 1.15)
			{
				return true;
			}
		}
	return false;
}

function restart(){
	//empty the arrays.
	showers = [];
	toilets = [];
	blocks = [];
	gems = [];
	bullets = [];
	hearts = [];
	backgrounds = [];
	//set the room and player back to starting position.
	room = 3;
	player.x = sprtHtControl * 14;
	player.y =  sprtHtControl * 7;
	player.health = 100;
	//remove power ups from player.
	player.sword = false;
	player.plunger = false;
	player.boat = false;
	player.hammer = false;
	player.key = false;
	//regenerate the power up items and large objects.
	weapon.exist = true;
	plunger.exist = true;
	boat.exist = true;
	hammer.exist = true;
	key.exist = true;
	superToilet.exist = true;
	gemLock.exist = true;
	gemLock2.exist = true;
	//remove plunger image from player and revert to sword
	sword.img = crayonImages.sword;
	sword.swidth = 24;
	sword.sheight = 41;
	//Repopulate items and populate the room.
	populateItems();
	populate(room);
};


var isCollision = function(x, y, width, height, x2, y2, width2, height2, dir){
	if (dir == undefined)
	{
		if (x + width > x2 && x < x2 + width2 && y < y2 + height2 && y + height > y2)
		{
			return true;
		}
	}
	else
	{
		if (dir == "right")
		{
			if (x + width > x2 && x < x2 + (width2 * .75) && y < y2 + height2 && y + height > y2)
			{
				return true;
			}			
		}
		if (dir == "left")
		{
			if (x + (width * .75) > x2 && x < x2 + width2 && y < y2 + height2 && y + height > y2)
			{
				return true;
			}				
		}
		if (dir == "up")
		{
			if (x + width > x2 && x < x2 + width2 && y < y2 + height2 && y + (height * .75) > y2)
			{
				return true;
			}				
		}
		if (dir == "down")
		{
			if (x + width > x2 && x < x2 + width2 && y < y2 + (height2 * .75) && y + height > y2)
			{
				return true;
			}				
		}
	}
	return false;
};

var updateControls = function(e){
	if (e[37] == true)
	{
		dir.left = true;
		dir.lead = "left";
	}
	else
	{
		dir.left = false;
	}
	if (e[39] == true)
	{
		dir.right = true;
		dir.lead = "right";
	}
	else
	{
		dir.right = false;
	}
	if (e[40] == true)
	{
		dir.down = true;
		dir.lead = "down";
	}
	else
	{
		dir.down = false;
	}
	if (e[38] == true)
	{
		dir.up = true;
		dir.lead = "up";
	}
	else
	{
		dir.up = false;
	}
	if (e[32] == true)
	{
		dir.fire = true;
	}
	else
	{
		dir.fire = false;
	}
};

var drawBlocks = function(){
	for (i in blocks)
	{
		ctx.drawImage(blocks[i].img, blocks[i].sx, blocks[i].sy, blocks[i].swidth, blocks[i].sheight, blocks[i].x, blocks[i].y, blocks[i].width, blocks[i].height);
	}
};

var drawBackgrounds = function(){
	for (i in backgrounds)
	{
		ctx.drawImage(backgrounds[i].img, backgrounds[i].sx, backgrounds[i].sy, backgrounds[i].swidth, backgrounds[i].sheight, backgrounds[i].x.toFixed(0), backgrounds[i].y.toFixed(0), backgrounds[i].width, backgrounds[i].height);
	}
};

var drawGems = function(){
	for (i in gems)
	{
		if (gems[i].room == room)
			{
			gems[i].update();
			ctx.drawImage(gems[i].img, gems[i].sx, gems[i].sy, gems[i].swidth, gems[i].sheight, gems[i].x.toFixed(0), gems[i].y.toFixed(0), gems[i].width, gems[i].height);
			if (isCollision(gems[i].x, gems[i].y, gems[i].width, gems[i].height,
				player.x, player.y, player.width, player.height) == true)
			{
				gems.splice(i, 1);
			}
		}
	}
};

var drawHearts = function(){
	for (i in hearts)
	{
		if (hearts[i].room == room)
			{
			ctx.drawImage(hearts[i].img, hearts[i].sx, hearts[i].sy, hearts[i].swidth, hearts[i].sheight, hearts[i].x.toFixed(0), hearts[i].y.toFixed(0), hearts[i].width, hearts[i].height);
			if (isCollision(hearts[i].x, hearts[i].y, hearts[i].width, hearts[i].height,
				player.x, player.y, player.width, player.height) == true)
			{
				hearts.splice(i, 1);
				player.health = 100;
			}
		}
	}
};

var drawShower = function(){
	for (i in showers)
	{
		showers[i].update();
	}
};

var drawToilets = function(){
	for (i in toilets)
	{
		toilets[i].update();
	}
};

var drawBullets = function(){
	for (i in bullets)
	{
		bullets[i].update();
	}
};

function populateItems(){
	//gems
	gems.push(new gemClass(3, 4, 3), new gemClass(4, 4, 3), new gemClass(3, 11, 3), new gemClass(20, 3, 3), 
	new gemClass(12, 6, 17), new gemClass(26, 12, 7), new gemClass(25, 12, 7), new gemClass(17, 5, 23), 
	new gemClass(12, 8, 23), new gemClass(13, 6.5, 35), new gemClass(13.5, 8, 21), new gemClass(25, 12, 2), new gemClass(15, 7, 25),
	new gemClass(16, 2.5, 24), new gemClass(14.5, 6, 1), new gemClass(19.5, 5, 10), new gemClass(15.5, 6, 34), new gemClass(15, 6, 27),
	new gemClass(14, 7, 32), new gemClass(9.5, 7, 12));
	//hearts
	hearts.push(new heartClass(3, 7, 33), new heartClass(4, 7, 13), new heartClass(12, 6, 11), new heartClass(14, 6, 15));
}

populateItems();
