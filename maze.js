// Team Members: Sean Gay & Bryson LaMew
// Name: Sean Gay
// Date: 1.22.2024
// Program: Maze
//Bolt ID: 33DF


async function startProgram(){
await speak("Start", true);	
await scrollMatrixText('Start', { r: 66, g: 66, b: 66 }, 75, true)    	
// Blue LED + Movement
await roll(360, 130, 2)
await scrollMatrixText('BLUE LED', { r: 0, g: 0, b: 255 }, 75, true)
await setMainLed({ r: 0, g: 0, b: 255 })


}


