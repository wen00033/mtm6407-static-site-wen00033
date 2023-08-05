<template>
  <header>
    <nav>
      <ul class="navigation">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <select v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>
      </ul>
      <div></div>
    </nav>
  </header>
  <slot />
</template>
<script setup>
const colorMode = useColorMode();
console.log(colorMode.preference);
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&display=swap");
/* --------setting--------- */
* {
  padding: 0%;
  margin: 0%;
}

body {
  transition: all 400ms ease-in-out;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  font-family: "Nunito Sans", sans-serif;
  letter-spacing: 0.2px;
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.dark-mode header {
  background-color: hsl(207, 63%, 25%);
}

.dark-mode .navigation li a {
  color: white;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
.sepia-mode header {
  background-color: hsl(42, 54%, 68%);
}
.sepia-mode .navigation li a,
select {
  color: #433422;
}

/* ------------------------ */
header {
  background-color: lightblue;
  padding: 1.5rem;
}
.navigation {
  transition: all 300ms ease-out;
  display: flex;
  align-items: center;
  gap: 3rem;
}
.navigation li {
  list-style-type: none;
}

.navigation li a,
select {
  color: blueviolet;
  text-align: center;
  text-decoration: none;
  font-size: x-large;
  text-transform: uppercase;
  font-weight: 900;
}
select {
  border-radius: 0.7rem;
}
</style>
