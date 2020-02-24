<template>
  <div>
    <trm-header></trm-header>
    <trm-scoring-form></trm-scoring-form>
  </div>
</template>

<script>
import TrmHeader from '@/components/TrmHeader.vue';
import TrmScoringForm from '@/components/TrmScoringForm.vue';

export default {
  name: 'TrmHome',
  components: {
    TrmHeader,
    TrmScoringForm
  }
};
</script>
