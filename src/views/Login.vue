<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-4 offset-sm-4">
        <section>
          <div class="row">
            <div class="col-sm-12">
              <h3 class="mb-4">Sign In</h3>
            </div>
          </div>
          <form @submit="handleSignIn">
            <div class="pt-3">
              <div class="row pt-2 pb-3">
                <div class="col-sm-12">
                  <label id="username-label" for="username">Username</label>
                </div>
              </div>
              <div class="row" id="username-section">
                <div class="col-sm-12">
                  <input v-model="user.username" type="text" required />
                </div>
              </div>
            </div>

            <div class="pt-3">
              <div class="row pt-2 pb-3">
                <div class="col-sm-12">
                  <label id="password-label" for="password">Password</label>
                </div>
              </div>
              <div class="row" id="password-section">
                <div class="col-sm-12">
                  <input v-model="user.password" type="password" required />
                </div>
              </div>
            </div>

            <div class="row pt-5">
              <div class="col-sm-12">
                <button>Sign In</button>
              </div>
            </div>
            <div class="row pt-5">
              <label id="status">{{ status }}</label>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "../services/AuthService";
import router from "../router";
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      status: "",
    };
  },
  methods: {
    handleSignIn(e) {
      e.preventDefault();
      console.log("sign in");
      if (!this.user.username || !this.user.password) {
        this.status = "Credentials can not be empty!";
      }
      AuthService.login({
        username: this.user.username,
        password: this.user.password,
      }).then((response) => {
        if (response) {
          // notify App that user is logged in
          this.$emit("login");
          router.push("/");
        } else {
          this.status = "Invalid credentials!";
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

input {
  font-family: var(--font-text);
  font-size: large;
  padding: 0.6rem;
  width: 100%;
  border: 2px solid var(--color-white);
  background: var(--color-gray-100);
}

input:hover,
input:focus,
input:active {
  outline: none;
  font-weight: bold;
  border: 2px solid var(--color-accent);
}

#username-section:hover,
#password-section:hover {
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
