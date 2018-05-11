<script>
import painel from '../shared/painel'
import imgResposiva from '../shared/imgResponsiva'
export default {
  data () {
    return {
      title: 'Alurapic',
      fotos: [],
      http: `http://localhost:3000/v1/fotos`,
      filtro: '',
    }
  },
  methods: {
    get(){
      this.$http.get(`${this.http}`).then(
        response => {
          this.fotos = response.body;
        }, error => {
          console.log('Error');
        }
      )
    }
  },
  computed: {
    filterFotos (){
      if(this.filtro){
        let filtro = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => filtro.test(foto.titulo));
      }else{
        return this.fotos;
      }
    }
  },
  components: {
    painel,
    imgResposiva
  },
  created() {
    this.get();
  }
}
</script>
<template>
  <div>
    <h1 class="centralizado">{{ title }}</h1>
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in filterFotos">
        <painel :titulo="foto.titulo">
          <imgResposiva :url="foto.url" :titulo="foto.titulo"/>
        </painel>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.filtro{
  display: block;
  width: 100%
}
.centralizado {
  text-align: center;
}

.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
  height: 240px;
  margin: 10px;
}
</style>
