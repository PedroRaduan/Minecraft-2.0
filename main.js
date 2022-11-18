//Obtendo a referencia do canvas com fabric canvas
var canvas = new fabric.Canvas('myCanvas');
var largura_bloco = 30;
var altura_bloco = 30;
var jogadorX = 10;
var jogadorY = 10;
var objeto_jogador = "";
var imagem_bloco = "";

function playerUpdate(){
    //Explicando a adição de imagem com fabric
    fabric.Image.fromURL("player.png", function(Img){
        objeto_jogador = Img;

        objeto_jogador.scaleToWidth(150);
        objeto_jogador.scaleToHeight(140);
        objeto_jogador.set({
            top:jogadorY,
            left:jogadorX

        });
        canvas.add(objeto_jogador);
    });


}

//o getImage é um parametro criado para armazenar os arquibos das imagens dos blocos
function newImage(getImage)
{
	//O valor do parâmetro do getImage é o mesmo valor do parâmetro Img
    fabric.Image.fromURL(getImage, function(Img){
        imagem_bloco = Img;

        imagem_bloco.scaleToWidth(largura_bloco);
        imagem_bloco.scaleToHeight(altura_bloco);
        imagem_bloco.set({
            top:jogadorY,
            left:jogadorX
        })
        canvas.add(imagem_bloco);
    });
}

	window.addEventListener("keydown", tecla);

	function tecla(e)
	{
		numero_tecla = e.keyCode;
		console.log(numero_tecla)
		//O codigo para obter o valor da tecla shift é e.shift

		if(e.shiftKey == true && numero_tecla == "80") 
		{
			console.log("p e shift pressionadas juntas");
			largura_bloco = largura_bloco + 10;
			altura_bloco = altura_bloco + 10;
			document.getElementById("currentWidth").innerHTML = largura_bloco;
			document.getElementById("currentHeight").innerHTML = altura_bloco;
		}
		if(e.shiftKey && numero_tecla == "77")
		{
			console.log("m e shift foram pressionadas juntas")
			largura_bloco = largura_bloco - 10;
			altura_bloco = altura_bloco - 10;
			document.getElementById("currentWidth").innerHTML = largura_bloco;
			document.getElementById("currentHeight").innerHTML = altura_bloco;
		}

		if(numero_tecla == "38")
		{
			up();
			console.log("cima");
		}



		if(numero_tecla == "40")
		{
			down();
			console.log("baixo");
		}


		if(numero_tecla == "37")
		{
			left();
			console.log("esquerda");
		}


		if(numero_tecla == "39")
		{
			right();
			console.log("direita");
		}

		if(numero_tecla == "87"){
			newImage("wall.jpg");
			console.log("w");
		}
		if(numero_tecla == "71"){
			newImage("ground.png")
			console.log("g");
		}

		if(numero_tecla == '76')
	{
		newImage('light_green.png'); 
		console.log("l");
	}
	if(numero_tecla == '84')
	{
		newImage('trunk.jpg'); 
		console.log("t");
	}
	if(numero_tecla == '82')
	{
		newImage('roof.jpg'); 
		console.log("r");
	}
	if(numero_tecla == '89')
	{
		newImage('yellow_wall.png'); 
		console.log("y");
	}
	if(numero_tecla == '68')
	{
		newImage('dark_green.png'); 
		console.log("d");
	}
	if(numero_tecla == '85')
	{
		newImage('unique.png'); 
		console.log("u");
	}
	if(numero_tecla == '67')
	{
		newImage('cloud.jpg'); 
		console.log("c");
	}
	}
	



function up()
{
	if(jogadorY >=0)
	{
		jogadorY = jogadorY - altura_bloco;
		console.log("autura da imagem do bloco = " + altura_bloco);
		console.log("Quando a tecla direcional Cima for pressionada, X =  " + jogadorX + " , Y = "+jogadorY);
		canvas.remove(objeto_jogador);
		playerUpdate();
	}
}

function down(){
	jogadorY = jogadorY + altura_bloco;
	console.log("altura da imagem do bloco = " + altura_bloco);
	console.log("Quando a tecla direcional Baixo for pressionada, X = "+ jogadorX + ", Y= "+jogadorY);
	canvas.remove(objeto_jogador);
	playerUpdate();
}

function left(){
	jogadorX = jogadorX - largura_bloco;
	console.log("Altura da imagem bloco= "+ largura_bloco);
	console.log("Quando a tecla direcional para esquerda for pressionada, X = "+ jogadorX+ ", Y= "+jogadorX);
	canvas.remove(objeto_jogador);
	playerUpdate();
}

function right(){
	jogadorX = jogadorX + largura_bloco;
	console.log("Altura da imagem bloco = "+largura_bloco);
	console.log("Quando a tecla direcional para a direita for pressionada, X = "+ jogadorX+ ", Y= "+ jogadorX);
	canvas.remove(objeto_jogador);
	playerUpdate();
}



