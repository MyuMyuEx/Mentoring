<template>
  <header>
    <div class="logo">
      <img src="logo.png" alt="Netflix Logo">
    </div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">New & Popular</a></li>
        <li><a href="#">My List</a></li>
      </ul>
    </nav>
    <div class="search">
      <input type="text" placeholder="Search">
      <button>Search</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
/* Add styles for the header component */
</style>