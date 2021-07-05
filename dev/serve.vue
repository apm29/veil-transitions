<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VeilTransitionsSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  VeilTransitionsSample,
  // }
});
</script>

<template>
  <div id="app">
    <veil-transitions-sample />
  </div>
</template>
