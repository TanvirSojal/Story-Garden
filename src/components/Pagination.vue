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
    <div v-for="index in getButtonList" :key="index">
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
    show: {
      type: Number,
    },
  },
  computed: {
    isCurrentPage(index) {
      return index == this.currentPage;
    },
    getButtonList() {
      // return which button range will be shown
      let buttons = [];
      let show = Math.min(this.show, this.buttonCount);
      let block = Math.floor(show / 2);
      let start = this.currentPage - block;
      let end = this.currentPage + block;
      console.log(this.currentPage);
      if (start <= 0) {
        end += Math.abs(start) + 1;
        start = 1;
      }
      end = Math.min(end, this.buttonCount);

      // to show given number of buttons if there are no more buttons on the right
      const totalShowing = end - start + 1;
      if (totalShowing < this.show) {
        console.log("has more", this.show - totalShowing);
        let showMore = this.show - totalShowing;
        for (let i = start - 1; showMore > 0 && i > 0; i--) {
          start = i;
          showMore--;
        }
        // while (start < this.show && start < 2) start--;
      }

      console.log("current", this.currentPage);
      console.log("start", start, "end", end);
      console.log("block", block);
      for (let i = start; i <= end; i++) buttons.push(i);
      return buttons;
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
