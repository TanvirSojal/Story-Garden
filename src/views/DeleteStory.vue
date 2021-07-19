<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 offset-sm-3">
        <section>
          <div class="row">
            <div class="col-sm-8 offset-sm-2">
              <h3>Are you sure you want to delete this story?</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8 offset-sm-2">
              <h3>{story.title}</h3>
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
import { useRoute } from "vue-router";
export default {
  name: "DeleteStory",
  data() {
    return {
      story: {
        id: "",
        title: "",
      },
    };
  },
  mounted() {
    this.user.name = localStorage.getItem("storygarden-name");
    this.user.username = localStorage.getItem("storygarden-username");

    if (!this.user.username) {
      router.push("/404");
      return;
    }

    const route = useRoute();
    this.story.id = route.params.id;
    this.story.title = route.params.title;
  },
  methods: {},
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
  padding: 0.8rem 2rem;
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

#status {
  color: red;
}
</style>
