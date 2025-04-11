let botao = document.querySelector("#botao");
botao.style.background="blue";
let contaCliques=0;
let estaQuebrado=false;

botao.addEventListener("mouseover", e=> {
    if(!estaQuebado===false)
        botao.style.background="green";
});

botao.addEventListener("mouseout",e => {
    if(!estaQuebrado===false)
        botao.style.background="blue";
});

botao.addEventListener("click", e =>{
    contaCliques++;
    if(contaCliques>=10){

        
        botao.style.background="red";
        botao.innerHTML="quebrei";
        estaQuebrado=true;
    }
});


