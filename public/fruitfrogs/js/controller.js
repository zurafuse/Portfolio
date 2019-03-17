var origState = "default";

$(window).scroll(function() {
   if ($(document).scrollTop() >= 1) {
      $("html").css({
         "touch-action": "auto"}
      );
   } else {
      $("html").css({
         "touch-action": "pan-down"
      });
   }
});

function noscroll() {
  window.scrollTo( 0, 0 );
}

// add listener to disable scroll
window.addEventListener('scroll', noscroll);

// Remove listener to disable scroll
window.removeEventListener('scroll', noscroll);

// touch event handlers
// Set up touch events for mobile, etc
// touch event handlers
// Set up touch events for mobile, etc

	window.addEventListener("touchstart", function (e) {
		getTouchPos(canvas, e);
	}, false);
	
	window.addEventListener("touchmove", function (e) {
		moveTouchPos(canvas, e);
	}, false);
	
	window.addEventListener("touchend", function (e) {
	endTouchPos(canvas, e);
	}, false);


// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {	
		for (i in touchEvent.touches)
		{	
			fruitFrogs.isTouchScreen = true;
			var thisXPos = touchEvent.touches[i].clientX;
			var thisYPos = touchEvent.touches[i].clientY;
			touchMonster(bronsters, thisXPos, thisYPos);
			frogSeeYou(frogs, thisXPos, thisYPos);
			touchFruit(fruit, thisXPos, thisYPos, false);
		}
}

function moveTouchPos(canvasDom, touchEvent) {	
		for (i in touchEvent.touches)
		{	
			fruitFrogs.isTouchScreen = true;
			var thisXPos = touchEvent.touches[i].clientX;
			var thisYPos = touchEvent.touches[i].clientY;
			touchMonster(bronsters, thisXPos, thisYPos);
			frogSeeYou(frogs, thisXPos, thisYPos);
			touchFruit(fruit, thisXPos, thisYPos, false);
		}
}
	
function endTouchPos(canvasDom, touchEvent) {
		for (i in touchEvent.changedTouches)
		{	
			var thisXPos = touchEvent.changedTouches[i].clientX;
			var thisYPos = touchEvent.changedTouches[i].clientY;
			touchFruit(fruit, thisXPos, thisYPos, true);
		}
}

if (fruitFrogs.isTouchScreen == false)
{
	window.addEventListener("click", function (e) {
		var clientX = e.pageX;
		var clientY = e.pageY;
		touchMonster(bronsters, clientX, clientY);
		frogSeeYou(frogs, clientX, clientY);	
		touchFruit(fruit, clientX, clientY, false);
	}, false);
	

	window.addEventListener("mousemove", function (e) {
		var clientX = e.pageX;
		var clientY = e.pageY;
		touchMonster(bronsters, clientX, clientY);
		frogSeeYou(frogs, clientX, clientY);	
		touchFruit(fruit, clientX, clientY, false);
	}, false);
}