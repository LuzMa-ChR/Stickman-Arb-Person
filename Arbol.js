class Arbol
{
	constructor(c,al,an,x,y,rr,h)
	{
		this.Color=c;
		this.Altura=al;
		this.Ancho=an;
		this.X=x;
		this.Y=y;
	var radio=this.Ancho/2;
	this.RadioCopa=radio;
	this.RadioRueda=rr;
	this.DistanciaCP=h;
	}

		Dibujar(contextoDeDibujar)
		{
			//pluma
			contextoDeDibujar.strokeStyle=this.Color;

		var xa=0;
		var ya=0;
		var xi=0;
		var yi=0;
		var xc=this.X + this.RadioCopa;
		var	yc= this.Y + this.RadioCopa;
		var isPrimerPunto=true;

		for(var alfa=0;alfa<=2*3.1416;alfa=alfa+0.01)
		{
			xi = xc +((this.RadioCopa + this.RadioRueda)*Math.sin(alfa))-(this.RadioRueda*Math.sin(alfa*(1+(this.RadioCopa/this.RadioRueda))));
			yi = yc +((this.RadioCopa + this.RadioRueda)*Math.cos(alfa))-(this.RadioRueda*Math.cos(alfa*(1+(this.RadioCopa/this.RadioRueda))));

			if(!isPrimerPunto)
			{
				//trazar linea
				contextoDeDibujar.beginPath();
				contextoDeDibujar.moveTo(xa,ya);
				contextoDeDibujar.lineTo(xi,yi);

				contextoDeDibujar.stroke();
			}

			isPrimerPunto=false;
			xa=xi;
			ya=yi;
		}

		//Tronco
		contextoDeDibujar.beginPath();
		contextoDeDibujar.moveTo(this.X,this.Y);
		contextoDeDibujar.fillRect(this.X+this.RadioRueda/0.35,this.Y+this.RadioCopa*1.5,this.RadioCopa*1,this.RadioRueda/0.10);

		contextoDeDibujar.stroke();
	}
}