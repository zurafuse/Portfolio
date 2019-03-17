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