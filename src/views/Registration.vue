<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-4 offset-sm-4">
        <section>
          <div class="row">
            <div class="col-sm-12">
              <h3 class="mb-4">Registration</h3>
            </div>
          </div>
          <form @submit="handleRegistration">
            <div class="pt-3">
              <div class="row pt-2 pb-3">
                <div class="col-sm-12">
                  <label id="name-label" for="name">Name</label>
                </div>
              </div>
              <div class="row" id="name-section">
                <div class="col-sm-12">
                  <input v-model="user.name" type="text" required />
                </div>
              </div>
            </div>
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
            <div class="pt-3">
              <div class="row pt-2 pb-3">
                <div class="col-sm-12">
                  <label id="confirm-password-label" for="confirm-password"
                    >Confirm Password</label
                  >
                </div>
              </div>
              <div class="row" id="confirm-password-section">
                <div class="col-sm-12">
                  <input
                    v-model="user.confirmedPassword"
                    type="password"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="pt-2">
              <div class="row pt-2 pb-2" style="opacity:.6">
                <div class="col-sm-12">
                  <p>Password length must be between 8 - 40</p>
                  <p>
                    Password must contain at least one numerical and one
                    alphabetic character
                  </p>
                </div>
              </div>
            </div>
            <div class="row pt-3">
              <div class="col-sm-12">
                <button>Register New Member</button>
              </div>
            </div>
            <div v-if="status.length > 0" class="row pt-5">
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
  name: "Registration",
  data() {
    return {
      user: {
        name: "",
        username: "",
        password: "",
        confirmedPassword: "",
      },
      status: "",
    };
  },
  methods: {
    handleRegistration(e) {
      e.preventDefault();

      // check all password validation
      if (!this.validatePassword()) {
        return;
      }

      AuthService.register({
        name: this.user.name,
        username: this.user.username,
        password: this.user.password,
      }).then((data) =>
        data
          ? router.push("/registration-success")
          : (this.status = "User Already Exists!")
      );
    },

    validatePassword() {
      // check if the passwords match
      if (this.user.password != this.user.confirmedPassword) {
        this.status = "Passwords did not match!";
        return false;
      }

      const password = this.user.password;
      if (password.length < 8) {
        this.status = "Password length must be at least 8!";
        return false;
      }

      if (password.length > 40) {
        this.status = "Password length must be at most 40!";
        return false;
      }

      let number = false;
      let char = false;

      for (let i = 0; i < password.length; i++) {
        if (password[i] >= "0" && password[i] <= "9") number = true;
        if (
          (password[i] >= "a" && password[i] <= "z") ||
          (password[i] >= "A" && password[i] <= "Z")
        )
          char = true;
      }
      if (!number || !char) {
        this.status = "Password must contain at least 1 number and 1 letter!";
        return false;
      }
      return true;
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

#name-section:hover,
#username-section:hover,
#password-section:hover,
#confirm-password-section:hover {
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
