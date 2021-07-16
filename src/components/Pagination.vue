<template>
  <div class="pagination">
    <button :disabled="currentPage == 1" @click="handlePageChange(1)">
      First
    </button>
    <button
      :disabled="currentPage == 1"
      @click="handlePageChange(currentPage - 1)"
    >
      ᐊ
    </button>
    <div v-for="index in buttonCount" :key="index">
      <button :disabled="index == currentPage" @click="handlePageChange(index)">
        {{ index }}
      </button>
    </div>
    <button
      :disabled="currentPage == buttonCount"
      @click="handlePageChange(currentPage + 1)"
    >
      ᐅ
    </button>
    <button
      :disabled="currentPage == buttonCount"
      @click="handlePageChange(buttonCount)"
    >
      Last
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    buttonCount: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },
  computed: {
    isCurrentPage(index) {
      return index == this.currentPage;
    },
  },
  methods: {
    handlePageChange(page) {
      if (page < 1 || page > this.buttonCount) {
        console.log("Out of bound");
        return;
      }
      this.$emit("changePage", page);
    },
  },
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

button:disabled {
  color: var(--color-white);
  background: var(--color-accent);
}
</style>
