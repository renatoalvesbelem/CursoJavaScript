function falarDepoisDe(segundos, frase) {
    return new Promise((resolv, reject) => {
        setTimeout(() =>
            resolv(frase), segundos * 1000)
    })
}

falarDepoisDe(3,'Legal')
.then(frase => frase.concat('123'))
.then(outrafrase => console.log(outrafrase))
.catch(e => console.log(e))