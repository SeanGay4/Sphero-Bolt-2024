// Team Members: Sean Gay & Bryson LaMew
// Name: Sean Gay
// Date: 1.22.2024
// Program: Maze
//Bolt ID: 33DF

async function startProgram() {
	await scrollMatrixText('Start!', {r:66, g:66, b:66}, 25, true)
	await speak('Start!')

//Roll to Blue then Blue LED
	await roll(0, 52.5, 3)
	setMainLed({r:0, g:0, b:255})
	await scrollMatrixText('BLUE LED', { r: 0, g: 0, b: 255 }, 75, true) ; await setFrontLed({ r: 0, g: 0, b: 255 }) ; await setBackLed({ r: 0, g: 0, b: 255 }) 
	await setMainLed({ r: 0, g: 0, b: 255 })
//Roll to sound then play sound
	await roll(90, 52.5, 2)
	await Sound.EightBit.Alert.play()
	await roll(180, 68, 1)
	await delay(1)
	await roll(223, 66, 1)
	await delay(1)
	await scrollMatrixText('RED LED', { r: 255, g: 0, b: 0 }, 75, true) ; await setFrontLed({ r: 255, g: 0, b: 0 }) ; await setBackLed({ r: 255, g: 0, b: 0 }) 
	await setMainLed({ r: 255, g: 0, b: 0 })	
	//Sound 2
	await roll(135, 45,1)
	await delay(1)
	await roll(45,68,1)
	await delay(1)
	await Sound.EightBit.Warning.play()
	//Green Led
	await roll(135,48,1)
	await delay(1)
	await roll(225,45,1)
	await delay(1)
	await roll(130,48,1)
	await scrollMatrixText('GREEN LED', { r: 0, g: 255, b: 0 }, 75, true) ; await setFrontLed({ r: 0, g: 255, b: 0 }) ; await setBackLed({ r: 0, g: 255, b: 0 }) 
	await setMainLed({ r: 0, g: 255, b: 0 })	
	//Sound 3 and Purple
	await roll(42,62,1)
	await delay(1)
	await roll(357,52,1)
	await scrollMatrixText('PURPLE LED', { r: 128, g: 0, b: 128 }, 75, true) ; await setFrontLed({ r: 128, g: 0, b: 128 }) ; await setBackLed({ r: 128, g: 0, b: 128 }) 
	await setMainLed({ r: 128, g: 0, b: 128 })	
	await Sound.EightBit.LevelComplete.play()
	//finish
	await roll(30, 30, 5)
	await scrollMatrixText('FINISH', {r:66, g: 66, b:66}, 25, true)
	await speak('FINISH!')
	await stopRoll
	
}