<template>
  <h1>| {{ title }}</h1>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Logo",
  setup() {
    const title = ref(process.env.VUE_APP_TITLE);
    return { title };
  },
};
</script>

<style scoped></style>
