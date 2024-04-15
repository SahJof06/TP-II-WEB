const edad = parseInt(prompt("Ingrese su edad."));

if( edad >= 18 && edad < 100 ){
    alert("Usted es mayor de edad");
} else if(edad < 18 && edad > 0){
    alert("Usted es menor de edad");
} else if( edad <=0){
    alert("Usted aun no esta vivo");
} else if(edad >= 100){
    alert("Usted es un vejestorio con patas");
} 

    