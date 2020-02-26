<template>
  <v-footer padless data-test="app-credits">
    <v-layout justify-center wrap>
      <v-flex primary py-4 text-center white--text xs12>
        Terraforming Mars Scorer App - v1.0 <br />
        Eric Le Donge - {{ new Date().getFullYear() }}
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'TrmFooter'
};
</script>

<style scoped></style>
