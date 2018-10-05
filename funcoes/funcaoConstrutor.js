function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocideAtual = 0
    //metodo Público
    this.acelerar = function () {
        if (velocideAtual + delta <= velocidadeMaxima) {
            velocideAtual += delta
        }
        else {
            velocideAtual = velocidadeMaxima
        }
    }
    //metodo Público
    this.getVelocidadeAtual = function () {
        return velocideAtual
    }

    //Metodo privado

     let setUltrapassaVelocidade = function(velocidadeAcima){
        velocideAtual =500
        return velocideAtual
    }
}

const uno = new Carro
uno.acelerar()
//uno.setUltrapassaVelocidade()
const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
console.log(uno.getVelocidadeAtual())
console.log(ferrari.getVelocidadeAtual)