<template>
  <v-card>
    <v-form>
      <v-text-field label="TR" data-test="tr-input" outlined></v-text-field>
      <v-text-field
        label="Awards"
        data-test="awards-input"
        outlined
      ></v-text-field>
      <v-text-field
        label="Milestones"
        data-test="milestones-input"
        outlined
      ></v-text-field>
      <v-text-field
        label="Forests"
        data-test="forests-input"
        outlined
      ></v-text-field>
      <v-text-field
        label="Cities"
        data-test="cities-input"
        outlined
      ></v-text-field>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'TrmScoringForm'
};
</script>

<style scoped></style>
