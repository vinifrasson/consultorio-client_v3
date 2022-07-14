<template>
    <div>
        <div class="columns is-12">
            <article class="titulo panel is-primary">
                <p class="panel-heading">
                    Lista de Pacientes
                </p>
            </article>
        </div>
        <div class="columns">
            <div class="column is-6">
                <input class="input" type="text" placeholder="Pesquisar">
            </div>
            <div class="column is-2">
                <router-link to="/cadastropaciente"><button is-danger>Pesquisar</button></router-link>
            </div>
            <div class="column is-3">
                <router-link to="/cadastropaciente"><button is-primary>Cadastrar</button></router-link>
            </div>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th style="text-align: center;">ID</th>
                    <th style="text-align: center;">Status</th>
                    <th style="text-align: center;">Nome</th>
                    <th style="text-align: center;">Celular</th>
                    <th style="text-align: center;">Convênio</th>
                    <th style="text-align: center;">Opções</th>
                </tr>
            </thead>
            <tbody>
          <tr v-for="paciente in PacienteList" :key="paciente.id">
            <td>{{ paciente.id }}</td>
            <th>
              <span v-if="paciente.ativo" class="tag is-success"> Ativo </span>
              <span v-if="!paciente.ativo" class="tag is-danger"> Inativo </span>
            </th>
            <td> {{ paciente.nome }}</td>
            <td> {{ paciente.celular }}</td>
            <td> {{ paciente.email }}</td>
            <td> {{ paciente.convenio }}</td>
            <th>
              <button @click="onClickPaginaDetalhar(paciente.id)" class="button is-warning"> Detalhar </button>
            </th>
          </tr>
        </tbody>
        </table>
    </div>

</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

import { Paciente } from '@/model/paciente.model'
import { PacienteClient } from '@/client/paciente.client'

export default class PacienteList extends Vue {
  public pageRequest: PageRequest = new PageRequest()
  public pageResponse: PageResponse<Paciente> = new PageResponse()
  public PacienteList: Paciente[] = []
  public PacienteClient!: PacienteClient
  public mounted(): void {
    this.PacienteClient = new PacienteClient()
    this.listarPaciente()
  }
  public listarPaciente(): void {
    this.PacienteClient.findByFiltrosPaginado(this.pageRequest)
      .then(
        success => {
          this.pageResponse = success
          this.PacienteList = this.pageResponse.content
        },
        error => console.log(error)
      )
  }
  public onClickPaginaDetalhar(idPaciente: number) {
    this.$router.push({ name: 'Paciente-detalhar', params: { id: idPaciente, model: 'detalhar' } })
  }

}
</script>


<style lang="scss">
@import "~bulma/bulma.sass";

.titulo {
    margin-left: 1%;
}

.title h1 {
    font-size: 0.7em;
    margin-left: 13px;
}

.table thead {
    background-color: rgb(84, 233, 84);
    width: 100%;
}

.table {
    width: 80%;
    border: 1px solid #ddd;
    margin-top: 20px;
}

.table tr:nth-child(even) {
    background-color: #f2f2f2;
}

td p {
    font-weight: bold;
}

.table td {
    border-left: 1px dashed #ddd;
}

tbody tr:hover {
    background-color: #f8f8f8;
    ;
}

.search-bar input {
    height: 35px;
    width: 60em;
    border-radius: 0.3em;
    border: 1px solid #ddd;
}

.search-bar button,
.detail-button {
    height: 35px;
    margin-left: 10px;
}
</style>