<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
        <section>
          <!-- <img src="https://source.unsplash.com/user/dotjpg/" /> -->

          <div class="row">
            <div class="col-sm-12" style="text-align:center">
              <h2>
                You are now a member of Story Garden!
              </h2>
              <router-link to="/signin">
                <p class="story">
                  Sign in and start writing ✒️
                </p></router-link
              >
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationSuccess",
};
</script>

<style scoped>
section {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--color-white);
}

a {
  color: inherit;
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
