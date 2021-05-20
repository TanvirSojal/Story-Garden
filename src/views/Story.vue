<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
        <section>
          <!-- <img src="https://source.unsplash.com/user/dotjpg/" /> -->

          <div class="row">
            <div class="col-sm-8">
              <h2>{{ story.title }}</h2>
              <p class="story">
                {{ story.body }}
              </p>
            </div>
            <div class="col-sm-4 info">
              <div class="row">
                <div class="col-sm-12">
                  <p class="written-by">Written By</p>
                  <h5 class="author">{{ story.author }}</h5>
                  <p class="date">{{ story.date }}</p>
                </div>
              </div>
              <div v-if="username === story.username" class="row mt-4">
                <div class="col-sm-6 pt-2">
                  <router-link to="/update"
                    ><button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                        />
                      </svg>
                      <span style="padding-left:1rem">Update</span>
                    </button></router-link
                  >
                </div>
                <div class="col-sm-6 pt-2">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                      />
                    </svg>
                    <span style="padding-left:1rem">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../services/PostService";
export default {
  name: "Story",
  data() {
    return {
      story: Object,
      username: undefined,
    };
  },
  created() {
    this.username = localStorage.getItem("storygarden-username");
    PostService.findById(this.$route.params.id).then(
      (data) => (this.story = data)
    );
  },
};
</script>

<style scoped>
section {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--color-white);
}
/* section:hover {
  box-shadow: -0.4rem 0rem var(--color-accent);
  cursor: pointer;
}

section:active {
  box-shadow: none;
} */

.author {
  color: var(--color-accent);
}
.author:hover {
  cursor: pointer;
  text-decoration: underline;
}
.author:active {
  text-decoration: none;
}

.info {
  border-left: 2px solid var(--color-black);
  padding: 1rem;
}

.written-by {
  font-weight: bold;
}

.date {
  color: var(--color-dark);
}

h2,
h5,
p {
  /* this fixed the text overflow */
  width: min(46ch, max-parent);
}

h5,
p {
  font-family: var(--font-text);
}

h5 {
  font-weight: bold;
  margin-top: 2rem;
  font-size: 1rem;
  color: var(--color-accent);
}

.story {
  margin-top: 2rem;
  font-size: large;
  letter-spacing: 0.02rem;
  line-height: 1.8rem;
}

/* for update and delete toolbar */
button {
  padding: 0.5rem 1rem;
  width: 100%;
  background: var(--color-white);
  border: 2px solid var(--color-black);
  font-weight: bold;
  margin-right: 1rem;
}

button:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

button:active {
  color: var(--color-black);
  border-color: var(--color-black);
}
</style>
