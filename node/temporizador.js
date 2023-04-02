
const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 0', function(){
    console.log('Executando Tarefa !', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 2000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,4)]
regra.hour = 16
regra.second = 20

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2 !', new Date().getSeconds())
})