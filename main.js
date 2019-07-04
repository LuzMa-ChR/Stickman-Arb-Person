function dibujarPersona()
{

	var canvas=document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	var	arregloPersonas; //Declarar
	arregloPersonas=new Array(new Persona("Corza",19,"green",100,50,10,20),
							new Persona("Andres",25,"pink",60,20,100,20),
							new Persona("Juan",23,"red",150,30,200,20),
							new Persona("Pedro",45,"maroon",126,50,250,20),
							new Persona("Alfredo",50,"blue",90,100,400,20),
							new Persona("Jose",10,"black",100,80,500,20));

		
	for (var i = arregloPersonas.length-1; i>=0;i--)
	{
				arregloPersonas[i].Dibujar(context);
	}

}

function dibujarArbol()
{
	var canvas=document.getElementById("myCanvas");
	var context = canvas.getContext("2d");


	var arregloArboles;
	arregloArboles=new Array(new Arbol("green",80,50,10,250,5,1),
							new Arbol("orange",80,85,100,250,5,1),
							new Arbol("black",80,59,250,250,5,1),
							new Arbol("red",80,70,350,250,5,1),
							new Arbol("marron",85,60,450,250,5,1));

	for (var ar = arregloArboles.length-1; ar>=0;ar--)
	{
				arregloArboles[ar].Dibujar(context);
	}
}

function dibujarCaja()
{
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	var arregloCaja = new Array(new Caja("red",30,30,30,7000,10,450),
			       new Caja("green",40,40,40,6500,100,450),
			       new Caja("blue",20,20,20,7000,190,450),
			       new Caja("orange",35,35,35,475,280,450),
			       new Caja("black",25,25,25,625,360,450));

	for (var p = arregloCaja.length - 1; p >= 0; p--) 
	{
		arregloCaja[p].Dibujar(context);
	}
}