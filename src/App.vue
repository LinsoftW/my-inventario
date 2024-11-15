<template>
  <router-view />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import InicioApp from './components/InicioApp.vue';

const Kinicio = ref(0);

// onMounted( async => {
//   Kinicio.value += 1;
// })

</script>

<style lang="scss" scoped>

</style>
