<template>
  <v-app>
    <trm-header />
    <v-container>
      <router-view :key="$route.fullPath" />
    </v-container>
    <trm-footer />
  </v-app>
</template>

<script>
import TrmHeader from '@/components/TrmHeader.vue';
import TrmFooter from '@/components/TrmFooter.vue';

export default {
  name: 'App',
  components: {
    TrmHeader,
    TrmFooter
  }
};
</script>
