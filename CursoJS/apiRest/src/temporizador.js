const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 6 * * 3',
    function () {
        console.log('Executando tarefa ', new Date().getSeconds())
    })

setTimeout(function (){
    tarefa1.cancel();
    console.log('Cancelando a tarefa após 20 segundos')
},20000)

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 6
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('executando tarefa 2 ', new Date().getSeconds())
})