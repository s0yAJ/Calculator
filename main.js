const cero = document.querySelector(".Numero0");
const uno = document.querySelector(".Numero1");
const dos = document.querySelector(".Numero2");
const tres = document.querySelector(".Numero3");
const cuatro = document.querySelector(".Numero4");
const cinco = document.querySelector(".Numero5");
const seis = document.querySelector(".Numero6");
const siete = document.querySelector(".Numero7");
const ocho = document.querySelector(".Numero8");
const nueve = document.querySelector(".Numero9");
const Mas = document.querySelector(".NumeroMas");
const Menos = document.querySelector(".NumeroMenos");
const Vaciar = document.querySelector(".NumeroVaciar");

let Write = document.getElementById("pantalla");
Write.disabled = true;

Mas.addEventListener("click", ()=>{
    Write.value += "+";
});

Menos.addEventListener("click", ()=>{
    Write.value += "-";
});

cero.addEventListener("click", ()=>{
    Write.value += 0;
});

uno.addEventListener("click", ()=>{
    Write.value += 1;
});

dos.addEventListener("click", ()=>{
    Write.value += 2;
});

tres.addEventListener("click", ()=>{
    Write.value += 3;
});

cuatro.addEventListener("click", ()=>{
    Write.value += 4;
});

cinco.addEventListener("click", ()=>{
    Write.value += 5;
});

seis.addEventListener("click", ()=>{
    Write.value += 6;
});

siete.addEventListener("click", ()=>{
    Write.value += 7;
});

ocho.addEventListener("click", ()=>{
    Write.value += 8;
});

nueve.addEventListener("click", ()=>{
    Write.value += 9;
});

function Calcular() {
    let datos = document.getElementById("pantalla");

    if(datos.value.includes("*") && datos.value.includes("/") || datos.value.includes("*") && datos.value.includes("+") || 
       datos.value.includes("-") && datos.value.includes("/") || datos.value.includes("/") && datos.value.includes("+") ||
       datos.value.includes("-") && datos.value.includes("*")){
            alert("El calculo que usted quiere resalizar no es punible: solo sume, y reste dos valores.");
    }else{

        if(datos.value.includes("-")){
            let result = datos.value.split("-");
            document.getElementById("pantalla").value = (parseInt(result[0])-parseInt(result[1]));
        }else if(datos.value.includes("+")){
            let result = datos.value.split("+");
            document.getElementById("pantalla").value = (parseInt(result[0])+parseInt(result[1]));
        }
    }
}

function Borrar(){
    document.getElementById("pantalla").value = '';
}

function BorrarHaciaTras(){
    let textarea = document.getElementById("pantalla");

    let nuevo = textarea.value.slice(0, -1);
    textarea.value = nuevo;
}