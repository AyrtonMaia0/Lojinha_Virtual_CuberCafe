

/*
//------TESTE
//botao-div-calcular
var cliqueA = window.document.getElementById("calcularA");
cliqueA.addEventListener('click', clicarA);
//botao-div-calcular
var saiuA = window.document.getElementById("calcularA");
saiuA.addEventListener('mouseout', sairA);
function sairA(){
    saiuA.innerHTML = "Calcular"
}
function clicarA(){
    cliqueA.innerHTML = "clicou";

    var opcaoValor = select.options[select.selectedIndex].text;
    var rest = Number.parseInt(document.getElementById("res"));
    rest.innerHTML = (opcaoValor * rest)

    var qtd = window.document.getElementById("qtd");
    var valorQtd = qtd.options[qtd.selectedIndex].value;
    valorQtd = Number.parseInt(valorQtd);


    var tp = window.document.getElementById("tp");
    var valorTp = tp.options[tp.selectedIndex].text;

    var restA = window.document.getElementById("resA");
    //var r = Number.parseFloat(restA); // nao to conseguindo colcular como numero
    var valorQtdA = qtdA.options[qtdA.selectedIndex].value;
    var totalA = valorQtdA * 90.00; //gambiarra
    //var total = valorQtdA * r; // esta dando NaN nao sei o pq
    //console.log(totalA);
   // alert(valorQtdA);
    restA.innerHTML = totalA.toFixed(2).replace('.',','); 

//    rest.innerHTML = (valorQtd * Number.parseInt(rest)).toFixed(2).replace('.',',');
//    rest.innerHTML = valorQtd * valorTp; 
}
*/
/*

    if(valorQtdA == 0 || valorQtdA == null){
        var totalA = 1 * 90.00; //gambiarra
    }else{
        var totalA = valorQtdA * 90.00; //gambiarra
    }
*/

//---------PAG A
var cliqueA = document.getElementById("calcularA");
cliqueA.addEventListener('click', clicarA);

//---CLICK
function clicarA(){
    var restA = window.document.getElementById("resA");
    var valorQtdA = qtdA.options[qtdA.selectedIndex].value;

    document.getElementById('resA').style.color = '#000'; //PRETO

    if(valorQtdA == 0 || valorQtdA == null){
        var totalA = 1 * 90.00; //gambiarra
    }else{
        var totalA = valorQtdA * 90.00; //gambiarra
    }
    
    restA.innerHTML = totalA.toFixed(2).replace('.',',');
}


//---CARRINHO
var carrinhoA = document.getElementById("carrinhoA");
    carrinhoA.addEventListener('click', clickCarrinhoA);

function clickCarrinhoA(){
    alert("Seu pedido foi Adicionado ao Carrinho");

    var carrA = window.document.getElementById("addcarrA");
    var valorQtdA = qtdA.options[qtdA.selectedIndex].value;
    //if(carrA == '' || carrA == null){carrA = 0} --> falha
    var totalA = valorQtdA * 90.00; //gambiarra
    carrA.innerHTML = totalA.toFixed(2).replace('.',',');

    document.getElementById('addcarrA').style.color = '#00f572';//---VERDE
}

//---SAIR
var saiuA = window.document.getElementById("calcularA");
saiuA.addEventListener('mouseout', sairA);

function sairA(){
    saiuA.innerHTML = "Calcular"
}





//---------PAG B
var cliqueB = document.getElementById("calcularB");
cliqueB.addEventListener('click', clicarB);

//---CLICK
function clicarB(){
    var restB = window.document.getElementById("resB");
    var valorQtdB = qtdB.options[qtdB.selectedIndex].value; //CAPTURA-SELECT

    document.getElementById('resB').style.color = '#000'; //PRETO

    if(valorQtdB == 0 || valorQtdB == null){
        var totalB = 1 * 60.00; //gambiarra
    }else{
        var totalB = valorQtdB * 60.00; //gambiarra
    }

    restB.innerHTML = totalB.toFixed(2).replace('.',',');
}

//---CARRINHO
var carrinhoB = document.getElementById("carrinhoB");
    carrinhoB.addEventListener('click', clickCarrinhoB);

function clickCarrinhoB(){
    alert("Seu pedido foi Adicionado ao Carrinho");

    var carrB = window.document.getElementById("addcarrB");
    var valorQtdB = qtdB.options[qtdB.selectedIndex].value;
    var totalB = valorQtdB * 60.00; //gambiarra
    carrB.innerHTML = totalB.toFixed(2).replace('.',',');
    
    document.getElementById('addcarrB').style.color = '#00f572';//---VERDE
}

//---SAIR
var saiuB = window.document.getElementById("calcularB");
saiuB.addEventListener('mouseout', sairB);

function sairB(){
    saiuB.innerHTML = "Calcular"
}





//---------PAG C
var cliqueC = document.getElementById("calcularC");
cliqueC.addEventListener('click', clicarC);

//---CLICK
function clicarC(){
    var restC = window.document.getElementById("resC");
    var valorQtdC = qtdC.options[qtdC.selectedIndex].text;

    document.getElementById('resC').style.color = '#000';

    if(valorQtdC == 0 || valorQtdC == null){
        var totalC = 1 * 30.00; //gambiarra
    }else{
        var totalC = valorQtdC * 30.00; //gambiarra
    }

    restC.innerHTML = totalC.toFixed(2).replace('.',',');
}

