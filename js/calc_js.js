
let inputNombre=document.getElementById("visor");

let operador1, operador2, resultado;

let signo_mas, signo_por, signo_dividido, signo_menos, signo_igual;

let uno=document.getElementById("uno").addEventListener("click",function() {
    ya_se_resolvio();
    inputNombre.value+="1";
});

let dos=document.getElementById("dos").addEventListener("click",function() { 
    ya_se_resolvio();
    inputNombre.value+="2";});

let tres=document.getElementById("tres").addEventListener("click",function() { ya_se_resolvio();
    inputNombre.value+="3";});

let cuatro=document.getElementById("cuatro").addEventListener("click",function() { ya_se_resolvio();
    inputNombre.value+="4";});

let cinco=document.getElementById("cinco").addEventListener("click",function() { ya_se_resolvio();
    inputNombre.value+="5";});

let seis=document.getElementById("seis").addEventListener("click",function() { ya_se_resolvio();
    inputNombre.value+="6";});

let siete=document.getElementById("siete").addEventListener("click",function() { ya_se_resolvio();
    inputNombre.value+="7";});

let ocho=document.getElementById("ocho").addEventListener("click",function() { ya_se_resolvio();
    inputNombre.value+="8";});

let nueve=document.getElementById("nueve").addEventListener("click",function() { ya_se_resolvio();
    inputNombre.value+="9";});

let cero=document.getElementById("cero").addEventListener("click",function() { ya_se_resolvio();
    inputNombre.value+="0";});

let decimal=document.getElementById("decimal").addEventListener("click",function(){
    ya_se_resolvio();
    inputNombre.value+=".";});

let borrar=document.getElementById("borrar").addEventListener("click",function(){
    inputNombre.value="";
})

let adicion=document.getElementById("suma").addEventListener("click",function(){
    operador1=parseFloat(inputNombre.value);
    signo_mas=true;
    inputNombre.value="";
});

let producto=document.getElementById("producto").addEventListener("click", function(){
    operador1=parseFloat(inputNombre.value);
    signo_por=true;
    inputNombre.value="";
});

let division=document.getElementById("division").addEventListener("click",function(){
    operador1=parseFloat(inputNombre.value);
    signo_dividido=true;
    inputNombre="";
});

let resta=document.getElementById("resta").addEventListener("click",function(){
    operador1=parseFloat(inputNombre.value);
    signo_menos=true;
    inputNombre="";
});
// ésta función se ocupa de realizar los cálculos y presentarlos en el visor
let igual=document.getElementById("igual").addEventListener("click", function(){
    operador2=parseFloat(inputNombre.value);
    console.log(operador1," ",operador2,signo_mas);
    if(signo_mas){
        resultado=operador1+operador2;
        signo_mas=false;
        console.log("sume", resultado);
    } else if(signo_por){
            resultado=operador1*operador2;
        signo_por=false;
        
    } else if(signo_dividido){
            resultado=operador1/operador2;
            signo_dividido=false;
        } else if(signo_menos){
            resultado=operador1-operador2;
            signo_menos=false;
        }
        inputNombre.value=resultado.toString();
        signo_igual=true;
});

function ya_se_resolvio(){
    if(signo_igual){
        inputNombre.value="";
        signo_igual=false;
    };
};