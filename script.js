//declaracion de variables simples.
let gamerpoins = 0;
//esta parte define que elige el jugador.
gamerpoins = prompt('elige 1 para piedra, elige 2 para tijeras o elige 3 para papel.');
//este codigo toma uno de los valores de pcpoins de forma aleatoria.
function alenum(numemax) {
    return Math.floor(Math.random() * (numemax) + 1);
}
pcpoins = alenum(3);
//esta parte del codigo compara que ha eligido el jugador y el pc para imprimir respuesta en pantalla.

//aqui esta la funcion que imprime lo que escogio cada usuario del juego.
function selection_gandpc(pcogamer) {
    if (pcogamer == 1) {
        document.write('Piedra');
    }    else if(pcogamer == 2) {
        document.write('Tijera');
    }   else if(pcogamer == 3) {
        document.write('Papel');
    }   else {
        document.write('Error');
    }
}
document.write('<br> El Jugador a elegido: </br>');
selection_gandpc(gamerpoins);
document.write('<br> El PC a elegido: </br>');
selection_gandpc(pcpoins);
//esta condicional define quien a ganado, bajo una simple resta (si el resultado es -1 o 2 ganas, si es una igualdad entre los puntos del jugador y del pc es empate y si es un resultado diferente pierdes)
if (gamerpoins == pcpoins) {
    document.write(' <br>Empate</br>');
}   else if((gamerpoins - pcpoins) == -1) {
    document.write(' <br>Ganaste</br>');
}   else if((gamerpoins - pcpoins) == 2) {
    document.write(' <br>Ganaste</br>');
}   else {
    document.write(' <br>Perdiste</br>');
}