//---CARRINHO
var carrinhoC = document.getElementById("carrinhoC");
    carrinhoC.addEventListener('click', clickCarrinhoC);

function clickCarrinhoC(){
    alert("Seu pedido foi Adicionado ao Carrinho");

    var carrC = window.document.getElementById("addcarrC");
    var valorQtdC = qtdC.options[qtdC.selectedIndex].text;
    var totalC = valorQtdC * 30.00; //gambiarra
    carrC.innerHTML = totalC.toFixed(2).replace('.',',');
    
    document.getElementById('addcarrC').style.color = '#00f572';//---VERDE
}

//---SAIR
var saiuC = window.document.getElementById("calcularC");
saiuC.addEventListener('mouseout', sairC);

function sairC(){
    saiuC.innerHTML = "Calcular"
}





//---------PAG D
var cliqueD = document.getElementById("calcularD");
cliqueD.addEventListener('click', clicarD);

//---CLICK
function clicarD(){
    var restD = window.document.getElementById("resD");
    var valorQtdD = qtdD.options[qtdD.selectedIndex].text;

    document.getElementById('resD').style.color = '#000';

    if(valorQtdD == 0 || valorQtdD == null){
        var totalD = 1 * 55.00; //gambiarra
    }else{
        var totalD = valorQtdD * 55.00; //gambiarra
    }

    restD.innerHTML = totalD.toFixed(2).replace('.',',');
}

//---CARRINHO
var carrinhoD = document.getElementById("carrinhoD");
    carrinhoD.addEventListener('click', clickCarrinhoD);

function clickCarrinhoD(){
    alert("Seu pedido foi Adicionado ao Carrinho");

    var carrD = window.document.getElementById("addcarrD");
    var valorQtdD = qtdD.options[qtdD.selectedIndex].text;
    var totalD = valorQtdD * 55.00; //gambiarra
    carrD.innerHTML = totalD.toFixed(2).replace('.',',');
    
    document.getElementById('addcarrD').style.color = '#00f572';//---VERDE
}

//---SAIR
var saiuD = window.document.getElementById("calcularD");
saiuD.addEventListener('mouseout', sairD);

function sairD(){
    saiuD.innerHTML = "Calcular"
}





//---------PAG E
var cliqueE = document.getElementById("calcularE");
cliqueE.addEventListener('click', clicarE);

//---CLICK
function clicarE(){
    var restE = window.document.getElementById("resE");
    var valorQtdE = qtdE.options[qtdE.selectedIndex].text;

    document.getElementById('resE').style.color = '#000';

    if(valorQtdE == 0 || valorQtdE == null){
        var totalE = 1 * 24.00; //gambiarra
    }else{
        var totalE = valorQtdE * 24.00; //gambiarra
    }

    restE.innerHTML = totalE.toFixed(2).replace('.',',');
}

//---CARRINHO
var carrinhoE = document.getElementById("carrinhoE");
    carrinhoE.addEventListener('click', clickCarrinhoE);

function clickCarrinhoE(){
    alert("Seu pedido foi Adicionado ao Carrinho");

    var carrE = window.document.getElementById("addcarrE");
    var valorQtdE = qtdE.options[qtdE.selectedIndex].text;
    var totalE = valorQtdE * 24.00; //gambiarra
    carrE.innerHTML = totalE.toFixed(2).replace('.',',');
    
    document.getElementById('addcarrE').style.color = '#00f572';//---VERDE
}

//---SAIR
var saiuE = window.document.getElementById("calcularE");
saiuE.addEventListener('mouseout', sairE);

function sairE(){
    saiuE.innerHTML = "Calcular"
}





//---------PAG F
var cliqueF = document.getElementById("calcularF");
cliqueF.addEventListener('click', clicarF);

//---CLICK
function clicarF(){
    var restF = window.document.getElementById("resF");
    var valorQtdF = qtdF.options[qtdF.selectedIndex].text;

    document.getElementById('resF').style.color = '#000';

    if(valorQtdF == 0 || valorQtdF == null){
        var totalF = 1 * 80.00; //gambiarra
    }else{
        var totalF = valorQtdF * 80.00; //gambiarra
    }

    restF.innerHTML = totalF.toFixed(2).replace('.',',');
}

//---CARRINHO
var carrinhoF = document.getElementById("carrinhoF");
    carrinhoF.addEventListener('click', clickCarrinhoF);

function clickCarrinhoF(){
    alert("Seu pedido foi Adicionado ao Carrinho");

    var carrF = window.document.getElementById("addcarrF");
    var valorQtdF = qtdF.options[qtdF.selectedIndex].text;
    var totalF = valorQtdF * 80.00; //gambiarra
    carrF.innerHTML = totalF.toFixed(2).replace('.',',');
    
    document.getElementById('addcarrF').style.color = '#00f572';//---VERDE
}

//---SAIR
var saiuF = window.document.getElementById("calcularF");
saiuF.addEventListener('mouseout', sairF);

function sairF(){
    saiuF.innerHTML = "Calcular"
}