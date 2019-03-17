var Animation = window.requestAnimationFrame;

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * .9;
var context = canvas.getContext("2d");
var FirstNumber = 0;
var LastNumber = 0;
var GameStatus = "title";
var answerBlocks = [];
var restartCount = 90;

var answerBlock = function (order) {
	if (order == 1){
		this.x = canvas.width * 0.1;
		this.y = canvas.height * 0.1;
	}
	else if (order == 2){
		this.x = canvas.width * 0.1;
		this.y = canvas.height * 0.3;
	}
	
	else if (order == 3){
		this.x = canvas.width * 0.1;
		this.y = canvas.height * 0.5;
	}
	
	else if (order == 4){
		this.x = canvas.width * 0.1;
		this.y = canvas.height * 0.7;
	}
	
	else if (order == 5){
		this.x = canvas.width * 0.25;
		this.y = canvas.height * 0.85;
	}
	
	else if (order == 6){
		this.x = canvas.width * 0.45;
		this.y = canvas.height * 0.85;
	}
	
	else if (order == 7){
		this.x = canvas.width * 0.65;
		this.y = canvas.height * 0.85;
	}
	
	else if (order == 8){
		this.x = canvas.width * 0.8;
		this.y = canvas.height * 0.1;
	}
	
	else if (order == 9){
		this.x = canvas.width * 0.8;
		this.y = canvas.height * 0.3;
	}
	
	else if (order == 10){
		this.x = canvas.width * 0.8;
		this.y = canvas.height * 0.5;
	}
	
	else {
		this.x = canvas.width * 0.8;
		this.y = canvas.height * 0.7;
	}
	
	this.order = order;
	this.width = 65;
	this.height = 65;
	this.number = FirstNumber * (order - 1);
	this.draw = () => {
		context.beginPath();
		context.fillStyle = "blue";
		context.lineWidth = 3;
		context.rect(this.x, this.y, this.width, this.height);
		context.stroke();
		context.fill();
		context.lineWidth = 2;
		context.font = "35pt Helvetica";
		context.fillStyle = "white";
		context.strokeStyle = "black";
		context.fillText(this.number, this.x + (this.width * 0.15), this.y + (this.height * 0.7));
		context.strokeText(this.number, this.x + (this.width * 0.15), this.y + (this.height * 0.7));	
		context.fillStyle = "black";
		context.closePath();
	};
	this.update = () => {
		this.draw();
	};
};

var NumberBox = function(x, y, number){
	this.x = x;
	this.y = y;
	this.number = number;
	this.width = 100;
	this.height = 100;
};
var NumberBoxes = [];

for (var i = 2; i < 10; i++){
	var xbox;
	var ybox;
	if (i < 6){
		ybox = 200;
	}
	else {
		ybox = 350;
	}
	
	if (i == 2 || i ==6)
	{
		xbox = 150;
	}
	else if (i ==3 || i == 7)
	{
		xbox = 300;
	}
	
	else if (i == 4 || i == 8)
	{
		xbox = 450;
	}
	
	else
	{
		xbox = 600;
	}
	
	NumberBoxes.push(new NumberBox(xbox, ybox, i));
};

document.addEventListener("mousedown", function(clickevent){
	var x = clickevent.clientX;
	var y = clickevent.clientY;
	if (GameStatus == "title")
	{
		NumberBoxes.forEach(function(box){
			if (box.x + box.width > x && box.x < x && box.y + box.height > y && box.y < y)
			{
				GameStatus = "game";
				controller.fire = false;
				Player.fireReset = true;
				FirstNumber = box.number;
				questionBlock.questionSet(FirstNumber, LastNumber);
				answerBlocks = [];
				populateAnswerBlocks();
			}
		});
	}
});

var restartGame = function(){
	Player.fireReset = true;
	controller.fire = false;
	FirstNumber = 0;
	LastNumber = 0;
	GameStatus = "title";
	answerBlocks = [];
	Player.health = 4;
	restartCount = 90;
	document.addEventListener("mousedown", function(clickevent){
		var x = clickevent.clientX;
		var y = clickevent.clientY;
		Player.fireReset = true;
		controller.fire = false;
		if (GameStatus == "title")
		{
			NumberBoxes.forEach(function(box){
				if (box.x + box.width > x && box.x < x && box.y + box.height > y && box.y < y)
				{
					GameStatus = "game";
					FirstNumber = box.number;
					questionBlock.questionSet(FirstNumber, LastNumber);
					answerBlocks = [];
					populateAnswerBlocks();
				}
			});
		}
	});	
};

var TitleUpdate = () => {
	context.beginPath();
	context.font = "30px Arial";
	context.fillText("PLEASE SELECT A NUMBER TO BEGIN", 150, canvas.height * 0.1);
	context.closePath();
	
	NumberBoxes.forEach(function(box){
		context.beginPath();
		context.lineWidth = 2;
		context.rect(box.x, box.y, box.width, box.height);
		context.stroke();
		context.font = "30px Arial";
		context.fillText(box.number, box.x + box.width *0.4, box.y + box.height * 0.5);
		context.closePath();
	});
};

