<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step === 1" @click="step = 0">취소</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step = 2">다음</li>
      <li v-if="step === 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo"/>
  </div>

  <Container
      :selectFilterName="selectFilterName"
      :postData="postData"
      :step="step"
      :uploadImage="uploadImage"
      @addData="this.getNextPost($event)"
      @write="this.writeContent = $event"
  />

  <div v-if="step === 0" class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile"/>
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "@/components/Container";
import {mapMutations, mapState} from "vuex";

export default {
  name: 'App',
  components: {Container},
  data() {
    return {
      step: 0,
      uploadImage: '',
      writeContent: '',
      selectFilterName: '',
    }
  },
  mounted() {
    this.emitter.on('sendFilterName', (filterName) => {
      this.selectFilterName = filterName;
    })
  },
  computed: {
    ...mapState(['postData'])
  },
  methods: {
    ...mapMutations(['getNextPost', 'addNewPost']),
    upload(e) {
      const files = e.target.files;
      this.uploadImage = URL.createObjectURL(files[0]);
      this.step = 1;
    },
    publish() {
      const post = {
        name: "Yoo Minho",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImage,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.writeContent,
        filter: this.selectFilterName
      };

      this.addNewPost(post);

      this.uploadImage = '';
      this.writeContent = '';
      this.selectFilterName = '';
      this.step = 0;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 52px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
