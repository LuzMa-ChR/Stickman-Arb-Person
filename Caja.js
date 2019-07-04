class Caja
{
constructor(c, al, an, l, v, x, y)
{

this.Color = c;
this.Altura = al;
this.Ancho = an;
this.largo = l;
this.Volumen = v;
this.X = x;
this.Y = y;
}

Dibujar(contextoDeDibujo)
{

//Crear una pluma con el color
contextoDeDibujo.strokeStyle = this.Color; 

//1
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X, this.Y);
contextoDeDibujo.lineTo(this.X, this.Y+this.Altura);
contextoDeDibujo.stroke();

//2
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X, this.Y+this.Altura);
contextoDeDibujo.lineTo(this.X+this.Ancho, this.Y+this.Altura);
contextoDeDibujo.stroke();

//3
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X+this.Ancho, this.Y+this.Altura);
contextoDeDibujo.lineTo(this.X+this.Ancho, this.Y);
contextoDeDibujo.stroke();

//4
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X+this.Ancho, this.Y);
contextoDeDibujo.lineTo(this.X, this.Y);
contextoDeDibujo.stroke();

//5
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X, this.Y);
contextoDeDibujo.lineTo(this.X+(this.largo)/2, this.Y-(this.largo)/2);
contextoDeDibujo.stroke();

//6
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X+(this.largo)/2, this.Y-(this.largo)/2);
contextoDeDibujo.lineTo(this.X+(this.largo/2)+(this.Ancho), this.Y-(this.largo)/2);
contextoDeDibujo.stroke();

//7
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X+(this.largo/2)+(this.Ancho), this.Y-(this.largo)/2);
contextoDeDibujo.lineTo(this.X+this.Ancho, this.Y);
contextoDeDibujo.stroke();

//8
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X+this.Ancho, this.Y+this.Altura);
contextoDeDibujo.lineTo(this.X+(this.largo/2)+(this.Ancho),this.Y+this.Altura/2);
contextoDeDibujo.stroke();

//9
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X+(this.largo/2)+(this.Ancho),this.Y-(this.largo)/2);
contextoDeDibujo.lineTo(this.X+(this.largo/2)+(this.Ancho),this.Y+this.Altura/2);
contextoDeDibujo.stroke();

//10
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X, this.Y+this.Altura);
contextoDeDibujo.lineTo(this.X+(this.largo)/2, this.Y+(this.largo/2));
contextoDeDibujo.stroke();

contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X, this.Y);
contextoDeDibujo.lineTo(this.X+(this.largo/2), this.Y-(this.largo/2));
contextoDeDibujo.stroke();

//11
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X+(this.largo)/2, this.Y-(this.largo)/2);
contextoDeDibujo.lineTo(this.X+(this.largo/2), this.Y+this.largo/2);
contextoDeDibujo.stroke();

//12
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X+(this.largo/2), this.Y+this.largo/2);
contextoDeDibujo.lineTo(this.X+(this.largo/2)+(this.Ancho),this.Y+this.Altura/2);
contextoDeDibujo.stroke();
}
}