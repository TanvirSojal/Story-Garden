<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 offset-sm-3">
        <section>
          <div class="row">
            <div class="col-sm-12">
              <h3 class="mb-4">
                {{
                  mode === "UPDATE" ? "Update Your Story" : "Write A New Story"
                }}
              </h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <p class="mb-4" style="opacity:.7">
                Author: {{ user.name }} ({{ user.username }})
              </p>
            </div>
          </div>
          <form @submit="handlePublish">
            <div class="pt-3">
              <div class="row pt-2 pb-3">
                <div class="col-sm-12">
                  <label id="username-label" for="title">Title</label>
                </div>
              </div>
              <div class="row" id="write-section">
                <div class="col-sm-12">
                  <input v-model="story.title" type="text" required />
                </div>
              </div>
            </div>

            <div class="pt-3">
              <div class="row pt-2 pb-3">
                <div class="col-sm-12">
                  <label id="username-label" for="title">Story</label>
                </div>
              </div>
              <div class="row" id="write-section">
                <div class="col-sm-12">
                  <textarea v-model="story.body" required />
                </div>
              </div>
            </div>

            <div class="row pt-5">
              <div class="col-sm-12">
                <button>{{ mode === "UPDATE" ? "Update" : "Publish" }}</button>
              </div>
            </div>
            <div v-if="status.length > 0" class="row pt-5">
              <label id="status">{{ status }}</label>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../services/PostService";
import router from "../router";
import { useRoute } from "vue-router";
export default {
  name: "StoryForm",
  data() {
    return {
      user: {
        name: "",
        username: "",
      },
      story: {
        id: "",
        title: "",
        body: "",
      },
      status: "",
      mode: "",
    };
  },
  mounted() {
    this.user.name = localStorage.getItem("storygarden-name");
    this.user.username = localStorage.getItem("storygarden-username");

    const route = useRoute();
    if (route.params.mode === "UPDATE") this.mode = "UPDATE";
    else {
      // '/update' route can not be used unless coming from story updation process
      router.push("/create");
      return;
    }
    this.story.id = route.params.id;
    this.story.title = route.params.title;
    this.story.body = route.params.body;
  },
  methods: {
    handlePublish(e) {
      e.preventDefault();

      if (!this.story.title || !this.story.body) {
        this.status = "Story title and body can not be empty!";
      }
      this.mode === "UPDATE"
        ? this.handleUpdateStory()
        : this.handleCreateStory();
    },

    handleCreateStory() {
      PostService.createPost({
        title: this.story.title,
        body: this.story.body,
      }).then((data) => {
        if (data) {
          console.log(data);
          router.push("/stories/" + data._id);
        } else {
          this.status = "Failed to create new story!";
        }
      });
    },

    handleUpdateStory() {
      console.log("update!");
      PostService.updateById(this.story.id, {
        title: this.story.title,
        body: this.story.body,
      }).then((data) => {
        if (data) {
          // console.log(response);
          router.push("/stories/" + data._id);
        } else {
          this.status = "Failed to update post!";
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
