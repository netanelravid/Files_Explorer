<template>
  <v-flex>
    <v-layout>
      <v-flex>
        <v-select
          :label="properties.label"
          :items="properties.items"
          :disabled="properties.isDisabled"
          v-model.lazy="selected"
          single-line
          color="green"
          autocomplete
          @change="onChange()"
        ></v-select>
      </v-flex>
      <v-flex>
        <orbit-spinner
          :animation-duration="1200"
          :size="55"
          color="#95c900"
          v-show="properties.isDisabled"
          disabled="properties.isDisabled"
        />
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { OrbitSpinner } from "epic-spinners";

export default {
  components: {
    OrbitSpinner,
  },
  props: [
      "name",
      "onChange",
      "updateSelected",
    ],
  data() {
    return {}
  },
  methods: {},
  computed: {
    properties() {
      return this.$store.getters[this.name];
    },
    selected: {
      get() {
        return this.$store.getters[this.name].selected;
      },
      set(value) {
        this.updateSelected(value);
      },
    },
  },
}
</script>

<style>
body {
  background: #f0f0f0;
}
</style>
