var rooms = {
	number: -1,
	groundLevel: (canvas.height / spriteSizes) - 1,	
	rooms: [
	//[0] room 1
		{
			background: imageObj.backgrounds.hillBackground,
			ground: imageObj.blocks.blockimg,
			holes: [
				57, 58
			],
			blocks: [
				{x: 20, y: 7, img: imageObj.blocks.blockimg2}, {x: 22, y: 7, img: imageObj.blocks.blockimg},
				{x: 24, y: 7, img: imageObj.blocks.blockimg3}, {x: 35, y: 9, img: imageObj.blocks.blockimg4},
				{x: 35, y: 8, img: imageObj.blocks.blockimg}, {x: 36, y: 9, img: imageObj.blocks.blockimg5},
				{x: 36, y: 8, img: imageObj.blocks.blockimg3}, {x: 41, y: 9, img: imageObj.blocks.blockimg},
				{x: 41, y: 8, img: imageObj.blocks.blockimg}, {x: 41, y: 7, img: imageObj.blocks.blockimg},
				{x: 42, y: 9, img: imageObj.blocks.blockimg}, {x: 42, y: 8, img: imageObj.blocks.blockimg},
				{x: 42, y: 7, img: imageObj.blocks.blockimg}, {x: 45, y: 9, img: imageObj.blocks.blockimg2},
				{x: 45, y: 8, img: imageObj.blocks.blockimg2}, {x: 45, y: 7, img: imageObj.blocks.blockimg2},
				{x: 46, y: 9, img: imageObj.blocks.blockimg2}, {x: 46, y: 8, img: imageObj.blocks.blockimg2},
				{x: 46, y: 7, img: imageObj.blocks.blockimg2}, {x: 50, y: 9, img: imageObj.blocks.blockimg2},
				{x: 50, y: 8, img: imageObj.blocks.blockimg2},
				{x: 68, y: 9, img: imageObj.blocks.blockimg2}, {x: 69, y: 9, img: imageObj.blocks.blockimg3},
				{x: 70, y: 9, img: imageObj.blocks.blockimg4}, {x: 71, y: 9, img: imageObj.blocks.blockimg},
				{x: 72, y: 9, img: imageObj.blocks.blockimg5}, {x: 69, y: 8, img: imageObj.blocks.blockimg3},
				{x: 70, y: 8, img: imageObj.blocks.blockimg}, {x: 71, y: 8, img: imageObj.blocks.blockimg3},
				{x: 72, y: 8, img: imageObj.blocks.blockimg2}, {x: 70, y: 7, img: imageObj.blocks.blockimg},
				{x: 71, y: 7, img: imageObj.blocks.blockimg4}, {x: 72, y: 7, img: imageObj.blocks.blockimg},
				{x: 71, y: 6, img: imageObj.blocks.blockimg2}, {x: 72, y: 6, img: imageObj.blocks.blockimg5},
				{x: 72, y: 5, img: imageObj.blocks.blockimg}
			],
			breakables: [
				{x: 13, y: 7}, {x: 21, y: 7}, {x: 23, y: 7},
				{x: 21, y: 4}, {x: 22, y: 4}, {x: 23, y: 4}
			],
			enemies: {
				ufos: [
					{x:31, y:8.9}, {x:38, y:8.9}
				],
				bats: [
					{x: 66, y: 4}
				],
				clouds: [
					{x: 69, y: 4}
				],
				puppets: [
					{x: 50, y: 7}, {x: 66, y: 9}
				],
				fire: [
					{x:43, y:9}, {x:44, y:9}, {x:75, y:9}
				]			
			},
			springs: [
				{x: 33, y: 9}				
			],
			gems: [
				{x:32, y:6}, {x:33, y:6}, {x:15, y:7}, {x:16, y:7}, {x:17, y:7}		
			],
			backgrounds: [
				{x: 78, y: 8, img: imageObj.backgrounds.arrow, width: 2, height: 2}, {x: 3, y: 9.5, img: imageObj.backgrounds.shroom1, width: 0.5, height: 0.5},
				{x: 5, y: 9, img: imageObj.backgrounds.crystalBush, width: 1, height: 1}, {x: 3, y: 5, img: imageObj.backgrounds.cloud, width: 2, height: 1},
				{x: 7, y: 3, img: imageObj.backgrounds.cloud2, width: 2, height: 1}, {x: 14, y: 9, img: imageObj.backgrounds.rainbow, width: 2, height: 1},
				{x: 18, y: 9, img: imageObj.backgrounds.flower2, width: 0.5, height: 1}, {x: 26, y: 6, img: imageObj.backgrounds.cloud, width: 2, height: 1},
				{x: 31, y: 5, img: imageObj.backgrounds.cloud2, width: 1, height: 1}, {x: 35, y: 3, img: imageObj.backgrounds.cloud, width: 2, height: 1},
				{x: 45, y: 4, img: imageObj.backgrounds.cloud2, width: 2, height: 1}, {x: 52, y:3, img: imageObj.backgrounds.cloud, width: 1, height: 1},
				{x: 60, y:6, img: imageObj.backgrounds.cloud, width: 2, height: 1}, {x: 67, y:3, img: imageObj.backgrounds.cloud, width: 2, height: 1},
				{x: 52, y:9, img: imageObj.backgrounds.tree, width: 1, height: 1}, {x: 55, y:9, img: imageObj.backgrounds.tree2, width: 1, height: 1},
				{x: 60, y:9.5, img: imageObj.backgrounds.shroom1, width: 0.5, height: 0.5}, {x: 62, y:9, img: imageObj.backgrounds.crystalBush, width: 1, height: 1}
				
			],
			backgrounds2: [
				{x: 66, y: 8.5, img: imageObj.backgrounds.palm, width: 1, height: 1.5}, {x: 12, y: 9, img: imageObj.backgrounds.crystalBush, width: 1, height: 1},
				{x: 16, y: 6, img: imageObj.backgrounds.cloud, width: 2, height: 1}, {x: 23, y: 9.5, img: imageObj.backgrounds.shroom2, width: 0.5, height: 0.5},
				{x: 26, y: 9, img: imageObj.backgrounds.flower, width: 0.5, height: 1}, {x: 30, y: 9.5, img: imageObj.backgrounds.flower2, width: 0.5, height: 0.5}				
			],
			shootPower: [
				{x: 24, y: 6}
			]			
		},
	//[1] room 2
		{
			background: imageObj.backgrounds.forest_background,
			ground: imageObj.blocks.blockimg4,
			holes: [
				29, 30, 55, 56
			],
			blocks: [
				{x: 20, y: 9, img: imageObj.blocks.blockimg2}, {x: 21, y: 9, img: imageObj.blocks.blockimg2},
				{x: 22, y: 9, img: imageObj.blocks.blockimg2}, {x: 23, y: 9, img: imageObj.blocks.blockimg2},
				{x: 24, y: 9, img: imageObj.blocks.blockimg2}, {x: 25, y: 9, img: imageObj.blocks.blockimg2},
				{x: 26, y: 9, img: imageObj.blocks.blockimg2}, {x: 27, y: 9, img: imageObj.blocks.blockimg2},
				{x: 21, y: 8, img: imageObj.blocks.blockimg2}, {x: 22, y: 8, img: imageObj.blocks.blockimg2},
				{x: 23, y: 8, img: imageObj.blocks.blockimg2}, {x: 24, y: 8, img: imageObj.blocks.blockimg2},			
				{x: 25, y: 8, img: imageObj.blocks.blockimg2}, {x: 26, y: 8, img: imageObj.blocks.blockimg2},
				{x: 22, y: 7, img: imageObj.blocks.blockimg2},
				{x: 23, y: 7, img: imageObj.blocks.blockimg2}, {x: 24, y: 7, img: imageObj.blocks.blockimg2},			
				{x: 25, y: 7, img: imageObj.blocks.blockimg2},
				{x: 40, y: 9, img: imageObj.blocks.blockimg2}, {x: 41, y: 9, img: imageObj.blocks.blockimg2},			
				{x: 40, y: 8, img: imageObj.blocks.blockimg2}, {x: 41, y: 8, img: imageObj.blocks.blockimg2},	
				{x: 44, y: 9, img: imageObj.blocks.blockimg2}, {x: 45, y: 9, img: imageObj.blocks.blockimg2},			
				{x: 44, y: 8, img: imageObj.blocks.blockimg2}, {x: 45, y: 8, img: imageObj.blocks.blockimg2},	
				{x: 48, y: 9, img: imageObj.blocks.blockimg2}, {x: 49, y: 9, img: imageObj.blocks.blockimg2},			
				{x: 48, y: 8, img: imageObj.blocks.blockimg2}, {x: 49, y: 8, img: imageObj.blocks.blockimg2}			
			],
			breakables: [
				{x:3, y:7}, {x:4 , y:7}, {x:5 , y:7}, 
				{x:13 , y:7}, {x:14 , y:6}, {x:54 , y:7}, 
				{x:15 , y:6}, {x:55 , y:7}, {x:56 , y:7}, 
				{x:62 , y:7}, {x:63 , y:7}, {x:64 , y:7}
			],
			enemies: {
				ufos: [
					{x:37, y:8}, {x:50, y:8}
				],
				bats: [
					{x:58 , y:4 }, {x:66 , y:4 }
				],
				clouds: [
					{x:55, y:3}, {x:69, y:4}
				],
				puppets: [
					{x:41, y:7}, {x:66, y:9}
				],
				fire: [
					{x:17, y:9}, {x:42, y:9}, {x:43, y:9}, 
					{x:46, y:9}, {x:47, y:9}, {x:75, y:9}
				]			
			},
			springs: [
				{x: 38, y: 9}				
			],
			gems: [
				{x:12, y:6}, {x:32, y:6}, {x:6, y:6},
				{x:11, y:9}, {x:12, y:9}, {x:13, y:9},
				{x:23, y:5}, {x:24, y:5}, {x:59, y:7},
				{x:25, y:5}, {x:58, y:7}, {x:60, y:7},
				{x:42, y:6}, {x:45, y:6}, {x:49, y:6}		
			],
			backgrounds: [
				{x: 13, y: 8.5, img: imageObj.backgrounds.palm, width:1, height:1.5},
				{x: 33, y: 9, img: imageObj.backgrounds.shroom1, width: 1, height: 1},
				{x: 36, y: 8, img: imageObj.backgrounds.rainbow, width: 2, height: 2},
				{x: 40, y: 9, img: imageObj.backgrounds.tree, width: 1, height: 1},
				{x: 43, y: 9, img: imageObj.backgrounds.tree2, width: 1, height: 1},
				{x: 48, y: 9, img: imageObj.backgrounds.shroom2, width: 1, height: 1},
				{x: 53, y: 9, img: imageObj.backgrounds.flower, width: 1, height: 1},
				{x: 3, y: 4, img: imageObj.backgrounds.cloud, width: 2, height: 1},
				{x: 33, y: 3, img: imageObj.backgrounds.cloud2, width: 2, height: 1},
				{x: 43, y: 2, img: imageObj.backgrounds.cloud2, width: 2, height: 1},
				{x: 10, y: 3, img: imageObj.backgrounds.cloud, width: 2, height: 1},
				{x: 53, y: 4, img: imageObj.backgrounds.cloud, width: 2, height: 1},
				{x: 78, y: 8, img: imageObj.backgrounds.arrow, width: 2, height: 2}				
			],
			backgrounds2: [
				{x: 32, y: 9, img: imageObj.backgrounds.crystalBush, width: 1, height: 1},
				{x: 8, y: 9.5, img: imageObj.backgrounds.flower2, width: .5, height: .5},
				{x: 4, y: 9, img: imageObj.backgrounds.flower, width: 1, height: 1},				
				{x: 6, y: 9, img: imageObj.backgrounds.shroom2, width: 1, height: 1},
				{x: 35, y: 9, img: imageObj.backgrounds.tree, width: 1, height: 1},
				{x: 50, y: 9, img: imageObj.backgrounds.flower2, width: 1, height: 1},
				{x: 58, y: 9.5, img: imageObj.backgrounds.shroom1, width: .5, height: .5},
				{x: 66, y: 8.5, img: imageObj.backgrounds.palm, width: 1, height: 1.5},
				{x: 63, y: 8, img: imageObj.backgrounds.rainbow, width: 3, height: 2}			
			],
			shootPower: [
				{x: 24, y: 6}
			]			
		},
		//[2] room 3
		{
			background: imageObj.backgrounds.green_background,
			ground: imageObj.blocks.blockimg,
			holes: [
				14, 15, 66, 67
			],
			blocks: [
				{x: 10, y: 9, img: imageObj.blocks.blockimg2}, {x: 11, y: 9, img: imageObj.blocks.blockimg2},
				{x: 12, y: 9, img: imageObj.blocks.blockimg2}, {x: 11, y: 8, img: imageObj.blocks.blockimg2}, 
				{x: 10, y: 8, img: imageObj.blocks.blockimg2}, {x: 9, y: 9, img: imageObj.blocks.blockimg2},
				{x: 22, y: 9, img: imageObj.blocks.blockimg2}, {x: 23, y: 9, img: imageObj.blocks.blockimg2}, 
				{x: 22, y: 8, img: imageObj.blocks.blockimg2}, {x: 23, y: 8, img: imageObj.blocks.blockimg2},
				{x: 27, y: 9, img: imageObj.blocks.blockimg3}, {x: 27, y: 8, img: imageObj.blocks.blockimg3}, 
				{x: 28, y: 8, img: imageObj.blocks.blockimg3}, {x: 28, y: 9, img: imageObj.blocks.blockimg3},
				{x: 35, y: 9, img: imageObj.blocks.blockimg4}, {x: 36, y: 9, img: imageObj.blocks.blockimg4}, 
				{x: 37, y: 9, img: imageObj.blocks.blockimg4}, {x: 38, y: 9, img: imageObj.blocks.blockimg4},
				{x: 39, y: 9, img: imageObj.blocks.blockimg4}, {x: 40, y: 9, img: imageObj.blocks.blockimg4},
				{x: 41, y: 9, img: imageObj.blocks.blockimg4}, {x: 42, y: 9, img: imageObj.blocks.blockimg4},
				{x: 43, y: 9, img: imageObj.blocks.blockimg4}, {x: 36, y: 8, img: imageObj.blocks.blockimg4},
				{x: 37, y: 8, img: imageObj.blocks.blockimg4}, {x: 38, y: 8, img: imageObj.blocks.blockimg4},
				{x: 39, y: 8, img: imageObj.blocks.blockimg4}, {x: 40, y: 8, img: imageObj.blocks.blockimg4},
				{x: 41, y: 8, img: imageObj.blocks.blockimg4}, {x: 42, y: 8, img: imageObj.blocks.blockimg4},
				{x: 37, y: 7, img: imageObj.blocks.blockimg4}, {x: 38, y: 7, img: imageObj.blocks.blockimg4},
				{x: 39, y: 7, img: imageObj.blocks.blockimg4}, {x: 40, y: 7, img: imageObj.blocks.blockimg4},
				{x: 41, y: 7, img: imageObj.blocks.blockimg4}, {x: 60, y: 9, img: imageObj.blocks.blockimg3}			
			],
			breakables: [
				{x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 6}, {x: 13, y: 5}, {x: 14, y: 5}, {x: 15, y: 5}, {x: 48, y: 9},
				{x: 49, y: 9}, {x: 50, y: 9}, {x: 48, y: 8}, {x: 49, y: 8}, {x: 50, y: 8}, {x: 48, y: 7}, {x: 49, y: 7}, {x: 50, y: 7}
			],
			enemies: {
				ufos: [
					{x:44, y:5.75}
				],
				bats: [
					{x: 40, y: 4}
				],
				clouds: [
					{x: 69, y: 4}, {x: 39, y: 4}
				],
				puppets: [
					{x: 28, y: 7}, {x: 40, y: 6}
				],
				fire: [
					{x:24, y:9}, {x:25, y:9}, {x:26, y:9}, {x:70, y:9}, {x:71, y:9}
				]			
			},
			springs: [
				{x: -4, y: 9}				
			],
			gems: [
				{x:2, y:5}, {x:3, y:5}, {x:4, y:5},{x:13, y:4},{x:14, y:4},{x:15, y:4},{x:5, y:5},
				{x:16, y:4},{x:22, y:7},{x:23, y:7},{x:24, y:7},{x:34, y:9},{x:35, y:8},{x:36, y:7},{x:56, y:6},
				{x:57, y:6},{x:58, y:6},{x:59, y:6}
			],
			backgrounds: [
				{x: 78, y: 8, img: imageObj.backgrounds.arrow, width: 2, height: 2}, {x: 5, y: 9, img: imageObj.backgrounds.flower, width: 1, height: 1},
				{x: 4, y: 4, img: imageObj.backgrounds.cloud, width: 2, height: 1}, {x: 10, y: 3, img: imageObj.backgrounds.cloud2, width: 2, height: 1},
				{x: 20, y: 9, img: imageObj.backgrounds.crystalBush, width: 1, height: 1},
				{x: 25, y: 3, img: imageObj.backgrounds.cloud2, width: 2, height: 1}, {x: 30, y: 9, img: imageObj.backgrounds.shroom1, width: 0.5, height: 1},
				{x: 33, y: 9, img: imageObj.backgrounds.tree, width: 1, height: 1}, {x: 56, y: 9, img: imageObj.backgrounds.shroom2, width: 1, height: 1},
				{x: 35, y: 3, img: imageObj.backgrounds.cloud, width: 2, height: 1}, {x: 56, y: 3, img: imageObj.backgrounds.cloud, width: 2, height: 1},
				{x: 67, y: 4, img: imageObj.backgrounds.cloud, width: 2, height: 1}
			],
			backgrounds2: [
				{x: 2, y: 8.5, img: imageObj.backgrounds.palm, width: 1, height: 1.5}, {x: 18, y: 9.5, img: imageObj.backgrounds.flower2, width: .5, height: 0.5},
				{x: 17, y: 4, img: imageObj.backgrounds.cloud, width: 2, height: 1}, {x: 53, y: 9, img: imageObj.backgrounds.crystalBush, width: 1, height: 1},
				{x: 63, y: 8, img: imageObj.backgrounds.tree2, width: 1, height: 2}, {x: 45, y: 5, img: imageObj.backgrounds.cloud2, width: 2, height: 1}
			],
			shootPower: [
				{x: -3, y: 6}
			]		
		},
	//[3] room 4
		{
			background: imageObj.backgrounds.cloud_background,
			ground: imageObj.blocks.blockimg5,
			holes: [
				21, 22, 27, 28, 29, 30, 37, 38, 39, 52, 53, 54, 55
			],
			blocks: [
				{x: 15, y: 9, img: imageObj.blocks.blockimg}, {x: 16, y: 9, img: imageObj.blocks.blockimg2},
				{x: 17, y: 9, img: imageObj.blocks.blockimg3}, {x: 18, y: 9, img: imageObj.blocks.blockimg4},
				{x: 19, y: 9, img: imageObj.blocks.blockimg5}, {x: 20, y: 9, img: imageObj.blocks.blockimg},
				{x: 16, y: 8, img: imageObj.blocks.blockimg2},
				{x: 17, y: 8, img: imageObj.blocks.blockimg5}, {x: 18, y: 8, img: imageObj.blocks.blockimg3},
				{x: 19, y: 8, img: imageObj.blocks.blockimg2}, {x: 20, y: 8, img: imageObj.blocks.blockimg},
				{x: 17, y: 7, img: imageObj.blocks.blockimg2}, {x: 18, y: 7, img: imageObj.blocks.blockimg},
				{x: 19, y: 7, img: imageObj.blocks.blockimg3}, {x: 20, y: 7, img: imageObj.blocks.blockimg4},
				{x: 23, y: 9, img: imageObj.blocks.blockimg3}, {x: 24, y: 9, img: imageObj.blocks.blockimg3},
				{x: 25, y: 9, img: imageObj.blocks.blockimg3}, {x: 26, y: 9, img: imageObj.blocks.blockimg3},
				{x: 23, y: 8, img: imageObj.blocks.blockimg3}, {x: 24, y: 8, img: imageObj.blocks.blockimg3},
				{x: 25, y: 8, img: imageObj.blocks.blockimg3}, {x: 26, y: 8, img: imageObj.blocks.blockimg3},
				{x: 23, y: 7, img: imageObj.blocks.blockimg3}, {x: 24, y: 7, img: imageObj.blocks.blockimg3},
				{x: 25, y: 7, img: imageObj.blocks.blockimg3}, {x: 26, y: 7, img: imageObj.blocks.blockimg3},	
				{x: 23, y: 6, img: imageObj.blocks.blockimg3}, {x: 24, y: 6, img: imageObj.blocks.blockimg3},
				{x: 25, y: 6, img: imageObj.blocks.blockimg3}, {x: 26, y: 6, img: imageObj.blocks.blockimg3},
				{x: 31, y: 9, img: imageObj.blocks.blockimg},  {x: 32, y: 9, img: imageObj.blocks.blockimg},
				{x: 31, y: 8, img: imageObj.blocks.blockimg},  {x: 32, y: 8, img: imageObj.blocks.blockimg},
				{x: 31, y: 7, img: imageObj.blocks.blockimg},  {x: 32, y: 7, img: imageObj.blocks.blockimg},
				{x: 31, y: 6, img: imageObj.blocks.blockimg},  {x: 32, y: 6, img: imageObj.blocks.blockimg},
				{x: 48, y: 9, img: imageObj.blocks.blockimg2}, {x: 49, y: 9, img: imageObj.blocks.blockimg2},
				{x: 50, y: 9, img: imageObj.blocks.blockimg2}, {x: 51, y: 9, img: imageObj.blocks.blockimg2},
				{x: 49, y: 8, img: imageObj.blocks.blockimg2},
				{x: 50, y: 8, img: imageObj.blocks.blockimg2}, {x: 51, y: 8, img: imageObj.blocks.blockimg2},
				{x: 50, y: 7, img: imageObj.blocks.blockimg2}, {x: 51, y: 7, img: imageObj.blocks.blockimg2},
				{x: 51, y: 6, img: imageObj.blocks.blockimg2}
			],
			breakables: [
				{x: 2, y: 7}, {x: 3, y: 7}, {x: 4, y: 7}, {x: 11, y: 7}, {x: 12, y: 6}, {x: 13, y: 6}			
			],
			enemies: {
				ufos: [
					{x:37, y:8}
				],
				bats: [
					{x: 66, y: 6}
				],
				clouds: [
					{x: 39, y: 4}
				],
				puppets: [
					{x: 66, y: 9}, {x: 63, y: 9}, {x: 68, y: 9}, {x: 71, y: 9}
				],
				fire: [
					{x:-2, y:9}
				]			
			},
			springs: [
				{x: 29, y: 10}				
			],
			gems: [
				{x:18, y:6}, {x:19, y:6}, {x:20, y:6}, {x:27, y:5}, {x:28, y:5}, {x:29, y:5}, {x:30, y:5}, {x:59, y:9}, {x:60, y:9}, {x:61, y:9}, {x:62, y:9}
			],
			backgrounds: [
				{x: 78, y: 8, img: imageObj.backgrounds.arrow, width: 2, height: 2}, {x: 57, y: 6, img: imageObj.backgrounds.rainbow, width: 6, height: 4},
				{x: 42, y: 6, img: imageObj.backgrounds.tree, width: 3, height: 5},
				{x: 3, y: 9, img: imageObj.backgrounds.crystalBush, width: 1, height: 1}, {x: 6, y: 8, img: imageObj.backgrounds.tree2, width: 1, height: 2},
				{x: 10, y: 9, img: imageObj.backgrounds.shroom1, width: 1, height: 1}, {x: 25, y: 5, img: imageObj.backgrounds.palm, width: 1, height: 1},
				{x: 13, y: 9.5, img: imageObj.backgrounds.shroom2, width: .5, height: .5}, {x: 18, y: 4, img: imageObj.backgrounds.flower, width: 2, height: 3},
				{x: 3, y: 4, img: imageObj.backgrounds.cloud, width: 2, height: 1}, {x: 7, y: 2, img: imageObj.backgrounds.cloud2, width: 2, height: 1},
				{x: 16, y: 3, img: imageObj.backgrounds.cloud, width: 2, height: 1}, {x: 35, y: 5, img: imageObj.backgrounds.cloud2, width: 2, height: 1},
				{x: 45, y: 4, img: imageObj.backgrounds.cloud, width: 2, height: 1}, {x: 60, y: 3, img: imageObj.backgrounds.cloud, width: 2, height: 1}
			],
			backgrounds2: [
				{x: 66, y: 8.5, img: imageObj.backgrounds.palm, width: 1, height: 1.5}, {x: 20, y: 6.5, img: imageObj.backgrounds.flower2, width: .5, height: .5},
				{x: 25, y: 3, img: imageObj.backgrounds.cloud, width: 2, height: 1}, {x: 50, y: 3, img: imageObj.backgrounds.cloud2, width: 2, height: 1},
				{x: 55, y: 5, img: imageObj.backgrounds.cloud2, width: 2, height: 1}, {x: 73, y: 6, img: imageObj.backgrounds.cloud, width: 2, height: 1}
			],
			shootPower: [
				{x: 45, y: 9}
			]
		},
	//[4] room 5
		{
			background: imageObj.backgrounds.heiro_background,
			ground: imageObj.blocks.blockimg,
			holes: [
				11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48
			],
			blocks: [
				{x: 12, y: 7, img: imageObj.blocks.blockimg2}, {x: 13, y: 7, img: imageObj.blocks.blockimg2}, {x: 16, y: 6, img: imageObj.blocks.blockimg2},
				{x: 17, y: 6, img: imageObj.blocks.blockimg2}, {x: 33, y: 7, img: imageObj.blocks.blockimg2}, {x: 34, y: 6, img: imageObj.blocks.blockimg2},
				{x: 35, y: 6, img: imageObj.blocks.blockimg2}, {x: 36, y: 6, img: imageObj.blocks.blockimg2},{x: 37, y: 6, img: imageObj.blocks.blockimg2},
				{x: 43, y: 5, img: imageObj.blocks.blockimg2}, {x: 43, y: 6, img: imageObj.blocks.blockimg2},{x: 43, y: 7, img: imageObj.blocks.blockimg2},
				{x: 42, y: 5, img: imageObj.blocks.blockimg2}, {x: 42, y: 6, img: imageObj.blocks.blockimg2},{x: 42, y: 7, img: imageObj.blocks.blockimg2},
				{x: 44, y: 5, img: imageObj.blocks.blockimg2}, {x: 44, y: 6, img: imageObj.blocks.blockimg2},{x: 44, y: 7, img: imageObj.blocks.blockimg2},
				{x: 45, y: 5, img: imageObj.blocks.blockimg2}, {x: 45, y: 6, img: imageObj.blocks.blockimg2},{x: 45, y: 7, img: imageObj.blocks.blockimg2}
			],
			breakables: [
				{x: 35, y: 3}, {x: 36, y: 3}, {x: 37, y: 3}, {x: 49, y: 4}, {x: 50, y: 4}, {x: 51, y: 4}
			],
			enemies: {
				ufos: [
					{x:31, y:6, width: 2, height: 2}
				],
				bats: [
					{x: 20, y: 4}, {x: 50, y: 4}, {x: 70, y: 4}
				],
				clouds: [
					{x: 40, y: 4, width: 2.5, height: 2.5}
				],
				puppets: [
					{x: 60, y: 8, width: 2, height: 2}, {x: 70, y: 8, width: 2, height: 2}
				],
				fire: [
					{x:35, y:9}, {x:36, y:9}, {x:43, y:4}
				]			
			},
			springs: [
				{x: -2, y: 9}				
			],
			gems: [
				{x:33, y:5}, {x:34, y:5}, {x:35, y:5}, {x:36, y:5},
				{x:3, y:7}, {x:4, y:7}, {x:5, y:7}, {x:52, y:9}, {x:53, y:9}, {x:54, y:9}		
			],
			backgrounds: [
				{x: 78, y: 8, img: imageObj.backgrounds.arrow, width: 2, height: 2}, {x: 3, y: 9, img: imageObj.backgrounds.crystalBush},
				{x: 9, y: 9.5, img: imageObj.backgrounds.flower2, width: .5, height: .5}, {x: 5, y: 9.5, img: imageObj.backgrounds.shroom1, width: .5, height: .5},
				{x: 24, y: 9, img: imageObj.backgrounds.shroom2}, {x: 29, y: 8, img: imageObj.backgrounds.crystalBush, width: 2, height: 2},
				{x: 54, y: 7, img: imageObj.backgrounds.crystalBush, width: 3, height: 3}
			],
			backgrounds2: [
				{x: 66, y: 8.5, img: imageObj.backgrounds.palm, width: 1, height: 1.5}, {x: 10, y: 9, img: imageObj.backgrounds.crystalBush},
				{x: 26, y: 8, img: imageObj.backgrounds.palm, width: 1, height: 2}, {x: 32, y: 8, img: imageObj.backgrounds.flower, width: 1, height: 2},
				{x: 50, y: 9, img: imageObj.backgrounds.crystalBush}, {x: 52, y: 9.5, img: imageObj.backgrounds.flower2, width: .5, height: .5}
			],
			shootPower: [
				{x: -4, y: 6}
			]		
		}		
	],
	populate: function(){
/*This function populates the screen with objects
The location of the objects is dependent on which room you are in.
*/
	if (gameover == true){
	//define the main player object
		player.sx = 0;
		player.sy = 0;
		player.swidth = 50;
		player.sheight = 50;
		player.x = 0 - spriteSizes;
		player.y = (canvas.height / 2) - spriteSizes;
		player.speed = spriteSizes * 5;
		player.bulxPos = player.x + (0.444 * spriteSizes);
		player.bulyPos = player.y + (0.388 * spriteSizes);
		player.shoot = false;
//declare variables
		rooms.number = -1;
		direction = "right";
		restartSwitch = 0;
		animateSpeedControl = 0;
		bulControl = 0;
		bulTrigger = 0;
		bullSpeed = canvas.width * 0.00461;
		bullFreq = 12;
		moveMe = "false";
		powerLevel = 0;
		dirLead = "default";
		keysDown = {};
		keysUp = {};		
	}

//declare arrays
	runPower = [];
	shootPower = [];
	frequentPower = [];
	badUFOs = [];
	badDudes2 = [];
	sockPuppets = [];
	badDudes3 = [];
	fires = [];
    bullets = [];
    badBullets = [];
    blocks = [];
    breakables = [];
    runPower = [];
    backgrounds = [];
    backgrounds2 = [];
    springs = [];
    gems = [];
//declare randomness
	runPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
	runPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
	shootPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
	shootPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
	frequentPowerLocX = Math.floor((Math.random() * (gridWidth - 1)) + 1);
	frequentPowerLocY = Math.floor((Math.random() * (gridHeight - 1)) + 1);
//Make sure gameover is false
	gameover = false;
//Change rooms if player wins
	if (player.x > canvas.width - 8 || player.x < 0 - (spriteSizes * 0.5)){
		if (rooms.number != rooms.rooms.length - 1){
			rooms.number++;
		}else{
			rooms.number = 0;
		}

	//define background
			Background.pic = rooms.rooms[rooms.number].background;
	//blocks
			for (i = 0; i < levelEnd; i++){
				var hole = false;
				for (j in rooms.rooms[rooms.number].holes){
					if (rooms.rooms[rooms.number].holes[j] == i){
						hole = true;
					}
				}
				if (hole == false){
					blocks.push(new blockClass(i, rooms.groundLevel, rooms.rooms[rooms.number].ground));
				}
			}


	//populate everything
			for (i in rooms.rooms[rooms.number].blocks){
				blocks.push(new blockClass(rooms.rooms[rooms.number].blocks[i].x, rooms.rooms[rooms.number].blocks[i].y, rooms.rooms[rooms.number].blocks[i].img));
			}
			blocks.push(new blockClass(levelEnd, rooms.groundLevel, rooms.rooms[rooms.number].ground));
		//create breakables 
			for (i in rooms.rooms[rooms.number].breakables){		
				breakables.push(new breakClass(rooms.rooms[rooms.number].breakables[i].x, rooms.rooms[rooms.number].breakables[i].y));
			}
		//springs
			for (i in rooms.rooms[rooms.number].springs){
				springs.push(new springClass(rooms.rooms[rooms.number].springs[i].x, rooms.rooms[rooms.number].springs[i].y));
			}
		//create powerUps
			for (i in rooms.rooms[rooms.number].shootPower){	
				shootPower.push({
					x: spriteSizes * rooms.rooms[rooms.number].shootPower[i].x,
					y: spriteSizes * rooms.rooms[rooms.number].shootPower[i].y,
					width: spriteSizes * 0.5,
					height: spriteSizes
				});
			}
			
			for (i in rooms.rooms[rooms.number].gems){			
				gems.push(new gemClass(rooms.rooms[rooms.number].gems[i].x, rooms.rooms[rooms.number].gems[i].y));
			}
	//function to generate bad guys and add them to arrays
				//UFOs
				for (i in rooms.rooms[rooms.number].enemies.ufos){
					if (rooms.rooms[rooms.number].enemies.ufos[i].width !== undefined && rooms.rooms[rooms.number].enemies.ufos[i].height !== undefined)
					{					
						badUFOs.push(new ufoClass(rooms.rooms[rooms.number].enemies.ufos[i].x, rooms.rooms[rooms.number].enemies.ufos[i].y,
						rooms.rooms[rooms.number].enemies.ufos[i].width, rooms.rooms[rooms.number].enemies.ufos[i].height));
					}
					else
					{
						badUFOs.push(new ufoClass(rooms.rooms[rooms.number].enemies.ufos[i].x, rooms.rooms[rooms.number].enemies.ufos[i].y));						
					}
				}
				//bats
				for (i in rooms.rooms[rooms.number].enemies.bats){				
					badDudes2.push(new batClass(rooms.rooms[rooms.number].enemies.bats[i].x, rooms.rooms[rooms.number].enemies.bats[i].y));
				}
				//clouds
				for (i in rooms.rooms[rooms.number].enemies.clouds){
					if (rooms.rooms[rooms.number].enemies.clouds[i].width !== undefined && rooms.rooms[rooms.number].enemies.clouds[i].height !== undefined)
					{		
						badDudes3.push(new cloudClass(rooms.rooms[rooms.number].enemies.clouds[i].x, rooms.rooms[rooms.number].enemies.clouds[i].y,
						rooms.rooms[rooms.number].enemies.clouds[i].width, rooms.rooms[rooms.number].enemies.clouds[i].height));
					}
					else
					{					
						badDudes3.push(new cloudClass(rooms.rooms[rooms.number].enemies.clouds[i].x, rooms.rooms[rooms.number].enemies.clouds[i].y));
					}
				}
				//puppets
				for (i in rooms.rooms[rooms.number].enemies.puppets){	
					if (rooms.rooms[rooms.number].enemies.puppets[i].width !== undefined && rooms.rooms[rooms.number].enemies.puppets[i].height !== undefined)
					{
						sockPuppets.push(new puppetClass(rooms.rooms[rooms.number].enemies.puppets[i].x, rooms.rooms[rooms.number].enemies.puppets[i].y,
						rooms.rooms[rooms.number].enemies.puppets[i].width, rooms.rooms[rooms.number].enemies.puppets[i].height));
					}
					else
					{
						sockPuppets.push(new puppetClass(rooms.rooms[rooms.number].enemies.puppets[i].x, rooms.rooms[rooms.number].enemies.puppets[i].y));
					}
				}
				//fire
				for (i in rooms.rooms[rooms.number].enemies.fire){				
					fires.push(new fireClass(rooms.rooms[rooms.number].enemies.fire[i].x, rooms.rooms[rooms.number].enemies.fire[i].y));
				}
				//background objects
				for (i in rooms.rooms[rooms.number].backgrounds){				
					backgrounds.push(new backClass(rooms.rooms[rooms.number].backgrounds[i].x, 
					rooms.rooms[rooms.number].backgrounds[i].y,
					rooms.rooms[rooms.number].backgrounds[i].img, 
					rooms.rooms[rooms.number].backgrounds[i].width, 
					rooms.rooms[rooms.number].backgrounds[i].height));
				}
				//front backgrounds
				for (i in rooms.rooms[rooms.number].backgrounds2){				
					backgrounds2.push(new backClass2(rooms.rooms[rooms.number].backgrounds2[i].x, 
					rooms.rooms[rooms.number].backgrounds2[i].y,
					rooms.rooms[rooms.number].backgrounds2[i].img, 
					rooms.rooms[rooms.number].backgrounds2[i].width, 
					rooms.rooms[rooms.number].backgrounds2[i].height));
				}
		
		if (player.entry == "right"){
			var offset = (blocks[blocks.length - 1].x + blocks[blocks.length - 1].width) - canvas.width;
			for (i in breakables){
				breakables[i].x -= offset;			
			}
			for (i in runPower){
				runPower[i].x -= offset;		
			}
			for (i in shootPower){
				shootPower[i].x -= offset;		
			}
			for (i in frequentPower){
				frequentPower[i].x -= offset;		
			}
			for (i in badUFOs){
				badUFOs[i].x -= offset;		
			}
			for (i in badDudes2){
				badDudes2[i].x -= offset;		
			}
			for (i in badDudes3){
				badDudes3[i].x -= offset;		
			}
			for (i in sockPuppets){
				sockPuppets[i].x -= offset;		
			}
			for (i in fires){
				fires[i].x -= offset;		
			}
			for (i in backgrounds){
				backgrounds[i].x -= offset;		
			}
			for (i in backgrounds2){
				backgrounds2[i].x -= offset;		
			}
			for (i in blocks){
				blocks[i].x -= offset;
			}
		}
			player.x = spriteSizes * 7;
			player.y = spriteSizes * 6;
	}	
	yosef.gameStart = true;
	}
};

