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
          <form>
            <div class="pt-3">
              <div class="row pt-2 pb-3">
                <div class="col-sm-12">
                  <label id="name-label" for="name">Name</label>
                </div>
              </div>
              <div class="row" id="name-section">
                <div class="col-sm-12">
                  <input type="text" required id="name" />
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
                  <input type="text" required id="username" />
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
                  <input type="text" required id="password" />
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
                  <input type="text" required id="confirm-password" />
                </div>
              </div>
            </div>
            <div class="row pt-5">
              <div class="col-sm-12">
                <button>Register New Member</button>
              </div>
            </div>
            <div class="row pt-5">
              <label id="signin-status"></label>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  setup() {},
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

#signin-status {
  color: red;
}
</style>
