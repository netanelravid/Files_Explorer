<template>
  <div>
    {{this.fieldLabel}}: <input type="text" v-model="query" placeholder="Search" />
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {}
  },
  props: [
    "updateQuery",
    "highlightColor",
    "fieldLabel",
  ],
  methods: {
    ...mapActions({
      updateHighlightColor: "updateHighlightColor",
    })
  },
  computed: {
    query: {
      get() {
        return this.$store.getters.query;
      },
      set(value) {
        this.updateQuery(value);
      },
    },
  },
  mounted() {
    this.updateHighlightColor(this.highlightColor);
  }
}
</script>

<style>

body {
  background: #F0F0F0;
}
</style>