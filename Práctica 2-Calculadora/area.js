const btnTriangulo=document.getElementById("btnTriangulo");
btnTriangulo.addEventListener("click", function(){
    let base=document.getElementById("baseTriangulo").value;
    let altura=document.getElementById("alturaTriangulo").value;
    if (base <=0||altura<=0){
        document.getElementById("resultadoTriangulo").innerHTML="Ingrese valores positivos o mayores a 0"
        return;
    }
    let area= (base*altura)/2;
    document.getElementById("resultadoTriangulo").innerHTML="El área del triángulo es: "+area.toFixed(2);
});

const btnEsfera=document.getElementById("btnEsfera");
btnEsfera.addEventListener("click", function(){
    let radio=document.getElementById("radioEsfera").value;
    if (radio <=0){
        document.getElementById("resultadoEsfera").innerHTML="Ingrese un valor positivo o mayor a 0"
        return;
    }
    let volumen= (4/3)*Math.PI*(radio**3);
    document.getElementById("resultadoEsfera").innerHTML="El volumen de la esfera es: "+volumen.toFixed(2);
});

const btnMoney=document.getElementById("btnpesosadolares");
btnMoney.addEventListener("click", function(){
    let peso=document.getElementById("pesos").value;
    let dolar=document.getElementById("cambio").value;
    if (peso <=0||dolar<=0){
        document.getElementById("conversion").innerHTML="Ingrese valores positivos o mayores a 0"
        return;
    }
    let conversion= peso*dolar;
    document.getElementById("conversion").innerHTML="Son : "+conversion + " dolares";
});

const menu=document.getElementById("menu");
const seccionTriangulo=document.getElementById("seccion-triangulo");
const seccionEsfera=document.getElementById("seccion-esfera");
const seccionMoney=document.getElementById("seccion-money");

function ocultarTodo(){
    seccionTriangulo.classList.add("oculto");
    seccionEsfera.classList.add("oculto")
    seccionMoney.classList.add("oculto");
}

menu.addEventListener("change", function(){
    ocultarTodo();
    let opcionElegida=menu.value;
    if (opcionElegida==="triangulo"){
        seccionTriangulo.classList.remove("oculto");
    } else if (opcionElegida==="esfera"){
        seccionEsfera.classList.remove("oculto");
    } else if (opcionElegida==="money"){
        seccionMoney.classList.remove("oculto");
    }
});
