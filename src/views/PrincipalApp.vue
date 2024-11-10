<template>
  <!-- <div>
    <button @click="rec">Recarga</button>
  </div> -->
    <MenuApp :key="yap"/>
</template>
<script setup>
import { ref } from 'vue';
import MenuApp from './MenuApp.vue';

const yap = ref(0)

// onMounted(async => {
//   yap.value += 1;
//   console.log('Ya1');
// })

// const rec = () => {
//   yap.value += 1;
// }
</script>
<style lang="scss">

</style>
