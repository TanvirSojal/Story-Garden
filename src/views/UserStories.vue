<template>
  <div class="container-fluid">
    <div v-if="stories.length > 0">
      <div v-for="story in stories" :key="story._id">
        <div class="row">
          <div class="col-sm-8 offset-sm-2">
            <StoryCard :story="story" />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row" style="text-align:center;margin-top:5rem">
        <div class="col-sm-12">
          <p style="opacity:.6">
            Seems like you haven't lifted the pen yet.
          </p>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <router-link to="/create">
              <strong class="story">
                Write your first story! ✒️
              </strong></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../services/PostService";
import StoryCard from "../components/StoryCard";
import router from "../router";

export default {
  name: "UserStories",
  data() {
    return {
      stories: Array,
    };
  },
  components: {
    StoryCard,
  },
  created() {
    const username = localStorage.getItem("storygarden-username");
    if (!username) {
      router.push("/404");
      return;
    }
    console.log("Fetching all stories by", username);
    PostService.findByUser(username).then(
      (data) => (this.stories = data.reverse())
    );
  },
};
</script>

<style scoped>
a {
  color: inherit;
}
</style>
