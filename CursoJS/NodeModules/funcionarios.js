const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

function isChina(value){
    return value
} 

const menorSalario = (a,b) =>{
    return a.salario < b.salario ? a : b;
}
axios.get(url).then(response => {
    const funcionarios = response.data
    const chinesas = funcionarios.filter(({pais}) => pais === 'China').filter(({genero}) => genero === 'F');
    const salario = chinesas.reduce(menorSalario)
    console.log(salario)
}
);
//Desafio obter mulher chinesa com o menor salário
