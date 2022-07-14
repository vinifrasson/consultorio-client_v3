<template>
  <div>
    <div class="columns is-12">
      <article class="titulo panel is-primary">
        <p class="panel-heading">
          Lista de Médicos
        </p>
      </article>
    </div>
    <div class="search-bar">
      <input type="search" name="search-bar" placeholder="Nome da medico">
      <button>Buscar</button>
      <router-link to="/cadastromedico"><button>Cadastrar</button></router-link>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th style="text-align: center;">ID</th>
          <th style="text-align: center;">Nome</th>
          <th style="text-align: center;">CRM</th>
          <th style="text-align: center;">Especialidade</th>
          <th style="text-align: center;">Celular</th>
          <th style="text-align: center;">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="medico in medicoList" :key="medico.id">
          <td>{{ medico.id }}</td>
          <th>
            <span v-if="medico.ativo" class="tag is-success"> Ativo </span>
            <span v-if="!medico.ativo" class="tag is-danger"> Inativo </span>
          </th>
          <td> {{ medico.nome }}</td>
          <td> {{ medico.crm }}</td>
          <td> {{ medico.especialidade }}</td>
          <td> {{ medico.celular }}</td>
          <th>
            <button @click="onClickPaginaDetalhar(medico.id)" class="button is-warning"> Detalhar</button>
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

import { Medico } from '@/model/medico.model'
import { MedicoClient } from '@/client/medico.client'

export default class MedicoList extends Vue {
  public pageRequest: PageRequest = new PageRequest()
  public pageResponse: PageResponse<Medico> = new PageResponse()
  public medicoList: Medico[] = []
  public medicoClient!: MedicoClient
  public mounted(): void {
    this.medicoClient = new MedicoClient()
    this.listarmedico()
  }
  public listarmedico(): void {
    this.medicoClient.findByFiltrosPaginado(this.pageRequest)
      .then(
        success => {
          this.pageResponse = success
          this.medicoList = this.pageResponse.content
        },
        error => console.log(error)
      )
  }
  public onClickPaginaDetalhar(idMedico: number) {
    this.$router.push({ name: 'medico-detalhar', params: { id: idMedico, model: 'detalhar' } })
  }

}
</script>

<style>
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