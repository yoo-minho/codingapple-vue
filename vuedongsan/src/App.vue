<template>
   <div class="menu">
    <a v-for="(v, i) in ['Home','Products', 'About']" :key="i">{{ v }}</a>
  </div>
  <div>
    <h4>{{ products[0] }}</h4>
    <p>60 만원</p>
  </div>
  <div>
    <h4>XX 원룸</h4>
    <p>70 만원</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      price1: 60,
      price2: 70,
      products: ['천호동 원룸', '역삼동 원룸', '마포구 원룸']
    }
  },
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
