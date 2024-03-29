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
/*
// Square w/ different colors for each line
async function startProgram() {
setMainLed({r:255,g:0,b:0})
await roll(90,65,2)
setMainLed({r:128,g:0,b:128})
await roll(180,65,2)
setMainLed({r:137,g:240,b:207})
await roll(270,65,2)
setMainLed({r:255,g:105,b:180})
await roll(360,65,2)
}
*/





// Square w/ different colors and Sounds for each line
/*
async function startProgram(){

setMainLed({r:255,g:0,b:0})
await Sound.EightBit.LevelBegin.play()
await roll(90,65,2)
setMainLed({r:128,g:0,b:128})
await Sound.EightBit.LevelComplete.play()
await roll(180,65,2)
setMainLed({r:137,g:240,b:207})
await Sound.ScienceFiction.LaserRapidFire.play()
await roll(270,65,2)
setMainLed({r:255,g:105,b:180})
await Sound.ScienceFiction.Lightsaber.play()
await roll(360,65,2)

}
*/

// Figure 8
async function startProgram(){
await setSpeed(45) ; await spin(360,4)
await stopRoll()
await roll(180,45,2)
await setSpeed(45) ; await spin(360,4)
await stopRoll()
}