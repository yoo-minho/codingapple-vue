<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input @input="search" placeholder="?"/>

    <div v-for="(v, i) in follower" :key="i"
         class="post-header">
      <div class="profile"
           :style="{backgroundImage:`url(${v.image})`}"></div>
      <span class="profile-name">{{ v.name }}</span>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import axios from "axios";

export default {
  name: "MyPage",
  setup() {
    let follower = ref([]);
    let originFollower = ref([]);

    onMounted(async () => {
      const res = await axios.get('/follower.json');
      follower.value = res.data;
      originFollower.value = res.data;
    })

    function search(event) {
      const word = event.target.value;
      if (word) {
        follower.value = follower.value.filter(v => v.name.includes(word));
      } else {
        follower.value = [...originFollower.value];
      }
    }

    return {follower, search}
  },
}
</script>

<style scoped>
.post-header {
  display: flex;
  padding: 10px;
  align-items: center;
}

.profile {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}

.profile-name {
  margin-left: 10px;
}
</style>