<template>
  <div class="especialidade">
    <div class="columns is-12">
      <div class="title">
        <h1>Lista de Especialidade</h1>
      </div>
    </div>

<div class="search-bar">
            <input type="search" name="search-bar" placeholder="Nome da especialidade">
            <button>Cadastrar</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Opções</th>
                </tr>
            </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td><p>Cardiologia</p></td>
        <td><button class="detail-button">Detalhar</button></td>
      </tr>

      <tr>
        <th>2</th>
        <td><p>Psiquiatria</p></td>
        <td><button class="detail-button">Detalhar</button></td>
      </tr>
  

      <tr>
        <th>3</th>
        <td><p>Radioterapia</p></td>
        <td><button class="detail-button">Detalhar</button></td>
      </tr>
      
      <tr>
        <th>4</th>
        <td><p>Geriatria</p></td>
        <td><button class="detail-button">Detalhar</button></td>
      </tr>

      <tr>
        <th>5</th>
        <td><p>Oftalmologia</p></td>
        <td><button class="detail-button">Detalhar</button></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<style>

.title h1{
    font-size:0.7em;
    margin-left: 13px;
}

.table thead{
  background-color: rgb(84, 233, 84);
  width: 100%;
}

.table{
  width: 80%;
  border: 1px solid #ddd;
  margin-top: 20px;
}

.table tr:nth-child(even){background-color: #f2f2f2;}

td p{
    font-weight: bold;
}

.table td{
    border-left: 1px dashed #ddd;
}

tbody tr:hover{
    background-color: #f8f8f8;;
}

.search-bar input{
    height: 35px;
    width: 60em;
    border-radius: 0.3em;
    border: 1px solid #ddd;
}

.search-bar button, .detail-button{
  height: 35px;
  margin-left: 10px;
}




</style>