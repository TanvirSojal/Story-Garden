<template>
  <!-- Show registration success dialogue if registration is complete -->
  <div v-if="registrationComplete === true">
    <RegistrationSuccess />
  </div>

  <div v-else class="container-fluid">
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
                  <ul>
                    <li :style="criteria['name-length']">
                      Name length must be between 4 - 50
                    </li>
                    <li :style="criteria['username-length']">
                      Username length must be between 4 - 20
                    </li>
                    <li :style="criteria['name-username-char']">
                      Username must contain only alphanumeric characters
                    </li>
                    <li :style="criteria['password-length']">
                      Password length must be between 8 - 40
                    </li>
                    <li :style="criteria['password-char']">
                      Password must contain at least one numerical and one
                      alphabetic character
                    </li>
                  </ul>
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

import RegistrationSuccess from "../components/RegistrationSuccess";

export default {
  name: "Registration",
  components: {
    RegistrationSuccess,
  },
  data() {
    return {
      user: {
        name: "",
        username: "",
        password: "",
        confirmedPassword: "",
      },
      // * used to highlight the unmet criterias
      criteria: {
        "name-length": "",
        "username-length": "",
        "username-char": "",
        "password-length": "",
        "password-char": "",
      },
      status: "",
      registrationComplete: false,
    };
  },
  created() {
    if (localStorage.getItem("storygarden-username")) {
      router.push("/");
      return;
    }
  },
  methods: {
    handleRegistration(e) {
      e.preventDefault();

      if (!this.validateAll()) {
        return;
      }

      AuthService.register({
        name: this.user.name,
        username: this.user.username,
        password: this.user.password,
      }).then((data) =>
        data
          ? (this.registrationComplete = true)
          : (this.status = "User Already Exists!")
      );
    },

    // * handles name, username and password validation
    validateAll() {
      this.clearCriteria();
      this.status = "";
      let valid = true;
      // check all password validation
      if (!this.validatePassword()) valid = false;

      // check username validation
      if (!this.validateUsername()) valid = false;

      // check name validation
      if (!this.validateName()) valid = false;

      return valid;
    },

    highlightCriteria(id) {
      this.criteria[id] = "color:red; font-weight:bold;";
    },

    clearCriteria() {
      this.criteria = {
        "name-length": "",
        "username-length": "",
        "name-username-char": "",
        "password-length": "",
        "password-char": "",
      };
    },

    validateName() {
      const name = this.user.name;
      let valid = true;
      if (name.length < 4) {
        // this.status = "Name length must be at least 4!";
        this.highlightCriteria("name-length");
        valid = false;
      }

      if (name.length > 50) {
        // this.status = "Name length must be at most 20!";
        this.highlightCriteria("name-length");
        valid = false;
      }
      return valid;
    },

    validateUsername() {
      const username = this.user.username;
      let valid = true;

      if (username.length < 4) {
        // this.status = "Username length must be at least 4!";
        this.highlightCriteria("username-length");
        valid = false;
      }

      if (username.length > 20) {
        // this.status = "Username length must be at most 20!";
        this.highlightCriteria("username-length");
        valid = false;
      }

      for (let i = 0; i < username.length; i++) {
        const ch = username[i];
        if (
          !(
            (ch >= "0" && ch <= "9") ||
            (ch >= "a" && ch <= "z") ||
            (ch >= "A" && ch <= "Z")
          )
        ) {
          // this.status = "Username can not contain special characters!";
          this.highlightCriteria("username-char");
          valid = false;
          break;
        }
      }
      return valid;
    },

    // returns true/false based on validation result
    validatePassword() {
      // check if the passwords match
      let valid = true;
      if (this.user.password != this.user.confirmedPassword) {
        // this.status = "Passwords did not match!";
        valid = false;
      }

      const password = this.user.password;

      // password length should be [8-40]
      if (password.length < 8) {
        // this.status = "Password length must be at least 8!";
        this.highlightCriteria("password-length");
        valid = false;
      }

      if (password.length > 40) {
        // this.status = "Password length must be at most 40!";
        this.highlightCriteria("password-length");
        valid = false;
      }

      // password must contain at least 1 number and 1 alphabetic character
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
        // this.status = "Password must contain at least 1 number and 1 letter!";
        this.highlightCriteria("password-char");
        valid = false;
      }
      return valid;
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

li {
  margin-top: 0.3rem;
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