var isColl = (obj1, obj2) => {
	var collBool = false;
	if (obj1.x + obj1.width > obj2.x && obj1.x < obj2.x + obj2.width)
	{
		if (obj1.y + obj1.height > obj2.y && obj1.y < obj2.y + obj2.height)
		{
			collBool = true;
		}
	}
	return collBool;
};

var Images = {
	player: new Image(),
	heart: new Image(),
	heart2: new Image(),
	loadImages: function(){
		this.player.src = "images/charset.png";
		this.heart.src = "images/heart1.png";
		this.heart2.src = "images/heart2.png";
	}
};
Images.loadImages();

var controller = {
	left: false,
	right: false,
	down: false,
	up: false,
	fire: false
};

var questionBlock = {
	x: canvas.width * 0.45,
	y: canvas.height * 0.15,
	width: canvas.width * 0.15,
	height: canvas.width * 0.05,
	num1: FirstNumber,
	num2: LastNumber,
	answer: Math.floor(this.num1 * this.num2),	
	questionSet: function(num1, num2){
		this.num1 = num1;
		this.num2 = num2;
		this.answer = Math.floor(num1 * num2);
		answerBlocks = [];
		populateAnswerBlocks();
	},
	submitAnswer: function(number){
		if (controller.fire == true)
		{
			controller.fire = false;
			Player.fireReset = false;
		}
		
		bullets = [];
		if (number != this.answer){
			if (Player.health <= 0){
				GameStatus = "gameover";
			}
			else {
				Player.health--;
			}
		}
		else{
			console.log("Congratulations!");
		}
		LastNumber++;
		this.questionSet(FirstNumber, LastNumber);
	},
	update: function(){
		context.beginPath();
		context.lineWidth = "6";
		context.strokeStyle = "black";
		context.rect(this.x, this.y, this.width, this.height);
		context.stroke();
		context.closePath();
		context.font = "30px Arial";
		context.fillText(this.num1 + " X " + this.num2, this.x + (this.width * 0.29), this.y + (this.height * 0.6));		
	}
	
};
questionBlock.questionSet(2, 3);


function populateAnswerBlocks () {
	for (var i = 1; i < 12; i++){
		answerBlocks.push(new answerBlock(i));
	}
	for (var i = 0; i < answerBlocks.length; i++){
		var newIndex = Math.floor(Math.random() * 10);
		var oldItem = answerBlocks[i].number;
		var newItem = answerBlocks[newIndex].number;
		answerBlocks[i].number = newItem;
		answerBlocks[newIndex].number = oldItem;
	}
};

var answerUpdate = () => {
	answerBlocks.forEach((block) => {block.update();});
};

var player = function(){
	this.img = Images.player;
	this.dir = "down";
	this.sx = 0;
	this.sy = 0;
	this.swidth = 100;
	this.sheight = 100;
	this.x = canvas.width * 0.5;
	this.y = canvas.height * 0.4;
	this.width = 50;
	this.height = 50;
	this.health = 4;
	this.fireReset = false;
	this.speed = canvas.width * .006;
};

player.prototype.draw = function(){
		context.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	};
	
player.prototype.move = function(){
		if (controller.right == true){
			if (this.x + this.width < canvas.width){
				this.x+=this.speed;
				this.dir = "right";
				this.sx = 201;
			}
		}
		if (controller.left == true){
			if (this.x > 0){
				this.x-=this.speed;
				this.dir = "left";
				this.sx = 301;
			}
		}
		if (controller.up == true){
			if (this.y > 0){
				this.y-=this.speed;
				this.dir = "up";
				this.sx = 101;
			}
		}
		if (controller.down == true){
			if (this.y + this.height < canvas.height){
				this.y+=this.speed;
				this.dir = "down";
				this.sx = 0;
			}
		}
		if (controller.fire == true){
			var bulX = this.x;
			var bulY = this.y;
			
			switch (this.dir){
				case "up":
					bulX += this.width *.5;
					break;
				case "down":
					bulX += this.width *.5;
					bulY += this.height *.5;
					break;
				case "right":
					bulY += this.height *.3;
					bulX += this.width;
					break;
				case "left":
					bulY += this.height *.3;
					break;
			}
			
			bullets.push(new bullet(bulX, bulY, this.dir));
		}
	};
	
player.prototype.update = function(){
			for (var i = 0; i < answerBlocks.length; i++){
				if (isColl(Player, answerBlocks[i])){
					var thisAnswer = answerBlocks[i].number;
					this.x = canvas.width * 0.5;
					this.y = canvas.height * 0.4;	
					answerBlocks.splice(i, 1);
					questionBlock.submitAnswer(thisAnswer);
				}
			}
			this.move();
			this.draw();
		};
	
var Player = new player();

