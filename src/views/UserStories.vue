<template>
  <div class="container-fluid">
    <div v-if="totalPageCount > 0">
      <form class="row search-bar" @submit="handleSearch">
        <div class="col-sm-4 offset-sm-2">
          <label>Search posts</label>
          <input
            type="text"
            placeholder="🔍 Search post title, content, author ..."
            v-model="searchTerm"
          />
        </div>
        <div class="col-sm-2">
          <label>Display per page</label>
          <select v-model="pageSize">
            <option v-for="opt in 10" :key="opt" :value="opt"
              >{{ opt }} post(s) per page</option
            >
          </select>
        </div>
        <div class="col-sm-1">
          <label>View page index</label>
          <input type="number" v-model="pageIndex" placeholder="Page Index" />
        </div>
        <div class="col-sm-1">
          <button>Filter</button>
        </div>
      </form>
      <div v-for="story in stories" :key="story.id">
        <div class="row">
          <div class="col-sm-8 offset-sm-2">
            <StoryCard :story="story" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <Pagination
            v-bind:buttonCount="totalPageCount"
            v-bind:currentPage="pageDisplaying"
            v-bind:show="7"
            @changePage="handlePageChange"
          />
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
import Pagination from "../components/Pagination";

export default {
  name: "Stories",
  data() {
    return {
      stories: Array,
      searchTerm: "",
      pageSize: process.env.VUE_APP_DEFAULT_PAGE_SIZE,
      pageIndex: parseInt(process.env.VUE_APP_DEFAULT_PAGE_INDEX),
      pageDisplaying: parseInt(process.env.VUE_APP_DEFAULT_PAGE_INDEX),
      totalPageCount: 1,
    };
  },
  components: {
    StoryCard,
    Pagination,
  },
  created() {
    console.log(this.searchTerm, this.pageSize, this.pageIndex);
    PostService.findAllByUserPaginated(
      this.searchTerm,
      this.pageSize,
      this.pageIndex
    ).then((data) => {
      console.log(data);
      if (data) {
        this.stories = data.items;
        this.totalPageCount = data.totalPageCount;
      } else {
        this.stories = [];
        this.totalPageCount = 0;
      }
    });
  },
  methods: {
    async handleSearch(e) {
      e.preventDefault();

      console.log("Searching for: ", this.searchTerm);
      PostService.findAllByUserPaginated(
        this.searchTerm,
        this.pageSize,
        this.pageIndex
      )
        .then((data) => {
          this.stories = data.items;
          this.totalPageCount = data.totalPageCount;
          this.pageDisplaying = data.pageIndex;
          console.log("Currently Viewing " + this.pageIndex);
        })
        .catch((err) => {
          this.stories = [];
          console.log(err);
        });
    },

    handlePageChange(page) {
      console.log("parent ", page);
      PostService.findAllByUserPaginated(this.searchTerm, this.pageSize, page)
        .then((data) => {
          this.stories = data.items;
          this.totalPageCount = data.totalPageCount;
          this.pageDisplaying = data.pageIndex;
          console.log("Currently Viewing " + this.pageIndex);
        })
        .catch((err) => {
          this.stories = [];
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
a {
  color: inherit;
}
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
  margin-top: 1.6em;
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

select {
  width: 100%;
  height: 3em;
  padding: 10px;
  color: var(--color-black);
  font-weight: bold;
  border: none;
}

label {
  color: var(--color-accent);
}
</style>
