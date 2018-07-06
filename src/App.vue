<template>
  <div id="app">
    <v-app id="inspire">
      <h1 class="headline">Files Explorer</h1>
      <v-container fluid>
        <v-layout justify-space-around="true">
          <v-flex md4 ma-4>
            <file-upload/>
          </v-flex>
          <v-flex md2 ma-2>
            <regex-highlighter :updateQuery="updateQuery"/>
          </v-flex>
          <v-flex md6 ma-6>
            <text-output/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { mapActions } from "vuex"

import TextOutput from "./components/TextOutput.vue"
import FileUpload from "./components/FileUpload.vue"
import RegexHighlighter from "./components/RegexHighlighter.vue"

export default {
  name: "app",
  components: {
    TextOutput,
    FileUpload,
    RegexHighlighter,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      updateQuery: "updateQuery",
    })
  },
  async mounted() {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.headline {
  margin-bottom: 50px;
  margin-top: 50px;
  font-weight: normal;
}

body {
  background: #f0f0f0;
}
</style>
