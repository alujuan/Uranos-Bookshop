<script>
import GeneroApi from "@/api/generos.js";
const generosApi = new GeneroApi();
export default {
  data() {
    return {
      autor: {},
      autores: [],
    };
  },
  async created() {
    this.generos = await generoApi.buscarTodosOsGeneros();
  },
  methods: {
    async salvar() {
      if (this.genero.id) {
        await generoApi.atualizarGenero(this.genero);
      } else {
        await generoApi.adicionarGenero(this.genero);
      }
      this.generos = await generoApi.buscarTodosOsGeneros();
      this.generos = {};
    },
    async excluir(genero) {
      await generoApi.excluirAutor(genero.id);
      this.generos = await generoApi.buscarTodosOsGeneros();
    },
    editar(genero) {
      Object.assign(this.genero, genero);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de generos</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="genero.nome" @keyup.enter="salvar" />
      <button @click="salvar">Adicionar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="genero in generos" :key="genero.id">
            <td>{{ genero.id }}</td>
            <td>{{ genero.nome }}</td>
            <td>
              <button @click="editar(genero)">Editar</button>
              <button @click="excluir(genero)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
#genero {
  width: 900px;
  max-height: 100%;
  min-height: 600px;
  background-color: #d9ccc1;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
}
.title {
  display: flex;
  justify-content: center;
}

.genero-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.genero-input input {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.genero-input button {
  margin-left: 1%;
  width: 20%;
  height: 40px;
  border: 1px solid #6d8c89;
  border-radius: 10px;
  background-color: #6d8c89;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.genero-form {
  display: flax;
  justify-content: center;
}

table {
  width: auto;
  margin: 2% auto;
  border-collapse: collapse;
}

table tr th {
  border: 1px solid rgb(0, 0, 0);
  padding: 10px;
  font-weight: bold;
}

table tr td {
  border: 1px solid rgb(0, 0, 0);
  padding: 10px;
}

table tr:nth-child(odd) {
  background-color: #ccc;
  color: black;
}
</style>
