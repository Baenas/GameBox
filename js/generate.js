function genearteMap(numerofila,cuadroancho,canti){
let x = 0;
let y = 0;
for (let count = 0; count < canti; count++) {


    for (let ind = 0; ind < numerofila; ind++) {

            y = ind;
            
        const cont1 = document.getElementById('container');
        let cuadro = document.createElement('div');
        cuadro.className = "boxv1";
        cuadro.innerHTML = `x${x} y${y} `;

        cuadro.id= `box-x${x}-y${y}`;
    
  
        cont1.style.width = cuadroancho * numerofila +20+ "px"
        cont1.appendChild(cuadro);
        cuadro.style.width = `${cuadroancho}px`;
        cuadro.style.height = `${cuadroancho}px`;
    }

    
    x = x +1;

}
}


genearteMap(10,70,10);

function defaulMap(){

    
}
