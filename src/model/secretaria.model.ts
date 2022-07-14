import { Pessoa } from "./pessoa.model";

export class Secretaria extends Pessoa{
    salario! : number
    dataContratacao! : string
    pis! : string

    constructor() {
        super();
        this.ativo = true
    }
}