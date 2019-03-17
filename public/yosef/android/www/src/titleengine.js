function TitleUpdate(mod) {
	yosef.title.blinkText();

}

function TitleRender() {
	//clear canvas
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canvas.width, canvas.height);
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canvas.width, canvas.height);
	yosef.title.draw();
}

