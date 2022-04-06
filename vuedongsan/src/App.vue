<template>
  <Modal :products="products" :누른거="누른거" :모달창열렸니="모달창열렸니"
         @closeModal="모달창열렸니 = false"/>

  <div class="menu">
    <a v-for="(v, i) in ['Home','Products', 'About']" :key="i">{{ v }}</a>
  </div>

  <Discount/>

  <Card
      v-for="v in products"
      :key="v.id"
      :v="v"
      @openModal="모달창열렸니 = true; 누른거 = $event"/>

</template>

<script>
import data from './assets/data.js'
import Discount from "@/components/Discount";
import Modal from "@/components/Modal";
import Card from "@/components/Card";

export default {
  name: 'App',
  data() {
    return {
      모달창열렸니: false,
      price1: 60,
      price2: 70,
      신고수: [0, 0, 0],
      menus: ['Home', 'Products', 'About'],
      누른거: 0,
      products: data
    }
  },
  methods: {
    increase() {
      this.신고수 += 1
    }
  },
  components: {Card, Modal, Discount}
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
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
