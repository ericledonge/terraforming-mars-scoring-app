<template>
  <v-card>
    <v-card-title>
      Enter your scoring points
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="tr"
          type="number"
          label="TR"
          data-test="tr-input"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="awards"
          type="number"
          label="Awards"
          data-test="awards-input"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="milestones"
          type="number"
          label="Milestones"
          data-test="milestones-input"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="forests"
          type="number"
          label="Forests"
          data-test="forests-input"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cities"
          type="number"
          label="Cities"
          data-test="cities-input"
          outlined
        ></v-text-field>
      </v-form>
      <v-chip label color="red" data-test="total-score">
        Total Score: {{ totalScore }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TrmScoringForm',
  data() {
    return {
      tr: null,
      awards: null,
      milestones: null,
      forests: null,
      cities: null
    };
  },
  computed: {
    totalScore() {
      return (
        parseInt(this.tr) +
        parseInt(this.awards) +
        parseInt(this.milestones) +
        parseInt(this.forests) +
        parseInt(this.cities)
      );
    }
  }
};
</script>

<style scoped>
.total-score {
  margin: 0;
}
</style>
