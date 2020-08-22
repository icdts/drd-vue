<template>
  <div class="Drd">
    <h1>{{ msg }}</h1>
    <RadioSet :value="resultType" :options="resultTypes" />
    <p>This is a paragraph inside the drd component, please display it. pls.</p>
  </div>
</template>

<script>
export default {
  name: "Drd",
  components: {
    RadioSet,
  },
  props: {
    msg: String,
    resultType: Number,
    resultTypes: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
