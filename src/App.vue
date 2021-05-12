<template>
  <Landing />
</template>

<script>
import Landing from "./views/Landing";

export default {
  name: "App",
  components: {
    Landing,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

:root {
  --color-black: #000;
  --color-dark: #373d4c;
  --color-gray-200: #b8b8b8;
  --color-gray-100: #f3f3f3;
  --color-white: #fff;

  --color-accent: #6930c3;

  --font-primary: "Rubik", sans-serif;
  --font-text: "Inter", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--color-gray-100);
}

#app {
  font-family: var(--font-primary);
  color: var(--color-black);
  -moz-osx-font-smoothing: grayscale;
}
</style>
