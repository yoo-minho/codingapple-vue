<template>
  <div v-if="step === 0">
    <Post :v=v :idx=i v-for="(v, i) in postData" :key="i"/>
    <button @click="getData">더보기</button>
  </div>

  <!-- 필터선택페이지 -->
  <div v-if="step === 1">
    <div :class="selectFilterName" class="upload-image"
         :style="{backgroundImage:`url(${uploadImage})`}"></div>
    <div class="filters">
      <FilterBox v-for="(filter, i) in filters" :filter="filter" :uploadImage="uploadImage" :key="i">
        <template v-slot:a>{{ filter }}</template>
      </FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step === 2">
    <div :class="selectFilterName" class="upload-image"
         :style="{backgroundImage:`url(${uploadImage})`}"></div>
    <div class="write">
      <textarea
          @input="$emit('write', $event.target.value)"
          placeholder="입력해주세용"
          class="write-box"
      ></textarea>
    </div>
  </div>

  <div v-if="step === 3">
    <MyPage/>
  </div>


</template>

<script>
import Post from "@/components/Post";
import FilterBox from "@/components/FilterBox";
import {mapActions} from "vuex";
import MyPage from "@/components/MyPage";

export default {
  name: "Container",
  props: {
    postData: Array,
    step: Number,
    uploadImage: String,
    selectFilterName: String,
  },
  data() {
    return {
      filters: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  },
  methods: {
    ...mapActions(['getData'])
  },
  components: {MyPage, FilterBox, Post}
}
</script>

<style scoped>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}

.filters {
  overflow-x: scroll;
  white-space: nowrap;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>