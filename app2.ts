import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

/* criar carros */
let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/* montar a lista de carro */
let listaDeCarros: Carro[] = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* exibir lista de carros */
console.log(concessionaria.mostrarListaDeCarros())

/* Comprar o carro */
let cliente = new Pessoa('Gabriel', 'Veloster')
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())




