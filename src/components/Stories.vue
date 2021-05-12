<template>
  <div class="container-fluid stories">
    <div v-for="story in stories" :key="story._id">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <Story :story="story" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Story from "./Story";

export default {
  name: "Stories",
  props: {
    stories: Array,
  },
  components: {
    Story,
  },
};
</script>

<style scoped>
.stories {
  margin-bottom: 2rem;
}
</style>
