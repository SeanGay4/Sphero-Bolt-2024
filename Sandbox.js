//Programmer: Sean Gay
//Date: 1.10.2024
//Program: Sphero Bolt Testing\
//Bolt ID: 33DF
/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);

}
*/

// Square w/ different colors for each line
// Create a new Sphero BOLT object
var bolt = new SpheroBOLT();

// Set the heading to 0 degrees
bolt.setHeading(0);

// Start rolling
bolt.roll(60, 1);

// Wait for 1 second
delay(1000);

// Turn right 90 degrees
bolt.turnRight(90);

// Roll again
bolt.roll(60, 1);

// Wait for 1 second
delay(1000);

// Turn right 90 degrees again
bolt.turnRight(90);

// Roll again
bolt.roll(60, 1);

// Wait for 1 second
delay(1000);

// Turn right 90 degrees one last time
bolt.turnRight(90);

// Stop rolling
bolt.stop();






// Square w/ different colors and Sounds for each line





/*
// Figure 8
 setSpeed(2)
 await spin(360)
 await spin(360)
*/