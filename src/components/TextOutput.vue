<template>
  <div v-html="highlighedContent"></div>
</template>

<script>

export default {
  data() {
    return {}
  },
  methods: {
    getHighlightedContent: (content, query) => {
      let highlightedContentArray = [];

      content.forEach(line => {
        const highlightedLine = line.replace(new RegExp(query, "gi"), match => {
          return '<span class="highlightText">' + match + '</span>';
        });
        const newLine = highlightedLine.replace(/<\/span><span/g, '</span> <span');

        highlightedContentArray.push(newLine);
      });

      return highlightedContentArray;
    },
  },
  computed: {
    content: {
      get() {
        return this.$store.getters.content;
      },
    },
    query: {
      get() {
        return this.$store.getters.query;
      },
    },
    highlighedContent() {
      if(!this.query) {
        return this.content.join('<br>')
      }

      let HighlightedContent = [];
      try {
        HighlightedContent = this.getHighlightedContent(this.content, this.query);
      }
      catch(error) {
        HighlightedContent = this.content;
      }

      return HighlightedContent.join('<br>');
    },
  },
}
</script>

<style>

body {
  background: #F0F0F0;
}
.highlightText {
    background: #a0E5F0;
}
</style>