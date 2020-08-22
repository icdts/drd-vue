<template>
  <div id="app">
    <div class="filters">
      <RadioSet :value="resultType" :options="resultTypes" @value-changed="resultTypeChanged" />
      <br />
      <ComboBox :value="server" :options="serverOptions" @value-changed="serverChanged" />
    </div>
    <div class="reports"></div>
  </div>
</template>

<script>
import RadioSet from "./components/RadioSet.vue";
import ComboBox from "./components/ComboBox.vue";

export default {
  name: "App",
  components: {
    RadioSet,
    ComboBox,
  },
  data() {
    return {
      resultType: 0,
      resultTypes: [
        { id: 0, name: "Classic" },
        { id: 1, name: "Tabbed" },
        { id: 2, name: "Counts" },
      ],
      server: 0,
      serverOptions: [
        { id: 0, name: "3M-Dev" },
        { id: 1, name: "3M-QA" },
        { id: 2, name: "3M-PRD" },
      ],
      processArea: "",
      object: "",
      reportType: 0,
      reportTypeOptions: [{ id: 0, name: "" }],
      nameNumberSearch: "",
      sort: 0,
      sortOptions: [{ id: 0, name: "" }],
      sortDescending: true,
      favoritesOnly: false,
      sourceResultsSearch: "",
      country: 0,
      countryOptions: [{ id: 0, name: "" }],
      sourceProfile: 0,
      sourceProfileOptions: [{ id: 0, name: "" }],
      releases: [],
      releaseOptions: [
        { id: 0, name: "AE_CARS" },
        { id: 1, name: "AE_GTMS_POS" },
        { id: 2, name: "AE_GTMS_POS_v2" },
        { id: 3, name: "AE_PSFS" },
        { id: 3, name: "AE_QAD" },
      ],
    };
  },
  methods: {
    resultTypeChanged(new_value) {
      this.resultType = new_value;
    },
    serverChanged(new_value) {
      this.server = new_value;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div.filters {
  display: inline-block;
}
</style>
