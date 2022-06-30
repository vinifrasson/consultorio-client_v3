<template>
  <div class="cadastrar-secretaria">
    <div class="columns is-12">
      <article class="titulo panel is-primary">
      <p class="panel-heading">
        Cadastrar Secretária
      </p>
    </article>
    </div>

    <div class="columns is-12">
      <div class="field column is-3">
        <label class="label">Nome</label>
        <div class="control">
          <input class="input" type="text" placeholder="Digite seu nome">
        </div>
      </div>

      <div class="field column is-3">
        <div class="control">
          <label class="label">Email</label>
          <input class="input" type="email" placeholder="Digite seu e-mail">
        </div>
      </div>

      <div class="field column is-3">
        <div class="control">
          <label class="label">Telefone</label>
          <input class="input" type="text" placeholder="Digite seu telefone">
        </div>
      </div>
    </div>


    <div class="columns is-12">
      <div class="field column is-3">
        <div class="control">
          <label class="label">Salário</label>
          <input class="input" type="email" placeholder="Digite o salário">
        </div>
      </div>

      <div class="field column is-3">
        <div class="control">
          <label class="label">Data da contratação</label>
          <input class="input" type="text" placeholder="Digite a data da contratação">
        </div>
      </div>

      <div class="field column is-3">
        <div class="control">
          <label class="label">PIS</label>
          <input class="input" type="email" placeholder="Digite seu PIS">
        </div>
      </div>
    </div>

    <div class="columns is-12">
      <div class="field column is-3">
        <div class="control">
          <label class="label">Nacionalidade</label>
          <input class="input" type="text" placeholder="Digite sua nacionalidade">
        </div>
      </div>

      <div class="field column is-3">
        <label class="label">CPF</label>
        <div class="control">
          <input class="input" type="email" placeholder="Digite seu CPF">
        </div>
      </div>

      <div class="field column is-3">
        <label class="label">RG</label>
        <div class="control">
          <input class="input" type="text" placeholder="Digite seu RG">
        </div>
      </div>
    </div>

    <div class="columns is-12">
      <div class="field column is-3">
        <label class="label">Sexo</label>
        <div class="control">
          <input class="input" type="email" placeholder="Digite seu sexo">
        </div>
      </div>

      <div class="field column is-3">
        <label class="label">Login</label>
        <div class="control">
          <input class="input" type="text" placeholder="Digite seu Login">
        </div>
      </div>

      <div class="field column is-3">
        <label class="label">Senha</label>
        <div class="control">
          <input class="input" type="email" placeholder="Digite sua senha">
        </div>
      </div>
    </div>

    <div class="botoes field is-grouped">
      <p class="control">
        <a class="button is-primary" href="/secretaria">
          Confirmar
        </a>
      </p>
      <p class="control">
        <a class="button is-danger" href="/secretaria">
          Cancelar
        </a>
      </p>
    </div>
  </div>
</template>

<style>
.botoes {
  margin-left: 26.5%;
}

.titulo{
  margin-left: 1%;
}
</style>