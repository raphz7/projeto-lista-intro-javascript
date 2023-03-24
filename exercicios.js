// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

     const perguntaUm = prompt ("Digite a altura do triangulo")
     const perguntaDois = prompt ("Digite a largura do triangulo")
     const calculaArea = perguntaUm * perguntaDois         
     console.log(calculaArea)
}
  

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

     const anoAtual = prompt (`Insira o ano atual`) 
     const anoNascimento = prompt (`Insira o seu ano de nascimento`)
     const subtrair = anoAtual - anoNascimento
     console.log(subtrair)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

    let imc = peso / (altura * altura)
    return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

    const nome = prompt ("Insira seu nome")
    const idade = Number (prompt ("Insira sua idade"))
    const email = prompt ("Insira seu email")

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
    
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

     const corUm = prompt (`Insira sua cor favorita`)
     const corDois = prompt (`Insira sua segunda cor favorita`)
     const corTres = prompt (`Insira a sua terceira cor favorita`)
     const array = [corUm, corDois, corTres]
     console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

    const maiusculo = string.toUpperCase()
    return maiusculo

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

    let calculo = custo / valorIngresso
    return calculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

    const strings = ((string1.length) === (string2.length))
    return strings
      
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

   const arrayItem = array[0]
   return arrayItem

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  const arrayUltimoItem = array[array.length-1]
  return arrayUltimoItem

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 
    let trocar = array.splice(array.length -1, 1, array[0]) [0]
    array [0] = trocar
    return array

}  

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

    const strings = (string1.toLowerCase() === string2.toLowerCase())
    return strings

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  
   const ano = Number(prompt(`Insira o ano atual`))
   const nascimento = Number(prompt (`Insira o ano de Nascimento`))
   const cnh = Number(prompt(`Insira o ano em que emitiu a CNH`))

   const anoDois = ano - nascimento
   const total = ((anoDois <= 20 && ano - cnh >= 5) || (anoDois >= 21 && anoDois <= 50 && ano - cnh >= 10) || (anoDois >= 51 && ano - cnh >= 15))

   console.log(total)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  const total = ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0));

  return total;

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const idade = prompt(`você tem mais de 18 anos?`);
  const ensinoMedio = prompt(`você possui ensino medio completo?`);
  const horarios = prompt(`você está disponivel durante os horarios do curso?`);

  const total = (idade === 'sim' && ensinoMedio === 'sim' && horarios === 'sim');

  console.log(total);

  return total

}