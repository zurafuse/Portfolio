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
var img = new Image();
img.src = "dude.png";
canvas.width = 800;
canvas.height = 600;

var mySprite = {
    x: 10,
    y: 10,
    width: 40,
    height: 40,
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
    }
    if (38 in keysDown) {
    mySprite.y -= mySprite.speed * mod;
    }
    if (39 in keysDown) {
    mySprite.x += mySprite.speed * mod;
    }
    if (40 in keysDown) {
    mySprite.y += mySprite.speed * mod;
    }
}

function render() {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = mySprite.color;
    ctx.drawImage(img, mySprite.x, mySprite.y, mySprite.width, mySprite.height);


}

function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
	requestAnimFrame(run)
}

var time = Date.now();
requestAnimFrame(run)