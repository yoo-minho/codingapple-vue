<template>
  <div>
    <h5>{{ title }}</h5>
    <p>{{ date }}</p>
  </div>
</template>

<script>

export default {
  name: 'ListItem',
  data() {
    const {title, date} = this.v;
    return {title, date};
  },
  props: {
    v: Object
  }
}
</script>