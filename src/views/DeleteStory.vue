<template>
  <div class="container-fluid"></div>
</template>

<script>
import PostService from "../services/PostService";
import router from "../router";
import { useRoute } from "vue-router";
export default {
  name: "DeleteStory",
  props: {
    story: Object,
  },
  data() {
    return {
      story: {
        id: "",
        title: "",
        content: "",
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
    this.story.content = route.params.content;
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
