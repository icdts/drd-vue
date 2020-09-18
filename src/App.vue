<template>
  <div id="app">
    <div class="header">
      <fieldset class="filters">
        <legend>DRD Results</legend>
        <RadioSet :value="resultType" :options="resultTypes" @value-changed="resultTypeChanged" />
        <br />
        <br />
        <ComboBox
          labelName="Server:"
          :value="server"
          :options="serverOptions"
          @value-changed="serverChanged"
        />
      </fieldset>
      <fieldset class="filters">
        <legend>Report Filters</legend>
        <div class="horizontal">
          <div id="report_filters_left" class="vertical">
            <ComboBox
              labelName="Process Area:"
              :value="processArea"
              :options="processAreaOptions"
              @value-changed="processAreaChanged"
            />
            <label>Name/Number Find:</label>
            <label>Source Results Find:</label>
          </div>
          <div id="report_filters_mid" class="vertical">
            <ComboBox
              labelName="Object:"
              :value="object"
              :options="objectOptions"
              @value-changed="objectChanged"
            />
            <input />
            <input />
          </div>
          <div id="report_filters_right" class="vertical">
            <ComboBox
              labelName="Report Type:"
              :value="reportType"
              :options="reportTypeOptions"
              @value-changed="serverChanged"
            />
            <div class="horizontal">
              <ComboBox
                labelName="Sort"
                :value="sort"
                :options="sortOptions"
                @value-changed="sortChanged"
              />
              <button id="sortDescending" />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset class="filters">
        <legend>Source Restriction</legend>
      </fieldset>
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
      processAreaOptions: [
        { id: 0, name: "MTD" },
        { id: 1, name: "RTR" },
        { id: 2, name: "FTS" },
      ],
      object: "",
      objectOptions: [
        { id: 0, name: "MM" },
        { id: 1, name: "FSCM" },
        { id: 2, name: "PD" },
      ],
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
    sortChanged(new_value) {
      this.sort = new_value;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
}
#app * {
  margin: 1px;
}

.header {
  display: flex;
  flex-direction: row;
}
.filters {
  display: flex;
  flex-direction: column;
  border-style: ridge;
}
.horizontal {
  display: inline-flex;
  flex-direction: row;
}
.vertical {
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-around;
}
legend {
  font-size: 8px;
  text-align: left;
}
#sortDescending {
  width: 2px;
  height: 20px;
}
</style>
