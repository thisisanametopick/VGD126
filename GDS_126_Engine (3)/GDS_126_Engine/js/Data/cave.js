var x=false;
var caveData ={
	info:{
		//front
		layout:[
			[0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,2],
			[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
			[2,x,x,7,x,x,7,x,x,7,x,x,7,x,x,7,x,x,7,x,x,7,x,x,7,x,x,7,x,x,7,x,x,7,2],
			[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,9,x,x,x,x,x,x,x,2],
			[x,x,x,x,x,x,9,x,x,x,x,x,x,x,9,9,9,x,x,x,x,x,9,x,x,x,9,9,x,x,x,x,x,x,2],
			[x,x,x,x,x,x,9,x,x,x,x,x,x,x,9,9,9,x,x,x,x,x,9,9,x,x,9,9,9,x,x,x,x,x,2],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
			
			
		],
		src:`images/bg3.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:576, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:640, startY:0}]
			}
		]
	}
	//Back
	var caveBackData ={
		info:{
			layout:[
			[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,9,8,8,8,8,8,8,8,8,8,3,3,3,3,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,3,3,3,3,3,9,9,8,8,8,8,8,8,8,8,8,3,x,x,3,8,8,8,8,8,8,8,8,9,8],
			[3,8,8,8,8,3,x,x,x,3,9,9,8,8,8,8,8,8,8,9,8,3,x,x,3,8,8,8,8,8,8,8,9,9,8],
			[3,8,8,9,8,3,3,3,3,3,9,9,8,8,8,9,8,8,9,9,8,3,3,3,3,8,8,8,9,8,8,8,9,9,8],
			[3,8,8,9,8,8,8,9,9,9,9,9,8,8,9,9,8,8,9,9,8,8,9,8,8,8,8,9,9,8,8,8,9,9,8],
			],
			src:`images/bg3.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
					[2,x,x,8,x,x,8,x,x,8,x,x,8,x,x,8,x,x,8,x,x,8,x,x,8,x,x,8,x,x,8,x,8,8,2],
					[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,8,8,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,8,8,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,8,8,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,8,x,x,x,8,8,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,8,8,x,x,x,8,8,2]
					
					
				],
				src:`images/bg3.png`,
			},
			states:caveData.states
			
			}