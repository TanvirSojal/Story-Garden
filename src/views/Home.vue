<template>
  <Stories :stories="stories" />
  <!-- <h3>{{ subtitle }}</h3> -->
</template>

<script>
// import { ref } from "vue";
// import Navbar from "../components/Navbar";
import Stories from "../components/Stories";

import PostService from "../services/PostService";

export default {
  name: "Home",
  data() {
    return { stories: Array };
  },
  components: {
    Stories,
  },
  setup() {},
  created() {
    PostService.findAll().then((data) => (this.stories = data.reverse()));
  },
};
</script>

<style scoped></style>
