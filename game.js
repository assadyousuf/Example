/** @type {import("./phaser")}*/

const gameState = {}



const config = {
	width : 700,
	height : 600,
	//backgroundColor: 0xaaffaa,
	scene : {
		preload,
		create,
		update
	},
}


function preload(){
	this.load.image('Character', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/codey.png');
	this.load.image('ball', './images/ball.png');
	this.load.image('background', './images/Space_Background.png');
}

function create(){

gameState.cursors = this.input.keyboard.createCursorKeys();	
this.add.image(0,0,'background').setOrigin(0);
gameState.Character = this.add.sprite(config.width/2, config.height-25, 'Character');

gameState.asteroid = this.add.group();



}


function update(){

//event handlers	
if(Phaser.Input.Keyboard.JustDown(gameState.cursors.left) && gameState.Character.x > 25){
	gameState.Character.x -= 25;
}else if(Phaser.Input.Keyboard.JustDown(gameState.cursors.right) && gameState.Character.x < config.width - 25){
	gameState.Character.x += 25;
} else if(Phaser.Input.Keyboard.JustDown(gameState.cursors.space) && gameState.Character.y > 25){
	gameState.Character.y -=50;
}


}

const game = new Phaser.Game(config);