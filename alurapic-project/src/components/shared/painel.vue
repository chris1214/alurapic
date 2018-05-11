<script>

export default {
   props: ['titulo'],
   data() {
      return {
        visible: true,
      }
   }
}

</script>
<template>

  <div class="painel">
    <h2 class="painel-titulo" @click="visible = !visible">{{ titulo }}</h2>
    <transition name="painel-fade">
      <div class="painel-conteudo" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>

</template>
<style>
 .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
  .painel-fade-enter, .panel-fade-leave-active {
    opacity: 0;
  }
  .painel-fade-enter-active, .panel-fade-leave-active {
    transition: opacity 2s;
  }
</style>
