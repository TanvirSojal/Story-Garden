<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-sm-4 offset-sm-2 pb-2">
        <Logo />
      </div>
      <div class="col-sm-4">
        <ul class="nav auth">
          <li class="nav-item">
            <button class="signin">
              Sign In
            </button>
          </li>
          <li class="nav-item">
            <button class="member">Become a Member</button>
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
};
</script>

<style scoped>
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
