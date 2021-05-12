<template>
  <Navbar />
  <Stories :stories="stories" />
  <!-- <h3>{{ subtitle }}</h3> -->
</template>

<script>
// import { ref } from "vue";
import Navbar from "../components/Navbar";
import Stories from "../components/Stories";

import PostService from "../services/PostService";

export default {
  name: "Landing",
  data() {
    return { stories: Array };
  },
  components: {
    Navbar,
    Stories,
  },
  setup() {},
  created() {
    PostService.findAll().then((data) => (this.stories = data.reverse()));
  },
};
</script>

<style scoped></style>
