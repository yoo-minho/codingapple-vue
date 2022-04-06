<template>
  <div>
    <img :src="v.image" class="room-img">
    <h4 @click="openModal">{{ v.title }}</h4>
    <p>{{ v.content }}</p>
    <p>{{ v.price }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    v: Object
  },
  methods: {
    openModal() {
      this.$emit('openModal', this.v.id)
    }
  }
}
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
