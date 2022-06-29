import { AbstractEntity } from "./abstract-entity.model";
import { Medico } from "./medico.model";
import { Paciente } from "./paciente.model";
import { Secretaria } from "./secretaria.model";
import { StatusAgenda } from "./status-agenda.model";

export class Agenda extends AbstractEntity{

        datade! : Date
        dataate! : Date
        encaixe! : boolean
        paciente! : Paciente
        secretaria! : Secretaria
        medico! : Medico
        status! : StatusAgenda
}