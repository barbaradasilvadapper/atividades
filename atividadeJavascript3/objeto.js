
// 1. Resolva os passos a seguir

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e lista de compras (um array que sempre terá exatamente três itens). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// "Olá, nome. Hoje seus itens prioritários na lista de comprar são ___, ____ e ____"

const lista = {
    nome:'Bruna',
    itens: ['arroz', 'carne', 'tomate']
}

function imprimirLista(lista){
    console.log(`Olá, ${lista.nome}. Hoje seus itens prioritários na lista de compras são ${lista.itens[0]}, ${lista.itens[1]} e ${lista.itens[2]}`)
}

imprimirLista(lista)


// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de itens. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const novaLista = {
    ...lista,
    itens: ['morango', 'banana', 'uva']
}

imprimirLista(novaLista)


// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const pessoa1 = {
    nome: 'Bárbara',
    idade: 17,
    profissao: 'estudante'
}

const pessoa2 = {
    nome: 'Joana',
    idade: 21,
    profissao: 'jornalista'
}


//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

function verificar(pessoa1){
    const infos = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
    console.log(infos)
}

verificar(pessoa1)
verificar(pessoa2)


// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
  
const carrinho = []


//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const fruta1 = {
    nome: 'banana',
    disponibilidade: true 
}

const fruta2 = {
    nome: 'morango',
    disponibilidade: true 
}

const fruta3 = {
    nome: 'uva',
    disponibilidade: false 
}


//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
//     - 💡  Dica     
//       Aqui você deve usar o método **push()**

function receberFruta(fruta1){
    carrinho.push(fruta1)
}

receberFruta(fruta1)
receberFruta(fruta2)
receberFruta(fruta3)

//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

console.log(carrinho)


// 4. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function perguntas(){
    const pergunta1 = (prompt("Digite seu nome: "))
    const pergunta2 = (prompt("Digite sua idade: "))
    const pergunta3 = (prompt("Digite sua profissao: "))

    const respostas = {
        nome: pergunta1,
        idade: pergunta2,
        profissao: pergunta3
    }

    console.log(respostas)
    console.log(typeof respostas)
}

perguntas()