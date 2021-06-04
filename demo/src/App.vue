<template>
  <div id="app">
    <div class="title">
      <img alt="Vue logo" src="./assets/logo.png" />
      <h1>String To Vue</h1>
    </div>
    <textarea
      id="test"
      v-model="value"
      name="test"
      cols="30"
      rows="10"
    ></textarea>
    <StringToVue class="render" :value="value" :components="{ HelloWorld }" />
  </div>
</template>

<script>
import StringToVue from "../../src/string-to-vue";
import HelloWorld from "./HelloWorld";

export default {
  name: "App",
  components: {
    StringToVue,
  },
  data() {
    return {
      HelloWorld,
      value: "<p>Rendu du DOM Vue</p>\n<HelloWorld />",
    };
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  .title {
    display: flex;
    align-items: center;
    img {
      width: 50px;
    }
    h1 {
      margin-left: 16px;
    }
  }
  textarea {
    width: 100%;
    max-width: 500px;
    padding: 8px;
    margin-bottom: 16px;
  }
  .render {
    max-width: 500px;
    width: 100%;
    padding: 8px;
    border: 1px solid #000000;
  }
}
</style>
