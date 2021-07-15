<template>
  <div class="container-fluid">
    <div v-for="story in stories" :key="story._id">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <StoryCard :story="story" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../services/PostService";
import StoryCard from "../components/StoryCard";

export default {
  name: "Stories",
  data() {
    return {
      stories: Array,
    };
  },
  components: {
    StoryCard,
  },
  created() {
    PostService.findAll().then((data) => {
      console.log(data);
      this.stories = data.items.reverse();
    });
  },
};
</script>

<style scoped></style>