var bullet = function(x, y, dir){
	this.dir = dir;
	this.x = x;
	this.y = y;
	this.speed = canvas.width * 0.01;
	this.width = 10;
	this.height = 10;
};
bullet.prototype.draw = function(){
		context.beginPath();
		context.strokeStyle = "blue";
		context.arc(this.x, this.y, 10, 0, 2 * Math.PI);
		context.stroke();
	};
bullet.prototype.move = function(){
		switch (this.dir){
			case "right":
				this.x+=this.speed;
				break;
			case "left":
				this.x-=this.speed;
				break;
			case "up":
				this.y-=this.speed;
				break;
			case "down":
				this.y+=this.speed;
				break;
		}
	};
	
bullet.prototype.update = function(){
	for (var i = 0; i < answerBlocks.length; i++){
		if (isColl(this, answerBlocks[i])){
			var thisAnswer = answerBlocks[i].number;
			this.x = canvas.width * 0.5;
			this.y = canvas.height * 0.4;	
			answerBlocks.splice(i, 1);
			questionBlock.submitAnswer(thisAnswer);
		}
	}
		this.move();
		this.draw();
	};

var bullets = [];

document.addEventListener("keydown", function(action){
	if(action.code == "ArrowRight"){
		controller.right = true;
		controller.left = false;
	}
	else if (action.code == "ArrowLeft"){
		controller.left = true;
		controller.right = false;
	}
	else if (action.code == "ArrowDown"){
		controller.down = true;
		controller.up = false;
	}
	else if (action.code == "ArrowUp"){
		controller.up = true;
		controller.down = false;
	}
	else if (action.code == "Space"){
		if (Player.fireReset == true)
		{
			controller.fire = true;
		}
	}
});

document.addEventListener("keyup", function(action){
	if(action.code == "ArrowRight"){
		controller.right = false;
	}
	else if (action.code == "ArrowLeft"){
		controller.left = false;
	}
	else if (action.code == "ArrowDown"){
		controller.down = false;
	}
	else if (action.code == "ArrowUp"){
		controller.up = false;
	}
	else if (action.code == "Space"){
		Player.fireReset = true;
		controller.fire = false;
	}
});

var bulletUpdate = function(){
	for (var i = 0; i < bullets.length; i++){
		bullets[i].update();
	}
};

function drawHearts(){
	if (Player.health > 0){
		context.drawImage(Images.heart, 0, 0, 1234, 1024, canvas.width * 0.35, canvas.height * 0.025, 50, 50);
	}
	else{
		context.drawImage(Images.heart2, 0, 0, 1234, 1024, canvas.width * 0.35, canvas.height * 0.025, 50, 50);
	}
	
	if (Player.health > 1){
		context.drawImage(Images.heart, 0, 0, 1234, 1024, canvas.width * 0.45, canvas.height * 0.025, 50, 50);
	}
	else{
		context.drawImage(Images.heart2, 0, 0, 1234, 1024, canvas.width * 0.45, canvas.height * 0.025, 50, 50);
	}
	
	if (Player.health > 2){
		context.drawImage(Images.heart, 0, 0, 1234, 1024, canvas.width * 0.55, canvas.height * 0.025, 50, 50);
	}
	else{
		context.drawImage(Images.heart2, 0, 0, 1234, 1024, canvas.width * 0.55, canvas.height * 0.025, 50, 50);
	}
	
	if (Player.health > 3){
		context.drawImage(Images.heart, 0, 0, 1234, 1024, canvas.width * 0.65, canvas.height * 0.025, 50, 50);
	}
	else{
		context.drawImage(Images.heart2, 0, 0, 1234, 1024, canvas.width * 0.65, canvas.height * 0.025, 50, 50);
	}
	
};

var gameoverUpdate = () => {
		context.beginPath();
		context.font = "35pt Helvetica";
		context.fillStyle = "red";
		context.strokeStyle = "black";
		context.fillText("GAME OVER", canvas.width * 0.3, canvas.height * 0.4);
		context.fillStyle = "black";
		context.closePath();
		restartCount--;
		if (restartCount < 0)
		{
			restartGame();
		}
};
		
winnerUpdate = () => {
		context.beginPath();
		context.font = "35pt Helvetica";
		context.fillStyle = "green";
		context.strokeStyle = "black";
		context.fillText("CONGRATULATION! You won!", canvas.width * 0.3, canvas.height * 0.4);
		context.fillStyle = "black";
		context.closePath();
		restartCount--;
		if (restartCount < 0)
		{
			restartGame();
		}	
};

var Update = function(){
	if (LastNumber > 10){
		GameStatus = "winner";
	}

	context.clearRect(0,0,canvas.width, canvas.height);
	if (GameStatus == "title")
	{
		TitleUpdate();
	}
	else if (GameStatus == "gameover")
	{
		gameoverUpdate();
	}
	else if (GameStatus == "winner")
	{
		winnerUpdate();
	}
	
	else
	{
		drawHearts();
		questionBlock.update();
		answerUpdate();
		Player.update();
		bulletUpdate();
	}
	Animation(Update);
};

Update();

