<template id="radio-set">
  <div>
    <div>{{ labelName }}:</div>
    <label v-for="(val,key) in options" :key="key">
      <input
        type="radio"
        :name="labelName"
        :value="val"
        :checked="val == value"
        @change="$emit('input','val')"
      />
    </label>
  </div>
</template>
<script>
RadioSetComp = new VueComponent({
  template: "#radio-set",
  props: {
    "label-name": "",
    value: "",
    options: ""
  }
});
</script>