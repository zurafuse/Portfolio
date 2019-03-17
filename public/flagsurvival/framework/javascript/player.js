//define the main player object
var mySprite = {
	sx: 0,
	sy: 0,
	swidth: 50,
	sheight: 50,
    x: (canvas.width / 2) - spriteSizes,
    y: (canvas.height / 2) - spriteSizes,
    width: spriteSizes,
    height: spriteSizes,
    speed: canvas.width * 0.134,
    color: '#007000'
};
var bulxPos = mySprite.x + (0.444 * spriteSizes);
var bulyPos = mySprite.y + (0.388 * spriteSizes);
