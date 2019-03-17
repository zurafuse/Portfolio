//Prepare the Music!
function setSource() {
	var myMusic = new Audio("audio/music.mp3");
	myMusic.loop = true;
}

function mediaPlaybackRequiresUserGesture() {
  // test if play() is ignored when not called from an input event handler
  var myMusic = new Audio("audio/music.mp3");
  myMusic.play();
  return myMusic.paused;
}

function removeBehaviorsRestrictions() {
  var myMusic = new Audio("audio/music.mp3");
  myMusic.load();
  window.removeEventListener('keydown', removeBehaviorsRestrictions);
  window.removeEventListener('mousedown', removeBehaviorsRestrictions);
  window.removeEventListener('touchstart', removeBehaviorsRestrictions);
  setTimeout(setSource, 1000);
}

var origState = "default";

// touch event handlers
// Set up touch events for mobile, etc
// touch event handlers
// Set up touch events for mobile, etc

	window.addEventListener("touchstart", function (e) {
		if (yosef.gamestate == "title")
		{
			if (mediaPlaybackRequiresUserGesture()) {
			window.addEventListener('keydown', removeBehaviorsRestrictions);
			window.addEventListener('mousedown', removeBehaviorsRestrictions);
			window.addEventListener('touchstart', removeBehaviorsRestrictions);
			} else {
			setSource();
			}
		}
		getTouchPos(canvas, e);
	}, false);
	
	window.addEventListener("touchend", function (e) {
	endTouchPos(canvas, e);
	}, false);


// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
	if (canvasBad == false)
	{	
		for (i in touchEvent.touches)
		{	
			var thisXPos = touchEvent.touches[i].clientX;
			var thisYPos = touchEvent.touches[i].clientY;
		
				//Listen for the user touching the arrow keys 
			if (thisXPos < yosefUI.joyStick.left.x + (yosefUI.joyStick.left.width * 1.3) && thisXPos > yosefUI.joyStick.left.x * 0.7 &&
				thisYPos > yosefUI.joyStick.left.y - (yosefUI.joyStick.left.height * 0.7) && thisYPos < yosefUI.joyStick.left.y + (yosefUI.joyStick.left.height * 0.7))
			{
				player.controller.right = false;
				player.controller.left = true;
				player.dir = "left";
			}
			
			if (thisXPos < yosefUI.joyStick.right.x + (yosefUI.joyStick.right.width * 1.3) && thisXPos > yosefUI.joyStick.right.x * 0.7 &&
				thisYPos > yosefUI.joyStick.right.y - (yosefUI.joyStick.right.height * 0.7) && thisYPos < yosefUI.joyStick.right.y + (yosefUI.joyStick.right.height * 0.7))
			{
				player.controller.right = true;
				player.controller.left = false;
				player.dir = "right";
			}
			
			if (thisXPos < yosefUI.joyStick.up.x + (yosefUI.joyStick.up.width * 0.8) && thisXPos > yosefUI.joyStick.up.x - (yosefUI.joyStick.up.width * 0.8) &&
				thisYPos > yosefUI.joyStick.up.y * 0.8 && thisYPos < yosefUI.joyStick.up.y + (yosefUI.joyStick.up.height * 1.2))
			{
				player.controller.up = true;
				player.dir = "up";
				
			}
			
			if (thisXPos < yosefUI.joyStick.down.x + (yosefUI.joyStick.down.width * 1.5) && thisXPos > yosefUI.joyStick.down.x - (yosefUI.joyStick.down.width * .5) &&
				thisYPos > yosefUI.joyStick.down.y - (yosefUI.joyStick.down.height * .5) && thisYPos < yosefUI.joyStick.down.y + (yosefUI.joyStick.down.height * 1.5))
			{
				player.controller.down = true;
				player.dir = "down";
			}
			
				//detect user input on title screen
					if (yosef.gamestate == "title")
					{
						setTimeout(function(){introCredit = false;}, 5000);
						yosef.gamestate = "play";
						time = Date.now();
					}
		}
	}
}
	
function endTouchPos(canvasDom, touchEvent) {
	if (canvasBad == false)
	{	
		for (i in touchEvent.changedTouches)
		{	
			var thisXPos = touchEvent.changedTouches[i].clientX;
			var thisYPos = touchEvent.changedTouches[i].clientY;
		
			if (thisXPos < yosefUI.joyStick.left.x + (yosefUI.joyStick.left.width * 1.3) && thisXPos > yosefUI.joyStick.left.x * 0.7 &&
				thisYPos > yosefUI.joyStick.left.y - (yosefUI.joyStick.left.height * 0.7) && thisYPos < yosefUI.joyStick.left.y + (yosefUI.joyStick.left.height * 0.7))
			{
				player.controller.left = false;
			}
			
			if (thisXPos < yosefUI.joyStick.right.x + (yosefUI.joyStick.right.width * 1.3) && thisXPos > yosefUI.joyStick.right.x * 0.7 &&
				thisYPos > yosefUI.joyStick.right.y - (yosefUI.joyStick.right.height * 0.7) && thisYPos < yosefUI.joyStick.right.y + (yosefUI.joyStick.right.height * 0.7))
			{
				player.controller.right = false;
			}
			
			if (thisXPos < yosefUI.joyStick.up.x + (yosefUI.joyStick.up.width * 0.8) && thisXPos > yosefUI.joyStick.up.x - (yosefUI.joyStick.up.width * 0.8) &&
				thisYPos > yosefUI.joyStick.up.y * 0.8 && thisYPos < yosefUI.joyStick.up.y + (yosefUI.joyStick.up.height * 1.2))
			{
				player.controller.up = false;
				jumpTrigger = 0;
				jump = false;
			}
			
			if (thisXPos < yosefUI.joyStick.down.x + (yosefUI.joyStick.down.width * 1.5) && thisXPos > yosefUI.joyStick.down.x - (yosefUI.joyStick.down.width * .5) &&
				thisYPos > yosefUI.joyStick.down.y - (yosefUI.joyStick.down.height * .5) && thisYPos < yosefUI.joyStick.down.y + (yosefUI.joyStick.down.height * 1.5))
			{
				player.controller.down = false;
			}
		}
	}
}