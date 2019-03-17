var room = 3;

function blockLine(dir, type)
{
	var sx = 0;
	var sy = 0;
	if (type == "tree")
	{
		sx = 100;		
	}
	if (type == "tree2")
	{
		sy = 200;
		sx = 200;		
	}
	else if (type == "stone1")
	{
		sx = 0; sy = 200;
	}
	else if (type == "stone2")
	{
		sx = 100; sy = 200;		
	}
	
	if (dir == "west")
	{
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, sx, sy, 100, 100, 0, i, sprtHtControl, sprtHtControl));			
		}
	}
	else if (dir == "east")
	{
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, sx, sy, 100, 100, gridWidth - 1, i, sprtHtControl, sprtHtControl));			
		}
	}
	else if (dir == "north")
	{
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, sx, sy, 100, 100, i, 0, sprtHtControl, sprtHtControl));			
		}
	}
	else if (dir == "south")
	{
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, sx, sy, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl));			
		}
	}
}

function populate(room){
	showers = [];
	toilets = [];
	chickens = [];
	blocks = [];
	backgrounds = [];
	bullets = [];
	if (room == 0)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));	
		//path
		for (i = 4; i < 29; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 12, sprtHtControl, sprtHtControl));
		}
		for (i = 0; i < 11; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 3, i, sprtHtControl, sprtHtControl));
		}
		//tree line
		blockLine("west", "tree");
		blockLine("south", "tree");
		//bad guys
		toilets.push(new toiletClass(4, 9, "right"), new toiletClass(10, 15, "left"));
	}
	if (room == 1)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		blockLine("south", "tree");
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 2, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7.5, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 12.5, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 23, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 3, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 21, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 24, 9, sprtHtControl, sprtHtControl));
		//path
		for (i = 0; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 12, sprtHtControl, sprtHtControl));
		}
		for (i = 6; i < 12; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 14, i, sprtHtControl, sprtHtControl));
		}
		for (i = 14; i < 29; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 6, sprtHtControl, sprtHtControl));
		}		
	}
	if (room == 2)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		blockLine("south", "tree");
		//stone walls
		blockLine("east", "stone2");
		//path
		for (i = 0; i < 16; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 6, sprtHtControl, sprtHtControl));
		}
		for (i = 0; i < 7; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 15, i, sprtHtControl, sprtHtControl));
		}
		showers.push(new showerClass(8, 6));
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 3, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 9, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 15, 9, sprtHtControl, sprtHtControl));
	}		
	if (room == 3)
	{
		//ROOM 3
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));
		//road
		for (i = 0; i < 14; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 14, i, sprtHtControl, sprtHtControl));
		}	
		//lock
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 7, 10, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 7, 11, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 7, 12, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 7, 13, sprtHtControl, sprtHtControl, "lock"));
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 19, 10, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 20, 9, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 21, 9, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 22, 9, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 10, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 11, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 12, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 13, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 18, 11, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 18, 12, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 18, 13, sprtHtControl, sprtHtControl, "rock"));
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 6, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 1, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 2, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 6, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 3, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 9, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 10, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 17, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 16, 4, sprtHtControl, sprtHtControl));
		blockLine("south", "tree");
		//stone walls
		blockLine("east", "stone1");
		blockLine("west", "stone1");
	}
	if (room == 4)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		blockLine("south", "tree");
		blockLine("west", "tree");
		blockLine("north", "stone2");
		octaforce.message = true;
		setTimeout(function(){octaforce.message = false;}, 4500);
		//blocks
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 11, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 13, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 14, sprtHtControl, sprtHtControl));
	}
	if (room == 5)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		blockLine("south", "tree");
		blockLine("north", "tree2");
		//blocks
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 11, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 13, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 14, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 0, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 11, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 13, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 28, 14, sprtHtControl, sprtHtControl));
		//water
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 1, 8.7, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 1, 9, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 1, 10, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 1, 11, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 1, 12, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 1, 13, sprtHtControl, sprtHtControl, "water"));
		for (i = 2; i < 28; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 13, sprtHtControl, sprtHtControl, "water"));
		}
		//bad guys
		showers.push(new showerClass(5, 6));
		toilets.push(new toiletClass(8, 2, "left"), new toiletClass(8, 6, "right"), new toiletClass(8, 9, "left"));
	}
	if (room == 6)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		blockLine("south", "tree");
		//tree
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 13, sprtHtControl, sprtHtControl, "tree"));
		//water
		for (i = 1; i < 28; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 13, sprtHtControl, sprtHtControl, "water"));
		}
		//blocks
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 0, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 11, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 12, sprtHtControl, sprtHtControl));
		//mushrooms
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 4, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 7, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 10, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 18, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 21, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 24, 2, sprtHtControl, sprtHtControl));
		
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 4, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 7, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 10, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 18, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 21, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 24, 10, sprtHtControl, sprtHtControl));
		//path
		for (i = 0; i < 29; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 5.5, sprtHtControl, sprtHtControl));
		}
	}
	if (room == 7)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));	
		//path
		for (i = 0; i < 14; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 5.5, sprtHtControl, sprtHtControl));
		}		
		//trees
		blockLine("south", "tree");
		blockLine("east", "tree");
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 23, 13, sprtHtControl, sprtHtControl));
				
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 27, 10, sprtHtControl, sprtHtControl));
				
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 12, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 11, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 10, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 24, 10, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 25, 10, sprtHtControl, sprtHtControl, "rock"));	
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 26, 10, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 3, 3, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 16, 6, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 4, 10, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 19, 8, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 25, 3, sprtHtControl, sprtHtControl, "rock"));	
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 26, 7, sprtHtControl, sprtHtControl, "rock"));		
		//bad guys
		showers.push(new showerClass(19, 5.5));
	}
	if (room == 10)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("west", "tree");
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 15, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 23, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 7.5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 15, 7.5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 23, 7.5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 15, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 23, 12, sprtHtControl, sprtHtControl));
		//path
		for (i = 0; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 3, i, sprtHtControl, sprtHtControl));
		}
		//bad guys
		showers.push(new showerClass(10, 3), new showerClass(10, 7.5), new showerClass(10, 12));
	}
	if (room == 11)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//water
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 11, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 12, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 13, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 5, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 6, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 7, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 11, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 12, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 13, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 7, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 6, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 5, sprtHtControl, sprtHtControl, "water"));
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 0, sprtHtControl, sprtHtControl));
	}
	if (room == 12)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 2, 3, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 7, 11, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 24, 11.5, sprtHtControl, sprtHtControl, "rock"));
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 6, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 11, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 13, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 14, sprtHtControl, sprtHtControl));
		
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 12, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 22, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 12, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 22, 9, sprtHtControl, sprtHtControl));
		for (i = 0; i < gridWidth; i++)
		{
			if (i < 13 || i > 16)
			{
				blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 0, sprtHtControl, sprtHtControl));
			}
		}
		//path
		for (i = 0; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 15, i, sprtHtControl, sprtHtControl));
		}
		toilets.push(new toiletClass(6, 7, "right"));
	}
	if (room == 13)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//stone wall
		blockLine("west", "stone1");
		blocks.push(new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 28, 14, sprtHtControl, sprtHtControl));
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 4, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 5, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 6, 4, sprtHtControl, sprtHtControl, "rock"));
		//path
		for (i = 6; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 14, i, sprtHtControl, sprtHtControl));
		}
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 101, 0, 100, 100, 9, 6, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 101, 0, 100, 100, 9, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 6, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 201, 201, 100, 100, 6, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 201, 201, 100, 100, 21, 9, sprtHtControl, sprtHtControl));

	}
	if (room == 14)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));
		//blocks
		
		//path
		for (i = 0; i < 6; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 14, i, sprtHtControl, sprtHtControl));
		}
		for (i = 14; i < 29; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 6, sprtHtControl, sprtHtControl));
		}
		//bad guys
		showers.push(new showerClass(22, 5));
		toilets.push(new toiletClass(2, 4, "right"), new toiletClass(7, 12, "right"));
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 201, 201, 100, 100, 21, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 201, 201, 100, 100, 11, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 201, 201, 100, 100, 10, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 22, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 3, 3, sprtHtControl, sprtHtControl));
		blockLine("south", "tree");
	}
	if (room == 15)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("south", "stone2");
		//path
		for (i = 0; i < 29; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 6, sprtHtControl, sprtHtControl));
		}
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 3, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 12, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 22, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 3, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 12, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 22, 9, sprtHtControl, sprtHtControl));		
	}
	if (room == 16)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));	
		//blocks
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 200, 100, 100, 0, 14, sprtHtControl, sprtHtControl));
		//bad guy
		toilets.push(new toiletClass(8, 12, "right"));		
		//path
		for (i = 0; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 6, sprtHtControl, sprtHtControl));
		}
		for (i = 0; i < 6; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 14, i, sprtHtControl, sprtHtControl));
		}
		//purple trees
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 3, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 7, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 18, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 22, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 4, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 8, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 15, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 19, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 9, 17, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 16, 12, sprtHtControl, sprtHtControl));
	}
	if (room == 17)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//water
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 11, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 12, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 13, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 5, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 6, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 7, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 11, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 12, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 13, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 7, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 6, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 5, sprtHtControl, sprtHtControl, "water"));
		//trees
		blockLine("east", "tree");
	}
	if (room == 20)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//road
		for (i = 2; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, gridWidth - 1, i, sprtHtControl, sprtHtControl));
		}
		//trees
		blockLine("west", "tree");
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 0, sprtHtControl, sprtHtControl, "water"));
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 1, sprtHtControl, sprtHtControl, "water"));
		}
		//path
		for (i = 6; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 3, i, sprtHtControl, sprtHtControl));
		}
		for (i = 3; i < 28; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 6, sprtHtControl, sprtHtControl));
		}
		//bad guys
		showers.push(new showerClass(8, 3), new showerClass(8, 8));
		toilets.push(new toiletClass(2, 6, "right"));
		
	}
	if (room == 21)
	{
		//desert
		backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 8, 5, 12 * sprtHtControl, 7 * sprtHtControl));		
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 0, sprtHtControl, sprtHtControl, "water"));
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 1, sprtHtControl, sprtHtControl, "water"));
		}
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 11, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 13, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 28, 14, sprtHtControl, sprtHtControl));
	}
	if (room == 22)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 0, sprtHtControl, sprtHtControl, "water"));
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 1, sprtHtControl, sprtHtControl, "water"));
		}
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 11, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 13, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 14, sprtHtControl, sprtHtControl));
		for (i = 1; i < gridWidth; i++)
		{
			if (i < 13 || i > 16)
			{
				blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 14, sprtHtControl, sprtHtControl));
			}
		}
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 13, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 22, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 13, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 22, 9, sprtHtControl, sprtHtControl));
		//locks
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 0, 7, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 0, 8, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 0, 6, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 0, 9, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 14, 14, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 15, 14, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 13, 14, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 16, 14, sprtHtControl, sprtHtControl, "lock"));
		
	}	
	if (room == 23)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 14, sprtHtControl, sprtHtControl));		
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 0, sprtHtControl, sprtHtControl, "water"));
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 1, sprtHtControl, sprtHtControl, "water"));
		}
		showers.push(new showerClass(4, 5));
		toilets.push(new toiletClass(8, 2, "left"), new toiletClass(12, 5, "right"), new toiletClass(18, 8, "left"), new toiletClass(1.5, 11, "right"));
		//blocks
		blocks.push(new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 8, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 8, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 9, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 9, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 14, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 14, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 15, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 15, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 20, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 20, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 21, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 21, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 8, 8, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 8, 9, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 9, 8, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 9, 9, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 14, 8, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 14, 9, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 15, 8, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 15, 9, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 20, 8, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 20, 9, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 21, 8, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 21, 9, sprtHtControl, sprtHtControl));
	}
	if (room == 24)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 0, sprtHtControl, sprtHtControl, "water"));
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 1, sprtHtControl, sprtHtControl, "water"));
		}
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 8, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 9, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 15, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 16, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 17, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 22, 4, sprtHtControl, sprtHtControl));
		//purple trees
		for (i = 3; i < 22; i++)
		{
			if (i != 13 && i != 14 && i != 15)
			{
				blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, i, 11, sprtHtControl, sprtHtControl));
			}
		}
		//path
		for (i = 6; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 14, i, sprtHtControl, sprtHtControl));
		}
		for (i = 0; i < 14; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 6, sprtHtControl, sprtHtControl));
		}
	}
	if (room == 25)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));	
		//water
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 0, 0, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 0, 1, sprtHtControl, sprtHtControl, "water"));	
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 8, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 12, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 6, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 9, 6, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 15, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 22, 11, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 11, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 22, 4, sprtHtControl, sprtHtControl));	
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 24, 7, sprtHtControl, sprtHtControl));
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 7, 12, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 19, 3, sprtHtControl, sprtHtControl, "rock"));		
	}
	if (room == 26)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//path
		for (i = 0; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 14, i, sprtHtControl, sprtHtControl));
		}
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 10, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 21, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 24, 2, sprtHtControl, sprtHtControl));
		
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 10, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 21, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 24, 7, sprtHtControl, sprtHtControl));
		
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 10, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 21, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 24, 12, sprtHtControl, sprtHtControl));

	}		
	if (room == 27)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 12, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 15, 3, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 3, 10, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 9, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 8, 5, sprtHtControl, sprtHtControl, "rock"));	
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 11, 12, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 15, 9, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 2, 2, sprtHtControl, sprtHtControl, "rock"));
		//trees
		blockLine("east", "tree");
	}
	if (room == 30)
	{
		//desert
		backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//rocks
		blockLine("north", "stone2");
		blockLine("west", "stone2");
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl, "water"));
		}
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 1, 5, sprtHtControl, sprtHtControl), new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 2, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 3, 5, sprtHtControl, sprtHtControl), new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 4, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 5, 5, sprtHtControl, sprtHtControl), new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 5, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 5, 1, sprtHtControl, sprtHtControl));
			
	}
	if (room == 31)
	{
		//desert
		backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//stone
		blockLine("north", "stone2");
		//blocks
		blocks.push(new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 5, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 5, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 6, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 6, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 14, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 14, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 15, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 15, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 22, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 22, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 23, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 23, 5, sprtHtControl, sprtHtControl),
		
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 9.5, 9, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 9.5, 10, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 10.5, 9, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 10.5, 10, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 18, 9, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 18, 10, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 19, 9, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 101, 201, 100, 100, 19, 10, sprtHtControl, sprtHtControl));
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl, "water"));
		}
		toilets.push(new toiletClass(5, 2, "right"), new toiletClass(8, 7, "right"), new toiletClass(11, 12, "right"));
	}
	if (room == 32)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 3, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 4, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 13.5, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 14.5, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 24, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 3, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 4, 9, sprtHtControl, sprtHtControl));	
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 13.5, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 14.5, 9, sprtHtControl, sprtHtControl));		
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 24, 9, sprtHtControl, sprtHtControl));
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl, "water"));
		}
	}
	if (room == 33)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl, "water"));
		}
	}
	if (room == 34)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 3, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 13.5, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 24, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 3, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 13.5, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 24, 8, sprtHtControl, sprtHtControl));
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl, "water"));
		}
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, gridWidth - 1, i, sprtHtControl, sprtHtControl, "water"));
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, gridWidth - 2, i, sprtHtControl, sprtHtControl, "water"));
		}
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 6, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 17, 10, sprtHtControl, sprtHtControl, "rock"));	
	}
	if (room == 35)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");
		//water
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 0, i, sprtHtControl, sprtHtControl, "water"));
		}
		//blocks
		for (i = 6; i < 20; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 0, 200, 100, 100, i, 4, sprtHtControl, sprtHtControl),
			new blockClass(crayonImages.backgrounds, 0, 200, 100, 100, i, 9, sprtHtControl, sprtHtControl));
		}
		//rocks
		for (i = 5; i < 9; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 6, i, sprtHtControl, sprtHtControl, "rock"));
			blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 19, i, sprtHtControl, sprtHtControl, "rock"));	
			blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 7, i, sprtHtControl, sprtHtControl, "lock"));
			blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 18, i, sprtHtControl, sprtHtControl, "lock"));				
		}
		showers.push(new showerClass(14, 6, "right"));
	}
	if (room == 36)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");

		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 10, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 21, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 24, 2, sprtHtControl, sprtHtControl));
		
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 10, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 6, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 21, 6, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 24, 6, sprtHtControl, sprtHtControl));
		
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 10, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 18, 11, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 21, 11, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 24, 11, sprtHtControl, sprtHtControl));
		//path
		for (i = 8; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 14, i, sprtHtControl, sprtHtControl));
		}
		for (i = 14; i < 29; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 8, sprtHtControl, sprtHtControl));
		}
		//bad guys
		toilets.push(new toiletClass(8, 4, "right"), new toiletClass(18, 9, "left"));
	}
		if (room == 37)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");
		blockLine("east", "tree");
		//path
		for (i = 0; i < 12; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 8, sprtHtControl, sprtHtControl));
		}
	}
}

populate(room);