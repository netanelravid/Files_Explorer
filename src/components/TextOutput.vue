<template>
  <div id="app">
    <div>
      Search: <input type="text" v-model="query" placeholder="Search" />
    </div>
    <br />
    <div v-html="highlighedContent"></div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      query: "",
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