class Controller
{
	constructor()
	{
		this.way = null;
		this.unlock = true;
	}

	setWay(e)
	{
		if(this.unlock)
		{
			switch(e.keyCode)
			{
				case 65: case 37:
					if(this.way!="right")
					this.way = "left"; this.lock(); break;
				case 68: case 39:
					if(this.way!="left")
					this.way = "right"; this.lock(); break;
				case 87: case 38:
					if(this.way!="down")
					this.way = "up"; this.lock(); break;
				case 83: case 40:
					if(this.way!="up")
					this.way = "down"; this.lock(); break;
				default:this.way = null; break;
			}
		}
	}

	lock()
	{
		this.unlock = false;
	}
}