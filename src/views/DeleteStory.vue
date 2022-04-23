<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 offset-sm-3">
        <section>
          <div class="row">
            <div class="col-sm-12">
              <h3 style="color:red;font-weight:bold">
                Are you sure you want to delete this story?
              </h3>
            </div>
          </div>
          <div class="row mt-5 mb-5">
            <div class="col-sm-12">
              <h4>{{ story.title }}</h4>
              <label>Written By</label>
              <h5>{{ story.authorName }}</h5>
              <label>Created At</label>
              <h5>{{ story.createdAt }}</h5>

              <label>Last Updated At</label>
              <h5>{{ story.lastUpdatedAt }}</h5>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-sm-12">
              <button
                @click="cancelDelete"
                type="button"
                class="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                @click="handleDelete"
                type="button"
                class="btn btn-danger"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// import PostService from "../services/PostService";
import router from "../router";
import DateFormatter from "../utils/DateFormatter";
import PostService from "../services/PostService";
import { useRoute } from "vue-router";
export default {
  name: "DeleteStory",
  data() {
    return {
      story: {
        id: "",
        title: "",
        authorName: "",
        createdAt: undefined,
        lastUpdatedAt: undefined,
      },
    };
  },
  mounted() {
    // this.user.name = localStorage.getItem("storygarden-name");
    // this.user.username = localStorage.getItem("storygarden-username");

    // if (!this.user.username) {
    //   router.push("/404");
    //   return;
    // }

    const route = useRoute();
    if (!route.params.id) {
      router.push("/404");
      return;
    }
    this.story.id = route.params.id;
    this.story.title = route.params.title;
    this.story.authorName = route.params.authorName;
    this.story.createdAt = DateFormatter.toDayMonthYear(route.params.createdAt);
    this.story.lastUpdatedAt = DateFormatter.toDayMonthYear(
      route.params.lastUpdatedAt
    );
    console.log(this.story);
  },
  methods: {
    cancelDelete() {
      router.push("/");
    },
    handleDelete() {
      PostService.deleteById(this.story.id).then((response) => {
        if (response) {
          router.push("/");
        }
      });
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--color-white);
}

h3 {
  font-family: var(--font-text);
}

label {
  color: var(--color-accent);
  font-weight: bold;
}

label {
  margin-top: 2em;
  color: var(--color-accent);
  font-weight: bold;
}

input,
textarea {
  font-family: var(--font-text);
  font-size: large;
  padding: 0.6rem;
  width: 100%;
  border: 2px solid var(--color-white);
  background: var(--color-gray-100);
}

input:hover,
input:focus,
input:active,
textarea:hover,
textarea:focus,
textarea:active {
  outline: none;
  font-weight: bold;
  border: 2px solid var(--color-accent);
}

#write-section:hover {
  border-left: 2px solid var(--color-accent);
  border-right: 2px solid var(--color-accent);
}

button {
  margin-right: 1em;
}

#status {
  color: red;
}
</style>
