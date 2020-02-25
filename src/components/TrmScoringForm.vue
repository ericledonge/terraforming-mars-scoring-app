<template>
  <v-card>
    <v-card-title>
      Enter your scoring points
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="tr"
          label="TR"
          data-test="tr-input"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="awards"
          label="Awards"
          data-test="awards-input"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="milestones"
          label="Milestones"
          data-test="milestones-input"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="forests"
          label="Forests"
          data-test="forests-input"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="cities"
          label="Cities"
          data-test="cities-input"
          outlined
        ></v-text-field>
      </v-form>
    </v-card-text>

    <div data-test="total-score">Total Score: {{ totalScore }}</div>
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

<style scoped></style>
