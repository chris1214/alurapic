<script>
import { routes } from './router'
export default {
  data() {
    return {
      routes
    }
  }
}

</script>
<template>
  <div class="corpo">
    <ul>
      <li v-for="router in routes">
        <router-link :to="router.path">{{ router.title }}</router-link>
      </li>
    </ul>
    <transition name="router">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style scoped>
.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}
.router-enter, .router-leave-active {
    opacity: 0;
  }
  .router-enter-active, .router-leave-active {
    transition: opacity .6s;
  }

</style>
