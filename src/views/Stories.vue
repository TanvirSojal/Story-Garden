<template>
  <div class="container-fluid">
    <div class="row search-bar">
      <div class="col-sm-6 offset-sm-2">
        <input
          type="text"
          placeholder="Search post title, content, author ..."
        />
      </div>
      <div class="col-sm-2">
        <button>Search</button>
      </div>
    </div>
    <div v-for="story in stories" :key="story._id">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <StoryCard :story="story" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../services/PostService";
import StoryCard from "../components/StoryCard";
import Pagination from "../components/Pagination";

export default {
  name: "Stories",
  data() {
    return {
      stories: Array,
      searchTerm: "",
      pageSize: 0,
      pageIndex: 0,
    };
  },
  components: {
    StoryCard,
    Pagination,
  },
  created() {
    PostService.findAll().then((data) => {
      console.log(data);
      this.stories = data.items.reverse();
    });
  },
};
</script>

<style scoped>
.search-bar {
  margin-top: 1em;
}
input {
  font-family: var(--font-text);
  font-size: large;
  padding: 0.6rem;
  width: 100%;
  border: 2px solid var(--color-white);
  background: var(--color-white);
}

input:hover,
input:focus,
input:active {
  outline: none;
  font-weight: bold;
  border: 2px solid var(--color-accent);
}

button {
  padding: 0.7rem 2rem;
  color: var(--color-white);
  background: var(--color-accent);
  border: none;
  font-weight: bold;
  border: 2px solid var(--color-accent);
  width: 100%;
}

button:hover {
  color: var(--color-white);
  background: var(--color-accent);
  border: 2px solid var(--color-accent);
}

button:active {
  background: var(--color-white);
  color: var(--color-accent);
}
</style>
