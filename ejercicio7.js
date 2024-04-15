const unidad = parseInt(prompt("Ingrese la cantidad de unidades producidas."));
const total = unidad*15;

if(unidad>100){
    let porcentaje = (total*10) / 100;
    let final = total+porcentaje;
    alert("La cantidad de unidades supera las 100 unidades por lo tanto recibira un incentivo de 10%");
    alert("El total a pagar es de: $"+final);
} else {
    alert("El total a pagar es de: $"+total);
}