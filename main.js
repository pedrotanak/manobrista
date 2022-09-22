canvas=document.getElementById("myCanvas")

car2.png_width=75;
car2.png_height=100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

car2.png_x=5;
car2.png_y=225
function add() {
	function adiciona(){
		backgroundimgTag= new Image();
		backgroundimgTag.onload=uploadBackground;
		backgroundimgTag.src=backgroundImage;
		
		car2.png_imgTag=new Image;
		car2.png_imgTag.onload=uploadGreenCar;
		car2.png_imgTag.src=greencarImage
	}
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’

}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
}

function down()
{
	//Definir função para mover o carro para baixo
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
}

function right()
{
	//Definir função para mover o lado direito do carro
}
