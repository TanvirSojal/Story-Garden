<template>
  <router-link
    :to="{
      name: 'Story',
      params: { id: story.id },
    }"
  >
    <section>
      <!-- <img src="https://source.unsplash.com/user/dotjpg/" /> -->
      <div class="row">
        <div class="col-sm-8">
          <h2>{{ story.title }}</h2>
          <p class="story">
            {{
              story.content.length > 200
                ? story.content.slice(0, 200) + "..."
                : story.content
            }}
            <span>{{ story.content.length > 200 ? "Read More" : "" }}</span>
          </p>
        </div>
        <div class="col-sm-4 info">
          <p class="written-by">Written By</p>
          <h5>{{ story.authorName }}</h5>
          <p class="date">{{ formattedDate }}</p>
          <div style="display:flex">
            <div v-if="checkModificationAccess">
              <router-link
                :to="{
                  name: 'UpdateStory',
                  params: {
                    title: story.title,
                    content: story.content,
                    id: story.id,
                    mode: 'UPDATE',
                  },
                }"
              >
                <button>✍️ Edit</button></router-link
              >
              <button>❌ Delete</button>
            </div>
            <button>💾 Export</button>
          </div>
        </div>
      </div>
    </section>
  </router-link>
</template>

<script>
import DateFormatter from "../utils/DateFormatter";
export default {
  name: "StoryCard",
  props: { story: Object },
  data() {
    return {
      username: undefined,
      role: undefined,
    };
  },
  created() {
    this.username = localStorage.getItem("storygarden-username");
    this.role = localStorage.getItem("storygarden-role");
  },
  computed: {
    // * computed property used to format date from the story prop
    // * because the data is already loaded in the parent prop
    // * the function will not be called with null
    formattedDate() {
      return DateFormatter.toDayMonthYear(this.story.createdAt);
    },
    checkModificationAccess() {
      console.log(this.role);
      return this.role == 32 || this.story.authorUsername == this.username;
    },
  },
};
</script>

<style scoped>
/* to remove router-link text-decoration */
a {
  text-decoration: none;
  color: inherit;
}
section {
  margin-top: 2rem;
  padding: 2rem;
  background: var(--color-white);
}

section:hover {
  /* box-shadow: 2px 2px 4px var(--color-gray-200); */
  /* text-decoration: underline; */
  /* border-left: 4px solid var(--color-accent); */
  box-shadow: -0.4rem 0rem var(--color-accent);
  cursor: pointer;
}

section:active {
  box-shadow: none;
  /* border: none; */
}

span {
  color: var(--color-accent);
}
span:hover {
  text-decoration: underline;
}
span:active {
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

button {
  margin-right: 0.8em;
  padding: 0.2em;
  border: none;
  border-radius: 0.2em;
}

button:hover {
  background: var(--color-gray-200);
}

button:active {
  background: var(--color-gray-100);
}
</style>
