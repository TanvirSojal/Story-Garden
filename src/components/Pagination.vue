<template>
  <div class="pagination">
    <button>First</button>
    <div v-for="index in 10" :key="index">
      <button>{{ index }}</button>
    </div>
    <button disabled>Last</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
};
</script>

<style scoped>
.pagination {
  margin-top: 3em;
  margin-bottom: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  padding: 8px;
  width: 4em;
  margin: 0.2em;
  color: var(--color-accent);
  background: var(--color-white);
  border: none;
  font-weight: bold;
  border: 2px solid var(--color-accent);
}

button:hover {
  color: var(--color-white);
  background: var(--color-accent);
  border: 2px solid var(--color-accent);
}

button:active {
  color: var(--color-accent);
  background: var(--color-white);
}
</style>
