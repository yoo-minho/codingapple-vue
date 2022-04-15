<template>
  <div
      @click="fire"
      :class="filter" class="filter-item"
      :style="{backgroundImage:`url(${uploadImage})`}">
    <slot name="a"></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    uploadImage: String,
    filter: String,
  },
  data() {
    return {}
  },
  methods: {
    fire(e) {
      this.emitter.emit('sendFilterName', e.target.innerText);
    }
  }
}
</script>

<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>