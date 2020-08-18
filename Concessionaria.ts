import Carro from './Carro'
import {ConcessionariaInterface} from './ConcessionariaInterface'
 
 export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string
    private listaDeCarros: Carro[]

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }
    public forncecerHorariosDeFuncionamento():string {
        return 'De segunda a sexta das 8h as 18h e sábado das 8h as 12h'
    }
}