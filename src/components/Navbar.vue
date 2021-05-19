<template @loggedIn="handleLogin">
  <section class="container-fluid">
    <div class="row">
      <div class="col-sm-4 offset-sm-2 pb-2">
        <router-link to="/">
          <Logo />
          {{ loginStatus }}
        </router-link>
      </div>
      <div class="col-sm-4">
        <ul
          v-if="loginStatus === 'FALSE' && isLoggedIn === 'FALSE'"
          class="nav auth"
        >
          <li class="nav-item">
            <router-link to="/signin">
              <button class="signin">
                Sign In
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/registration">
              <button class="member">Become a Member</button>
            </router-link>
          </li>
        </ul>
        <ul v-else class="nav auth">
          <li class="nav-item">
            <router-link to="/create">
              <button class="signin">
                Write Story
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/my-stories">
              <button class="signin">
                Your Stories
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <button @click="handleLogout" class="member">Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "./Logo";
import AuthService from "../services/AuthService";
import router from "../router";
export default {
  name: "Navbar",
  components: {
    Logo,
  },
  props: {
    loginStatus: String,
  },
  data() {
    return {
      isLoggedIn: "FALSE",
    };
  },
  created() {
    console.log(this.loginStatus);
    // check for login status prop from parent
    if (this.loginStatus === "TRUE") {
      this.isLoggedIn = "TRUE";
    } else {
      // check after page reload
      const username = localStorage.getItem("storygarden-username");
      if (username) {
        this.isLoggedIn = "TRUE";
      }
    }
  },
  methods: {
    handleLogin() {
      console.log("Heared you!");
      this.isLoggedIn = "TRUE";
    },
    handleLogout() {
      AuthService.logout();
      this.$emit("logout");
      this.isLoggedIn = "FALSE";
      router.push("/");
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
  padding-top: 3rem;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid var(--color-gray-200);
  background: var(--color-white);
}
ul {
  float: right;
}

.auth {
  font-size: 1rem;
}

button {
  padding: 0.5rem 2rem;
  background: var(--color-white);
  border: none;
  font-weight: bold;
  margin-left: 1rem;
}

button:hover {
  color: var(--color-white);
}
.signin {
  border: 2px solid var(--color-white);
}
.member {
  border: 2px solid var(--color-black);
}

.member:hover {
  background: var(--color-black);
  border: 2px solid var(--color-black);
}

.member:active {
  background: var(--color-white);
  color: var(--color-black);
}

.signin:hover {
  background: var(--color-accent);
  border: 2px solid var(--color-accent);
}

.signin:active {
  color: var(--color-black);
  background: var(--color-white);
  border: 2px solid var(--color-accent);
}
</style>
