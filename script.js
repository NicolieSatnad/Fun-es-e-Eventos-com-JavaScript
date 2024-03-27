
//ex 1
function clicar() {
    let Fah,Cel;
    Fah = Number(document.getElementById("Fah").value);
    Cel = (Fah-32)*5/9;
    document.getElementById("mensagem").innerHTML =
    "A TEMPERATURA DE " + Fah + " Fahrenheit, covertida para Celsius é de: " + Cel;

} 
// ex 2
function boasvindas(nome) {
    document.getElementById("mensagem").innerHTML = "Olá " + nome + " seja bem vindo!";


} 

function funcionario()
{
 let nome = document.getElementById("nome").value; 
 boasvindas ( nome );

 let INSS, sal, IR, LIQUIDO;
 sal = Number (document.getElementById("salario").value);
 INSS = (sal*8/100);
 IR = (sal*15/100);
 LIQUIDO = (sal-INSS-IR);
 document.getElementById("mensagem").innerHTML =
 " O valor do INSS é de: " + INSS +
 " O valor do IR é de: " + IR  +
 " O valor LIQUIDO é de: " + LIQUIDO;
//////

}
// ex 3
function comissao()
{
 let fixo, vendas;
 fixo = Number (document.getElementById("fixo").value);
 vendas = Number (document.getElementById("vendas").value);
 comi = (vendas*5/100);
 final = (fixo+comi);
 document.getElementById("mensagem").innerHTML =
 " O valor do salario fixo é de: " + fixo +
 " O valor de vendas é de: " + vendas  +
 " O valor das comissoes é de: " + comi +
 " O valor final é de: " + final ;

}

// ex 4
function taxas()
{
 let atraso, taxa, tempo, valor;
 atraso = Number (document.getElementById("atraso").value);
 taxa = Number (document.getElementById("taxa").value);
 tempo = Number (document.getElementById("tempo").value);
 valor = (atraso+(atraso*taxa/100)*tempo);
 
 document.getElementById("mensagem").innerHTML =
 " O valor em atraso é de: " + atraso +
 " O valor de taxa é de: " + taxa  +
 " O tempo em atraso é de: " + tempo +
 " O valor atualizado é de: " + valor ;

}

//ex 5 
function professor()
{
 let qtde, valor, sal, INSS, IR, final, sal2;
 qtde = Number (document.getElementById("aulas").value);
 valor = Number (document.getElementById("valora").value);

 sal = (qtde*valor);
sal2 = (sal*6,2);
INSS = (sal2*11,2/100);
IR = ((sal2-INSS)*15/100);
final = (sal2-IR);
 
 document.getElementById("mensagem").innerHTML =
 " O valor do salario bruto é de: " + sal +
 " O valor de INSS é de: " + INSS  +
 " O valor do IR é de: " + IR +
 " O valor FINAL é de: " + final ;

}

// ex 6
function diferenca()
{
 let num1, num2;
 num1 = Number (document.getElementById("num1").value);
 num2 = Number (document.getElementById("num2").value);

if (num1 === num2)
{
    document.getElementById("mensagem").innerHTML =
    " Os numeros são IGUAIS";
}
else
 {
    document.getElementById("mensagem").innerHTML =
    " Os numeros são DIFERENTES ";
}
}

// ex 7
function somad()
{
 let num1, num2, num3;
 num1 = Number (document.getElementById("num1").value);
 num2 = Number (document.getElementById("num2").value);
 num3 = Number (document.getElementById("num3").value);

if ((num1+num2)<num3)
{
    document.getElementById("mensagem").innerHTML =
    " A soma de A+B é MENOR que C";
}
else
 {
    document.getElementById("mensagem").innerHTML =
    " A soma de A+B é MAIOR que C ";
}
}

// ex 8 
function reajuste()
{
 let sal;
 sal = Number (document.getElementById("salario").value);


if (sal>500)
{
    document.getElementById("mensagem").innerHTML =
    " Voce NÃO tem direito ao reajuste salarial";
}
else
 {
    document.getElementById("mensagem").innerHTML =
    " Voce TEM direito ao reajuste salarial";
}
}

function reajustado()
{
 let sal,reajustado;
 sal = Number (document.getElementById("salario").value);


if (sal>500)
{
    document.getElementById("mensagem").innerHTML =
    " Voce NÃO tem direito ao reajuste salarial";

}
else
 {
    document.getElementById("mensagem").innerHTML =
    " Voce TEM direito ao reajuste salarial";

    reajustado = ((sal*30/100)+sal);
    document.getElementById("mensagem").innerHTML =
    " O seu salario reajustado é no valor de: "+ reajustado;

}
}
// ex 10!!!!!!!!!!!!!!!!!!!!!!!
function codigop()
{
 let cod;
 cod = Number (document.getElementById("codigo").value);


if (cod == 5)
{
    document.getElementById("mensagem").innerHTML =
    " CODIGO = 5; Descrição = TENIS NIKE; VALOR = R$500,00";

}
if (cod == 10) {
    document.getElementById("mensagem").innerHTML =
    " CODIGO = 10; Descrição = TENIS ADIDAS; VALOR = R$300,00";
}
else
 {
    document.getElementById("mensagem").innerHTML =
    " ESTE CODIGO NÃO ESTA CADASTRADO NO SISTEMA";
}
}


