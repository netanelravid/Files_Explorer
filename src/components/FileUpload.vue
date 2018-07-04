<template>
  <vue-dropzone
    id="dropzone"
    @vdropzone-complete="syncFileContent"
    :options="dropOptions">
  </vue-dropzone>
</template>

<script>
import { mapActions } from "vuex";
import vueDropzone from "vue2-dropzone";
import 'vue2-dropzone/dist/vue2Dropzone.css';

export default {
  components: {
    vueDropzone,
  },
  props: [],
  data() {
    return {
      dropOptions: {
        url: "https://httpbin.org/post",
        maxFilesize: 5,
      },
    }
  },
  methods: {
    ...mapActions({
      updateContent: "updateContent",
    }),
    async syncFileContent(file) {
      const fileContent = JSON.parse(file.xhr.responseText).files.file.split('\n');
      await this.updateContent(fileContent);
    },
  },
  computed: {},
}
</script>

<style>
body {
  background: #f0f0f0;
}
</style>
