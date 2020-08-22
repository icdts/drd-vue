<template>
  <div class="radio-set">
    <strong>{{ labelName }}</strong>
    <br />
    <label v-for="(val,key) in options" :key="key">
      {{val.name}}
      <input
        type="radio"
        :name="labelName"
        :value="val.id"
        :checked="val.id == value"
        @change="$emit('value-changed',val.id)"
      />
      <br />
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioSet",
  props: {
    labelName: String,
    value: Number,
    options: Array,
  },
};
</script>

<style scoped>
div.radio-set {
  display: inline-block;
  text-align: center;
}
</style>