<template>
  <v-card>
    <v-card-title>
      Enter your scoring points
    </v-card-title>
    <v-card-text>
      <v-form data-test="form">
        <v-select
          :items="corporationsList"
          @change="setCorporationName"
          label="Corporation name"
          data-test="corporation-name"
          outlined
        ></v-select>
        <v-text-field
          :value="tr"
          @input="setTr"
          type="number"
          label="TR"
          data-test="tr-input"
          outlined
        ></v-text-field>
        <v-text-field
          :value="awards"
          @input="setAwards"
          type="number"
          label="Awards"
          data-test="awards-input"
          outlined
        ></v-text-field>
        <v-text-field
          :value="milestones"
          @input="setMilestones()"
          type="number"
          label="Milestones"
          data-test="milestones-input"
          outlined
        ></v-text-field>
        <v-text-field
          :value="forests"
          @input="setForests"
          type="number"
          label="Forests"
          data-test="forests-input"
          outlined
        ></v-text-field>
        <v-text-field
          :value="cities"
          @input="setCities"
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
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TrmScoringForm',
  computed: {
    ...mapGetters(['corporationsList']),
    ...mapGetters('game', [
      'tr',
      'awards',
      'milestones',
      'forests',
      'cities',
      'totalScore'
    ])
  },
  methods: {
    ...mapActions('game', [
      'setCorporationName',
      'setTr',
      'setAwards',
      'setMilestones',
      'setForests',
      'setCities'
    ])
  }
};
</script>

<style scoped>
.total-score {
  margin: 0;
}
</style>
