function gameAlert(msg)
{
	let alert = document.getElementById("alert");
	alert.style.display = "flex";
	alert.innerHTML = msg;
}

function clearT(arr)
{
	if(arr)
		for(let i = 0 ; i < arr.length; i++)
		{
			clearInterval(arr[i]);
			clearTimeout(arr[i]);
		}
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