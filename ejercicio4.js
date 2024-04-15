const a = parseFloat(prompt("Ingrese el primer valor numerico"));
const b = parseFloat(prompt("Ingrese el segundo valor numerico"));
const c = parseFloat(prompt("Ingrese el tercer valor numerico"));

if(a>b && a>c){
    alert("El numero mayor es a: "+a);
} else if (b>a && b>c) {
    alert("El numero mayor es b: "+b);
} else if (c>a && c>b){
    alert("El numero mayor es c: "+c);
} else if (a==b && b==c && a==c){
    alert("Todos los valores son iguales");
} else if(a==b && a>c){
    alert("a y b son ambos los mayores valores.");
} else if (a==c && a>b){
    alert("a y c son ambos los mayores valores.");
} else if(b==c && b>a){
    alert("b y c son ambos los mayores valores");
}