<template>
  <div>
    Search: <input type="text" v-model="query" placeholder="Search" />
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  props: [
    "updateQuery",
  ],
  methods: {},
  computed: {
    query: {
      set(value) {
        this.updateQuery(value);
      },
    },
  },
}
</script>

<style>

body {
  background: #F0F0F0;
}
</style>