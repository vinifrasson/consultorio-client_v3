<template>
  <div class="medico">
    <div class="columns is-12">
      <div class="title">
        <h1>Lista de Médicos</h1>
      </div>
    </div>

<div class="search-bar">
            <input type="search" name="search-bar" placeholder="Nome do Médico">
            <button>Cadastrar</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Especialidade</th>
                    <th>CRM</th>
                    <th>% de participação</th>
                    <th>Valor consulta</th>
                    <th>Opções</th>
                </tr>
            </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td><p>Vinícius Frasson</p></td>
        <td><p>Cardiologia</p></td>
        <td><p>CRM/PR 123456</p></td>
        <td><p>20.00</p></td>
        <td><p>R$ 70,00</p></td>
        <td><button class="detail-button">Detalhar</button></td>
      </tr>

      <tr>
        <th>2</th>
        <td><p>Sergio Dallazem</p></td>
        <td><p>Psiquiatria</p></td>
        <td><p>CRM/PR 123456</p></td>
        <td><p>7.00</p></td>
        <td><p>R$ 55,00</p></td>
        <td><button class="detail-button">Detalhar</button></td>
      </tr>
  

      <tr>
        <th>3</th>
        <td><p>Anna Claudia Dallazem</p></td>
        <td><p>Radioterapia</p></td>
        <td><p>CRM/PR 123456</p></td>
        <td><p>10.00</p></td>
        <td><p>R$ 47,00</p></td>
        <td><button class="detail-button">Detalhar</button></td>
      </tr>
      
      <tr>
        <th>4</th>
        <td><p>Eugenio Guizzo Neto</p></td>
        <td><p>Geriatria</p></td>
        <td><p>CRM/PR 123456</p></td>
        <td><p>13.00</p></td>
        <td><p>R$ 69,00</p></td>
        <td><button class="detail-button">Detalhar</button></td>
      </tr>

      <tr>
        <th>5</th>
        <td><p>Ana Possamai Guizzo</p></td>
        <td><p>Oftalmologia</p></td>
        <td><p>CRM/PR 123456</p></td>
        <td><p>18.00</p></td>
        <td><p>R$ 100,00</p></td>
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