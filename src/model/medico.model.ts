import { Especialidade } from "./especialidade.model";
import { Pessoa } from "./pessoa.model";

export class Medico extends Pessoa{
    crm! : string
    consultorio! : string
    porcentagemParticipacao! : number
    valorConsulta! : number
    especialidade! : Especialidade

    constructor() {
        super();
        this.ativo = true
        this.especialidade = new Especialidade();
    }
}