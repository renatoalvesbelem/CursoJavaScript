//this se refere ao esocppop global no contexto node, e window no contexto web
let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global)


const obj = {}
comparaComThis = comparaComThis.bind(obj)
//this do comparaComThis agora aponta para o objeto obj e não mais para o escopo global
comparaComThis(global)
comparaComThis(obj)

//o this no arrow aponta para o objeto corrente no 
let comparaThisArrow = param => console.log(this === param)
comparaThisArrow(global)
comparaThisArrow(this)

//neste caso o arrow fucntion é mais forte que o bind
comparaThisArrow = comparaThisArrow.bind(obj)
comparaThisArrow(obj)
comparaThisArrow(module.exports)