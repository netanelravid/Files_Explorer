<template>
  <div>
    <div>
      Search: <input type="text" v-model="query" placeholder="Search" />
    </div>
    <br />
    <div v-html="highlighedContent"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      query: "",
    }
  },
  methods: {
    getHighlightedContent: (content, query) => {
      let tempHighlightedContent = [];

      content.forEach(line => {
        const highlightedLine = line.replace(new RegExp(query, "gi"), match => {
          return '<span class="highlightText">' + match + '</span>';
        });
        const newLine = highlightedLine.replace(/<\/span><span/g, '</span> <span');

        tempHighlightedContent.push(newLine);
      });

      return tempHighlightedContent;
    },
  },
  computed: {
    content: {
      get() {
        return this.$store.getters.content;
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