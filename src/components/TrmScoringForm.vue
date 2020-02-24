<template>
  <v-card>
    <v-form>
      <v-text-field label="TR" data-test="tr-input"></v-text-field>
      <v-text-field label="Awards" data-test="awards-input"></v-text-field>
      <v-text-field
        label="Milestones"
        data-test="milestones-input"
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
