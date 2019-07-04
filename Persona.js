class Persona{

	constructor(n,e,c,al,an,x,y){
		this.Nombre=n;
		this.Edad=e;
		this.Color=c;
		this.Altura=al;
		this.Ancho=an;
		this.X=x;
		this.Y=y;
	}

	Hablar(mensaje){
		alert(mensaje);
	}

	Dibujar(contextoDeDibujar){

		//Nombre
		contextoDeDibujar.fillText(this.Nombre,this.X,this.Y-10);

		//Pluma
		contextoDeDibujar.strokeStyle=this.Color; 

		//Cabeza
		var radio=this.Ancho/2;

		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X + radio, 
							  this.Y + radio,
							  radio, 
							  0, 
							  2*3.1416,
							  "true");

	    
		
		contextoDeDibujar.stroke();

		//Cuerpo
		contextoDeDibujar.moveTo(this.X + radio, this.Y + 2 *(radio));
		contextoDeDibujar.lineTo(this.X + radio, this.Y + 3*(radio));

		contextoDeDibujar.stroke();

		//Brazos
		contextoDeDibujar.moveTo(this.X, this.Y + 2.2*(radio));
		contextoDeDibujar.lineTo(this.X + 2*(radio), this.Y + 2.2*(radio));

		contextoDeDibujar.stroke();

		//Pierna1
		contextoDeDibujar.moveTo(this.X + radio, this.Y + 3*(radio));
		contextoDeDibujar.lineTo(this.X + 2*(radio), this.Y + 4*(radio));

		contextoDeDibujar.stroke();

		//Pierna2
		contextoDeDibujar.moveTo(this.X + radio, this.Y + 3*(radio));
		contextoDeDibujar.lineTo(this.X, this.Y + 4*(radio));

		contextoDeDibujar.stroke();
	}
}