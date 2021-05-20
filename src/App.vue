<template>
  <Navbar :loginStatus="isLoggedIn" @logout="handleLogout" />
  <router-view @login="handleLogin" />
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      user: undefined,
      isLoggedIn: "FALSE",
    };
  },
  // * checking from local storage if user is already logged in
  mounted() {
    const username = localStorage.getItem("storygarden-username");
    if (username) {
      const name = localStorage.getItem("storygarden-name");
      this.isLoggedIn = "TRUE";
      this.user = {
        name,
        username,
      };
    }
    console.log(this.isLoggedIn);
  },
  methods: {
    handleLogin() {
      this.isLoggedIn = "TRUE";
      this.user = {
        name: localStorage.getItem("storygarden-name"),
        username: localStorage.getItem("storygarden-username"),
      };
      console.log("login");
    },
    handleLogout() {
      this.isLoggedIn = "FALSE";
      this.user = undefined;
      console.log("logout");
    },
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
