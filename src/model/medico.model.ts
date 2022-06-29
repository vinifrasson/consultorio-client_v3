import { AbstractEntity } from "./abstract-entity.model";
import { Especialidade } from "./especialidade.model";

export class Medico extends AbstractEntity{
    crm! : string
    consultorio! : string
    porcentagemparticipacao! : number
    valorconsulta! : number
    especialidade! : Especialidade
}