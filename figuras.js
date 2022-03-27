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
    return lado * 2
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
    return (base * altura / 2);
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