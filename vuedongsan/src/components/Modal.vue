<template>
  <div v-if="모달창열렸니" class="black-bg">
    <div class="white-bg">
      <img :src="image" class="room-img">
      <h4>{{ title }}</h4>
      <p>{{ content }}</p>
      <p>{{ price }} 원</p>
      <button @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    const {image, title, content, price} = this.products[this.누른거];
    return {image, title, content, price}
  },
  props: {
    products: Array,
    누른거: Number,
    모달창열렸니: Boolean
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style>
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
</style>
