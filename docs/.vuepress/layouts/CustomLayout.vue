<template>
  <div class="container">
    <component />
    <main>
      <Content />
      <!-- built-in component that display the index.md  -->
    </main>
    <footer>
      <p>&copy; {{ currentYear }} My VuePress Site</p>
    </footer>
  </div>
</template>

<script>
import component from "../components/Mycomponent.vue";
export default {
  components: { component },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
h1,
footer {
  text-align: center;
}
</style>
