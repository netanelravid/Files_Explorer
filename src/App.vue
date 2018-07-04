<template>
  <div id="app">
    <v-app id="inspire">
      <h1 class="headline">Files Explorer</h1>
      <v-container fluid>
        <v-layout justify-space-around="true">
          <v-flex md4 ma-4>
            <v-layout>
              <select-element
                name="folder"
                :onChange="showFilesList"
                :updateSelected="updateFolderSelectedValue"/>
              <select-element
                name="files"
                :onChange="abc"
                :updateSelected="updateFileSelectedValue"/>
              <file-upload/>
            </v-layout>
          </v-flex>
          <v-flex md2 ma-2>
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

import SelectElement from "./components/SelectElement.vue"
import TextOutput from "./components/TextOutput.vue"
import FileUpload from "./components/FileUpload.vue"

export default {
  name: "app",
  components: {
    SelectElement,
    TextOutput,
    FileUpload,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      updateFolderItems: "updateFolderItems",
      changeFolderIsDisabled: "changeFolderIsDisabled",
      updateFolderSelected: "updateFolderSelected",
      updateFilesItems: "updateFilesItems",
      changeFilesIsDisabled: "changeFilesIsDisabled",
      updateFileSelected: "updateFileSelected",
    }),
    async showFolderList() {
      let succeded = await this.updateFolderItems();
      if (succeded){
        await this.changeFolderIsDisabled(false);
      }
    },
    async abc() {},
    async updateFolderSelectedValue(value) {
      await this.updateFolderSelected(value);
    },
    async showFilesList() {
      await this.changeFilesIsDisabled(true);
      let succeded = await this.updateFilesItems();
      if (succeded){
        await this.changeFilesIsDisabled(false);
      }
    },
    async updateFileSelectedValue(value) {
      await this.updateFileSelected(value);
    },
  },
  async mounted() {
    await this.showFolderList();
  },
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
