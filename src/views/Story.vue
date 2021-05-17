<template>
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
            <p class="written-by">Written By</p>
            <h5 class="author">{{ story.author }}</h5>
            <p class="date">{{ story.date }}</p>
          </div>
        </div>
      </section>
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
    };
  },
  created() {
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
</style>
