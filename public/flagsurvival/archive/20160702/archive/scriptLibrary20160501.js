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
img.src = "player_stationary_front.png";
img2.src = "player_stationary_back.png";
img3.src = "player_stationary_right.png";
img4.src = "player_stationary_left.png";
canvas.width = 800;
canvas.height = 500;

var mySprite = {
    x: 375,
    y: 188,
    width: 50,
    height: 50,
    speed: 200,
    color: '#FF0000'
};

var keysDown = {};
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});

function update(mod) {
    if (37 in keysDown) {
    mySprite.x -= mySprite.speed * mod;
	direction = "left";
    }
    if (38 in keysDown) {
    mySprite.y -= mySprite.speed * mod;
	direction = "up";
    }
    if (39 in keysDown) {
    mySprite.x += mySprite.speed * mod;
	direction = "right";
    }
    if (40 in keysDown) {
    mySprite.y += mySprite.speed * mod;
	direction = "front";
    }
}

function render() {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = mySprite.color;
	if (direction == "front"){
		ctx.drawImage(img, mySprite.x, mySprite.y, mySprite.width, mySprite.height);
	}
	if (direction == "up"){
		ctx.drawImage(img2, mySprite.x, mySprite.y, mySprite.width, mySprite.height);
	}
	if (direction == "right"){
		ctx.drawImage(img3, mySprite.x, mySprite.y, mySprite.width, mySprite.height);
	}	
	if (direction == "left"){
		ctx.drawImage(img4, mySprite.x, mySprite.y, mySprite.width, mySprite.height);
	}
}

function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
	requestAnimFrame(run)
}

var time = Date.now();
requestAnimFrame(run)