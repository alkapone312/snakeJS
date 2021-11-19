class Apple
{
	constructor(x, y, cellSize)
	{
		this.x = x*cellSize;
		this.y = y*cellSize;
		this.size = cellSize;
	}

	show()
	{
		rect(this.x, this.y, this.size, this.size);
	}
}