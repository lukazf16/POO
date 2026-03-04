const btnsuma=document.getElementById("btnsuma");
btnsuma.addEventListener("click", function(){
    let n=parseInt(document.getElementById("num").value);
    let divresultadoSuma=document.getElementById("resultadoSuma");
    if (isNaN(n) || n < 1) {
        divresultadoSuma.innerHTML = "Ingrese un número positivo";
        return;
    }
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    divresultadoSuma.innerHTML = "La suma de los números del 1 al " + n + " es: " + suma;
})

const btnfactorial=document.getElementById("btnfactorial");
btnfactorial.addEventListener("click", function(){
    let numero=document.getElementById("numeroFactorial").value;
    let divresultadoFactorial=document.getElementById("resultadofactorial");
    if (isNaN(numero) || numero < 0) {
        divresultadoFactorial.innerHTML = "Ingrese un número positivo";
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    divresultadoFactorial.innerHTML = "El factorial de " + numero + " es: " + factorial;
})

const btnReto=document.getElementById("btnReto");
btnReto.addEventListener("click", function(){
    let numReto=document.getElementById("numReto").value;
    let divresReto=document.getElementById("resReto");
    let n=Number(numReto);
    if (numReto===""||isNaN(n)|| !Number.isInteger(n)||n<=0){
        divresReto.innerHTML="Ingrese un número entero positivo";
        return;
    }
    let suma=0;
    let serie=[];
    for (let i=1; i<=n; i++){
        suma+=i;
        serie.push(i);
    }
    let parimpar="";
    if (n%2===0){
        parimpar="par";
    } else {
        parimpar="impar";
    }
    divresReto.innerHTML = "Serie: " + serie.join(", ") + "<br>Suma: " + suma + "<br>Número par o impar: " + parimpar;
})
