<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{ item.title }}</h5>
    <p>{{ item.content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    const item = this.blog[this.$route.params.id];
    return {item}
  },
  props: {
    blog: Array,
  }
}
</script>