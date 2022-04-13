<template>
  <ListItem
      :v="v"
      v-for="(v,i) in blog"
      :key="i"
      @click="$router.push(`/detail/${i}`)"
  />
</template>

<script>
import ListItem from "@/components/ListItem";

export default {
  name: 'List',
  props: {
    blog: Array
  },
  components: {ListItem},
}
</script>