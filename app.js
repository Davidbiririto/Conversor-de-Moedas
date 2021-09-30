/*
funções
   funções do js
       alert()
       console.log()
   
   funções personalizada
     -funções criadas pela pessoa que estã
    desenvolvendo
     - a função precisa ser chamada para ser
      executada
     - para criar uma função usamos a palavra 
     function
     function abacaxi(){

     }


*/

/*
function EscreverFrases(texto){
console.log(texto)
}

EscreverFrases("Tudo sei que nada sei")
EscreverFrases("Sozinho vou rapido, Juntos vamos longe")
*/

// parseFloat --> converte de texto para decimal
//parseInt --> converte de texto para inteiro
function Converter(){
    // DOM - Document  Object Model
    // let valorEmDolar = document.getElementByid("valor").value
    let valorEmDolar = document.querySelector("#valor").value

    let valorEmDolarNumerico = parseFloat(valorEmDolar)

    let cotacaoDolar = 5
    let valorEmReal = valorEmDolarNumerico * cotacaoDolar

    /** INSERIR O RESULTADO NA TELA */
    document.querySelector("#valorConvertido").innerHTML = "O resultado em real é R$" + valorEmReal.toFixed(2)
  

    let bitcoin = valoEmReal / 225000
    document.querySelector("#valorBitcoin").innerHTML = "O resultado do Bitcoin é " + bitcoin.toFixed(2)


}

