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
    highlighedContent() {
      if(!this.$store.getters.query) {
        return this.content.join('<br>')
      }

      let HighlightedContent = [];
      try {
        HighlightedContent = this.getHighlightedContent(this.content, this.$store.getters.query);
      }
      catch(error) {
        console.log(error);
        HighlightedContent = this.content;
      }

      return HighlightedContent.join('<br>');
    },
  },
  mounted() {
    this.$el.style.setProperty('--color', this.$store.getters.highlightColor)
  },
}
</script>

<style>
:root {
  --color: #ffffff;
}

body {
  background: #F0F0F0;
}
.highlightText {
    background: var(--color);
}
</style>