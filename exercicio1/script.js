//Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function capsLock(objCopy){
    for(i in objCopy){
        objCopy[i] = objCopy[i].toUpperCase()
    }
    return objCopy
}

//===============================================================

// 2. A segunda deve retornar os valores do objeto como texto corrido.

function values(objCopy){
    texto = ""
    for(i in objCopy){
        texto += `${objCopy[i]}`
    }
    return texto.trim()
}

//==============================================================

//3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

function callBack(objCopy, func){
    console.log(func(objCopy))
}

callBack(objeto, capsLock)
callBack(objeto, values)