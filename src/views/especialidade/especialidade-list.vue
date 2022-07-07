<template>
  <div class="especialidade">
    <div class="columns is-12">
      <article class="titulo panel is-primary">
        <p class="panel-heading">
          Lista de Especialidade
        </p>
      </article>
    </div>

    <div class="search-bar">
      <input type="search" name="search-bar" placeholder="Nome da especialidade">
      <button>Buscar</button>
      <router-link to="/especialidade/formulario"><button>Cadastrar</button></router-link>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Nome</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in especialidadeList" :key="item.id">
          <th style="text-align: center;">{{ item.id }}</th>

          <th style="text-align: center;">
            <span v-if="item.ativo" class="tag is-success"> Ativo </span>
            <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
          </th>

          <th style="text-align: center;">{{ item.nome }}</th>
          <td><button @click="onClickPaginaDetalhar(item.id)" class="button is-link is-focused">
              <p>Detalhes</p>
            </button></td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

import { Especialidade } from '@/model/especialidade.model'
import { EspecialidadeClient } from '@/client/especialidade.client'

export default class EspecialidadeList extends Vue {
  public pageRequest: PageRequest = new PageRequest()
  public pageResponse: PageResponse<Especialidade> = new PageResponse()
  public especialidadeList: Especialidade[] = []
  public especialidadeClient!: EspecialidadeClient
  public mounted(): void {
    this.especialidadeClient = new EspecialidadeClient()
    this.listarEspecialidade()
  }
  public listarEspecialidade(): void {
    this.especialidadeClient.findByFiltrosPaginado(this.pageRequest)
      .then(
        success => {
          this.pageResponse = success
          this.especialidadeList = this.pageResponse.content
        },
        error => console.log(error)
      )
  }
  public onClickPaginaDetalhar(idEspecialidade: number) {
    this.$router.push({ name: 'especialidade-detalhar', params: { id: idEspecialidade, model: 'detalhar' } })
  }

}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";

  .titulo{
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