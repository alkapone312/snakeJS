class Block
{
	constructor(x, y, cellSize)
	{
		this.x = x*cellSize;
		this.y = y*cellSize;
		this.size = cellSize;
		this.prevX;
		this.prevY;
	}

	show()
	{
		rect(this.x, this.y, this.size, this.size);
	}

	updateHead(way)
	{
		if(way)
		{
			this.prevX=this.x;
			this.prevY=this.y;
			switch(way)
			{
				case "left": this.x -= this.size;
				break;
				case "right": this.x += this.size;
				break;
				case "up": this.y -= this.size;
				break;
				case "down": this.y += this.size;
				break;	
			}
		}
	}

	update(x,y)
	{
		this.prevX=this.x;
		this.prevY=this.y;
		this.x = x;
		this.y = y;
	}

	collide(obj)
	{
		if(this.x == obj.x && this.y == obj.y)
			return true;
		return false;
	}
}