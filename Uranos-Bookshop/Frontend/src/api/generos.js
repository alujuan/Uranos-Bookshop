import axios from "axios";
export default class GeneroApi {
  async buscarTodosOsGeneros() {
    const response = await axios.get("http://localhost:4000/generos");
    return response.data;
  }

  async buscarGenero(id) {
    const response = await axios.get(`http://localhost:4000/generos/${id}`);
    return response.data;
  }

  async adicionarGenero(genero) {
    const response = await axios.post("http://localhost:4000/generos", genero);
    return response.data;
  }

  async excluirGenero(id) {
    const response = await axios.delete(`http://localhost:4000/generos/${id}`);
    return response.data;
  }

  async atualizarGenero(genero) {
    const response = await axios.put(
      `http://localhost:4000/editoras/${genero.id}`,
      genero
    );
    return response.data;
  }
}