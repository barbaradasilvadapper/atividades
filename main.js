// Atividades

// 1. Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.

function calculaArea(altura, largura){
    const area = altura*largura
    console.log(`A área é: ${area}`)
}

const altura = Number(prompt("Informe a altura: "))
const largura = Number(prompt("Informe a largura: "))
calculaArea(altura, largura)



// 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.

function calcularIdade(anoAtual, anoNascimento){
    const idade = anoAtual-anoNascimento
    console.log(`Você tem ${idade} anos`)
}

const anoAtual = Number(prompt("Informe o ano atual: "))
const anoNascimento = Number(prompt("Informe seu ano de nascimento: "))
calcularIdade(anoAtual, anoNascimento)



// 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).

function calcularIMC(peso, altura2){
    const IMC = peso / (altura2*altura2)
    console.log(`Seu IMC é: ${IMC}`)
}

const peso = parseFloat(prompt("Informe seu peso (em kg): "))
const altura2 = parseFloat(prompt("Informe sua altura (ex: 1.65): "))
calcularIMC(peso, altura2)



// 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.

function verificarTamanho(string1, string2){
    
    const tamanhoString1 = string1.length
    const tamanhoString2 = string2.length

    if (tamanhoString1 === tamanhoString2){
        console.log(true)
    }

    else{
        console.log(false)
    }
}

const string1 = prompt("Digite a primeira frase: ")
const string2 = prompt("Digite a segunda frase: ")
verificarTamanho(string1, string2)



// 5. Escreva uma função que recebe um array e retorna o último elemento.

function ultimoElemento(lista){
    ultimo = lista.pop()
    console.log(`O último elemento é: ${ultimo}`)
}

const lista = prompt("Digite sua lista: ").split(",")
ultimoElemento(lista)



// 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

function igualdade(frase1, frase2){
    if (frase1.toLowerCase() === frase2.toLowerCase()){
        console.log(true)
    }

    else{
        console.log(false)
    }
}

const frase1 = prompt("Digite a primeira frase: ")
const frase2 = prompt("Digite a segunda frase: ")
igualdade(frase1, frase2)



// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

function renovarCarteira(anoAtual2, anoNascimento2, anoCarteiraEmitida){

    if (anoAtual2 - anoNascimento2 <= 20 && anoAtual2 - anoCarteiraEmitida >= 5){
        console.log(true)
    }

    else if (anoAtual2 - anoNascimento2 > 20 && anoAtual2 - anoNascimento2 <= 50 && anoAtual2 - anoCarteiraEmitida >= 10){
        console.log(true)
    }

    else if (anoAtual2 - anoNascimento2 > 50 && anoAtual2 - anoCarteiraEmitida >= 15){
        console.log(true)
    }

    else{
        console.log(false)
    }
}

const anoAtual2 = Number(prompt("Informe o ano atual: "))
const anoNascimento2 = Number(prompt("Informe seu ano de nascimento: "))
const anoCarteiraEmitida = Number(prompt("Informe o ano em que sua carteira de identidade foi emitida: "))
renovarCarteira(anoAtual2, anoNascimento2, anoCarteiraEmitida)