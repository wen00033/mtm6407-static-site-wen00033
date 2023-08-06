<template>
  <div>
    <ul class="random-card">
      <img
        v-for="el in card"
        :key="el.code"
        :src="el.image"
        @click="fetchcard"
        alt="card"
      />
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      card: [],
      id: "",
    };
  },
  methods: {
    async fetchcardID() {
      const res = await axios.get(
        "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      this.id = res.data.deck_id;
    },
    async fetchcard(id) {
      const res = await axios.get(
        `https://www.deckofcardsapi.com/api/deck/${this.id}/draw/?count=2`
      );
      this.card = res.data.cards;
      this.event = preventDefault();
    },
  },
  async mounted() {
    await this.fetchcardID();
    await this.fetchcard();
  },
};
</script>

<style>
.random-card {
  display: flex;
  gap: 2rem;
  justify-content: center;
}
</style>
