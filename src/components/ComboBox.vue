<template>
  <div class="combo-box">
    <strong>{{ labelName }}</strong>
    <select :name="labelName" @change="$emit('value-changed',val.id)">
      <option
        v-for="(val,key) in options"
        :selected="value == val.id"
        :value="key"
        :key="key"
      >{{val.name}}</option>
    </select>
    <br />
  </div>
</template>

<script>
export default {
  name: "ComboBox",
  props: {
    labelName: String,
    value: Number,
    options: Array,
  },
};
</script>

<style scoped>
div.combo-box {
  display: inline-flex;
  flex-direction: column;
}
</style>