/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
//startButton.img.src="images/mrt.jpg"
startButton.width=200;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/cyberpunk background.jpg"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		//startButton.color = `blue`
		startButton.img.src="images/Startbutton2.png"
	}
	else
	{
		//Default Button Graphic
		//startButton.color = `purple`
		startButton.img.src="images/Startbutton1.png"
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage()
	sounds.play(`music`,1)
}
	
	
