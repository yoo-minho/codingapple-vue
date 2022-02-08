<template>
  <div class="black-bg">
    <div  class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
    </div>
  </div>
   <div class="menu">
    <a v-for="(v, i) in ['Home','Products', 'About']" :key="i">{{ v }}</a>
  </div>
  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4>{{ products[0] }}</h4>
    <p>60 만원</p>
    <button @click="신고수[0]++">허위매물신고</button>
    <span>신고수 : {{ 신고수[0] }}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4>{{ products[1] }}</h4>
    <p>70 만원</p>
    <button @click="신고수[1]++">허위매물신고</button>
    <span>신고수 : {{ 신고수[1] }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4>{{ products[2] }}</h4>
    <p>80 만원</p>
    <button @click="신고수[1]++">허위매물신고</button>
    <span>신고수 : {{ 신고수[1] }}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      price1: 60,
      price2: 70,
      신고수: [0, 0, 0],
      menus: ['Home', 'Products', 'About'],
      products: ['천호동 원룸', '역삼동 원룸', '마포구 원룸', '효창동 원룸']
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

.room-img{
  width:100%;
  margin-top:40px;
}
</style>
