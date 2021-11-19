ctx = document.getElementById("canvas").getContext("2d");
const width = ctx.canvas.width;
const height = ctx.canvas.height;
const cellSize = 20;

const fps = 8;
const interval = 1000/fps;

let gridWidth = width/cellSize;
let gridHeight = height/cellSize;



fill();


let controller = new Controller();
document.addEventListener("keydown", function(e){
	if(e.keyCode == 27) restartGame();
});
document.addEventListener('keydown', function(e){
	controller.setWay(e);
});

	let apple;
	let snake;
	let length;
	let toClear = new Array();

function gameLoop()
{
	fillStyle("white");
	clear();
	snake[0].updateHead(controller.way);
	snake[0].show();

	for(let i = 1 ; i < length ; i++)
	{
		snake[i].update(snake[i-1].prevX, snake[i-1].prevY);
		snake[i].show();
		if(snake[0].collide(snake[i]))
			stopGame("Game Over <br> score: " + length);
		if(snake[i].collide(apple) && apple.x > 0)
			apple.x -= cellSize;
		else if (snake[i].collide(apple))
			apple.x += cellSize;
	}
	controller.unlock = true;

	if(snake[0].x>=width || snake[0].x < 0 || snake[0].y >= height || snake[0].y < 0)
		stopGame("Game Over! <br> score: " + length);
	
	if(snake[0].collide(apple))
	{
		apple = new Apple(parseInt(Math.random()*gridWidth), parseInt(Math.random()*gridHeight), cellSize);;
		snake.push(new Block(snake[length-1].prevX/cellSize, snake[length-1].prevY/cellSize, cellSize));
		length++;
	}
	else
	{
		fillStyle("red");
		apple.show();
	}
}

function stopGame(msg)
{
	clear(toClear);
	gameAlert(msg);
	toClear.push(setTimeout(addScore, 3000));
}

function addScore()
{
	msg = `Wpisz swoje imię: 
		<form>
			<input type="text" name="name">
			<button>Ok!</button>
		</form>
		<span style="font-size: 16px;">lub wciśnij esc by zagrać ponownie</span>`;
	gameAlert(msg);
}

function clearMessage()
{
	let alert = document.getElementById("alert");
	alert.innerHTML = "";
	alert.style.display = "none";
}

function restartGame()
{
	clearMessage();
	apple = new Apple(parseInt(Math.random()*gridWidth), parseInt(Math.random()*gridHeight), cellSize);
	snake = [new Block(gridWidth/2,gridHeight/2, cellSize)];
	length = 1;
	clearT(toClear);
	toClear.push(setInterval(gameLoop, interval));
}

restartGame();