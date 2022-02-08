<template>
  <div v-if="모달창열렸니" class="black-bg" >
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="모달창열렸니=false">닫기</button>
    </div>
  </div>
  <div class="menu">
    <a v-for="(v, i) in ['Home','Products', 'About']" :key="i">{{ v }}</a>
  </div>

  <div v-for="v in products" :key="v.id">
    <img :src="v.image" class="room-img">
    <h4 @click="모달창열렸니=true">{{ v.title }}</h4>
    <p>{{v.content}}</p>
    <p>{{v.price}}</p>
  </div>
</template>

<script>
import data from './assets/data.js'
export default {
  name: 'App',
  data() {
    return {
      모달창열렸니: false,
      price1: 60,
      price2: 70,
      신고수: [0, 0, 0],
      menus: ['Home', 'Products', 'About'],
      products: data
    }
  },
  methods: {
    increase() {
      this.신고수 += 1
    }

  },
  components: {}
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  position: fixed;
  padding: 20px
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

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

.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
