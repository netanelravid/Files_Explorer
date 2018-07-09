import Vue from "vue";
import Vuex from "vuex";

import { utils } from "../utils.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    folder: {
      isDisabled: true,
      items: [
        "1",
        "2",
      ],
      selected: "",
      label: "Select Folder",
    },
    files: {
      isDisabled: true,
      items: [],
      selected: "",
      label: "Select File",
    },
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Suspendisse dignissim leo massa, sed aliquet leo posuere ut.",
      "Curabitur malesuada accumsan erat, id varius eros tincidunt quis.",
      "Vivamus lobortis, odio at fermentum efficitur, risus est tincidunt nisl, eget condimentum tellus dui vitae nibh.",
      "Donec id lorem condimentum, porttitor augue in, fermentum leo.",
      "Morbi condimentum, nunc ut malesuada placerat, sem nulla condimentum purus, iaculis tristique metus diam lobortis enim.",
      "Suspendisse potenti.",
      "Quisque urna magna, porta eget erat ac, pharetra vehicula erat.",
      "Suspendisse sed nisi ex.",
    ],
    query: "",
    highlightColor: "",
  },
  mutations: {
    ["INIT_FOLDERS_ITEMS"] (state) {
      state.folder.items = [];
    },
    ["UPDATE_FOLDERS_ITEMS"] (state, item) {
      state.folder.items.push(item);
    },
    ["UPDATE_FOLDERS_IS_DISABLED"] (state, flag) {
      state.folder.isDisabled = flag;
    },
    ["UPDATE_FOLDERS_SELECTED"] (state, selected) {
      state.folder.selected = selected;
    },
    ["INIT_FILES_ITEMS"] (state) {
      state.files.items = [];
    },
    ["UPDATE_FILES_ITEMS"] (state, item) {
      state.files.items.push(item);
    },
    ["UPDATE_FILES_IS_DISABLED"] (state, flag) {
      state.files.isDisabled = flag;
    },
    ["UPDATE_FILE_SELECTED"] (state, selected) {
      state.files.selected = selected;
    },
    ["UPDATE_CONTENT"] (state, content) {
      state.content = content;
    },
    ["UPDATE_QUERY"] (state, query) {
      state.query = query;
    },
    ["UPDATE_HIGHLIGHT_COLOR"] (state, highlightColor) {
      state.highlightColor = highlightColor;
    },
  },
  actions: {
    async updateFolderItems ({commit}) {
      commit("INIT_FOLDERS_ITEMS");

      let responseJsonData = await utils.fetchJsonData("http://localhost:5000/folders");

      responseJsonData.forEach(item => {
        commit("UPDATE_FOLDERS_ITEMS", item);
      });

      return true;
    },
    async changeFolderIsDisabled ({commit}, flag) {
      commit("UPDATE_FOLDERS_IS_DISABLED", flag);
    },
    async updateFolderSelected ({commit}, selected) {
      commit("UPDATE_FOLDERS_SELECTED", selected);
    },
    async updateFilesItems ({commit, state}) {
      commit("INIT_FILES_ITEMS");

      await utils.delay(10);
      let ilesFromResponse = await utils.fetchJsonData(`http://localhost:5000/folders/${state.folder.selected}`);

      ilesFromResponse.forEach(item => {
        commit("UPDATE_FILES_ITEMS", item);
      });

      return true;
    },
    async changeFilesIsDisabled ({commit}, flag) {
      commit("UPDATE_FILES_IS_DISABLED", flag);
    },
    async updateFileSelected ({commit}, selected) {
      commit("UPDATE_FILE_SELECTED", selected);
    },
    async updateContent ({commit}, content) {
      commit("UPDATE_CONTENT", content);
    },
    async updateQuery ({commit}, query) {
      commit("UPDATE_QUERY", query);
    },
    async updateHighlightColor ({commit}, highlightColor) {
      commit("UPDATE_HIGHLIGHT_COLOR", highlightColor);
    },
  },
  getters: {
    folder: (state) => state.folder,
    files: (state) => state.files,
    content: (state) => state.content,
    query: (state) => state.query,
    highlightColor: (state) => state.highlightColor,
  },
});
