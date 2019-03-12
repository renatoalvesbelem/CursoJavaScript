//ES8: Object.values/Object.entries
const obj = {a:1,b:2,c:3}

console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

//melhorias de notações literais

const nome = 'carla'
const pessoa ={
    nome,
    ola(){
       return 'OI'     
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class
class Animal{}
class Cao extends Animal{
    falar(){
        return 'au'
    }
}

console.log(new Cao().falar());