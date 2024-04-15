const edad1 = parseInt(prompt("Ingrese la edad del primer hermano"));
const edad2 = parseInt(prompt("Ingrese la edad del segundo hermano"));

if (edad1 < edad2){
    let dif = edad2 - edad1;
    alert("El segundo hermano es el mayor con una diferencia de "+dif+" años");
} else if (edad1 > edad2){
    let dif = edad1 - edad2;
    alert("El primer hermano es el mayor con una diferencia de "+dif+" años");
}