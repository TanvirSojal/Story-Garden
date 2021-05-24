<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div class="text">
          <h1>404</h1>
          <p>
            Nothing found that matched your request
          </p>
          <router-link to="/">
            <a>Go Back to Home ➝</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
};
</script>

<style scoped>
.text {
  text-align: center;
  margin-top: 10rem;
}

.text h1 {
  font-family: var(--font-primary);
}

.text p {
  font-size: large;
  font-weight: bold;
  color: var(--color-accent);
  letter-spacing: 0.1rem;
}

.text a {
  color: inherit;
  display: block;
  margin-top: 3rem;
}
</style>
