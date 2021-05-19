<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-sm-4 offset-sm-2 pb-2">
        <router-link to="/">
          <Logo />
        </router-link>
      </div>
      <div class="col-sm-4">
        <ul v-if="isLoggedIn === 'FALSE'" class="nav auth">
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
            <router-link to="/registration">
              <button class="member">Sign Out</button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "./Logo";
export default {
  name: "Navbar",
  components: {
    Logo,
  },
  data() {
    return {
      isLoggedIn: "FALSE",
    };
  },
  created() {
    const username = localStorage.getItem("storygarden-username");
    if (username) {
      this.isLoggedIn = "TRUE";
    }
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
