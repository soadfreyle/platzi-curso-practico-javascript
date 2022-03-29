// Este es el codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm");

function perimetroCuadrado1(lado){
    return lado * 4;
}

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Area del cuadrado es: " + areaCuadrado +"cm 2");

function areaCuadrado1(lado){
    return lado * lado;
}

console.groupEnd();

//Este es el codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del Triangulo es: " + perimetroTriangulo +"cm");

function perimetroTriangulo2(lado1, lado2, base){
    return lado1 + lado2 + base;
}

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El Area del Triangulo es: " + areaTriangulo +"cm 2");

function areaTriangulo2(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();





//Código del Circulos
console.group("Circulos");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + " cms.");

function diametroCirculo3(radio){
    return radio * 2;
}
// PI
const PI = Math.PI;
console.log("PI es " + PI + ".");
// Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");

function perimetroCirculo3(radio){
    const diametro = diametroCirculo3(radio);
    return diametro * PI;

}
//Area
const areaCirculo = PI * (radioCirculo**2);
console.log("El area del circulo es " + areaCirculo + " cms.");

function areaCirculo3(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

//Aqui interactuo con HTML calcular Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado1(value);
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado1(value);
    alert(area);
}
//para calcular area y perimetro triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLadoTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputLadoTriangulo2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputBaseTriangulo");
     const value3 = Number(input3.value);

     const perimetro = perimetroTriangulo2(value1, value2, value3);
    alert("El perimetro del triangulo es: " + perimetro);
    
}

function obtenerArea(){
    
    const input1 = document.getElementById("base");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("altura");
    const value2 = Number(input2.value);

    const area = areaTriangulo2(value1, value2);

    alert("El area del triangulo es: " + area);
    
   }

//Calcular area y perimetro de un Circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo3(value);
    alert("El perimetro del circulo es: " + perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const area = areaCirculo3(value);
    alert("El area del circulo es: " + area);
}

//Reto: Matematicas con JavaScript
function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert('isoceles')
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        console.log(altura)
    }
    else{
        alert('no lo se')
    }
}

