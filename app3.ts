import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('Veloster', 3)

let moto = new Moto()

moto.acelerar()
moto.acelerar()
console.log(moto)

carro.acelerar()
carro.acelerar()
console.log(carro)

let concessionaria = new Concessionaria('', [])
console.log(concessionaria.forncecerHorariosDeFuncionamento())
