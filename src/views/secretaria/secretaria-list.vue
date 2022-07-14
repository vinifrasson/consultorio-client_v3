<template>
  <div>
    <div class="columns is-12">
      <article class="titulo panel is-primary">
        <p class="panel-heading">
          Lista de Secretária
        </p>
      </article>
    </div>

    <div class="columns">
      <div class="column is-6">
        <input class="input" type="text" placeholder="Pesquisar">
      </div>
      <div class="column is-2">
        <router-link to="/cadastrosecretaria"><button>Pesquisar</button></router-link>
      </div>
      <div class="column is-3">
        <router-link to="/cadastrosecretaria"><button>Cadastrar</button></router-link>
      </div>
    </div>
    <div class="column is-11">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Nome</th>
            <th>RG</th>
            <th>Email</th>
            <th>Celular</th>
            <th>Telefone</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="secretaria in secretariaList" :key="secretaria.id">
            <td>{{ secretaria.id }}</td>
            <th>
              <span v-if="secretaria.ativo" class="tag is-success"> Ativo </span>
              <span v-if="!secretaria.ativo" class="tag is-danger"> Inativo </span>
            </th>
            <td> {{ secretaria.nome }}</td>
            <td> {{ secretaria.rg }}</td>
            <td> {{ secretaria.email }}</td>
            <td> {{ secretaria.celular }}</td>
            <td> {{ secretaria.telefone }}</td>
            <th>
              <button @click="onClickPaginaDetalhar(secretaria.id)" class="button is-warning"> Detalhar</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

import { Secretaria } from '@/model/secretaria.model'
import { SecretariaClient } from '@/client/secretaria.client'

export default class secretariaList extends Vue {
  public pageRequest: PageRequest = new PageRequest()
  public pageResponse: PageResponse<Secretaria> = new PageResponse()
  public secretariaList: Secretaria[] = []
  public secretariaClient!: SecretariaClient
  public mounted(): void {
    this.secretariaClient = new SecretariaClient()
    this.listarsecretaria()
  }
  public listarsecretaria(): void {
    this.secretariaClient.findByFiltrosPaginado(this.pageRequest)
      .then(
        success => {
          this.pageResponse = success
          this.secretariaList = this.pageResponse.content
        },
        error => console.log(error)
      )
  }
  public onClickPaginaDetalhar(idSecretaria: number) {
    this.$router.push({ name: 'secretaria-detalhar', params: { id: idSecretaria, model: 'detalhar' } })
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