const lado_1 = parseFloat(prompt("Ingrese el primer lado del triangulo"));
const lado_2 = parseFloat(prompt("Ingrese el segundo lado del triangulo"));
const lado_3 = parseFloat(prompt("Ingrese el tercer lado del triangulo"));

if(lado_1 != lado_2 && lado_1 != lado_3 && lado_2 != lado_3){
    alert("El tipo de triangulo es escaleno");
} else if(lado_1 == lado_2 && lado_2 != lado_3){
    alert("El tipo de triangulo es isosceles");
} else if (lado_1 == lado_2 && lado_2 == lado_3){
    alert("El tipo de tringulo es equilatero");
} else if (lado_2 == lado_3 && lado_1 != lado_2){
    alert("El tipo de tringulo es isosceles");
} else if (lado_1 == lado_3 && lado_1 != lado_2){
    alert("El tipo de triangulo es isosceles");
}
    
