<template>
    <div class="home-page">
      <h1>Popular Movies & TV Shows</h1>
      <b-row>
        <b-col v-for="movie in movies" :key="movie.id" md="3">
          <b-card :title="movie.title" :img-src="movie.poster" img-alt="Movie Poster" img-top>
            <b-button variant="primary">Watch Now</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    computed: {
      movies() {
        return this.$store.getters.getMovies
      }
    },
    mounted() {
      this.$store.dispatch('fetchMovies')
    }
  }
  </script>
  
  <style>
  /* Add styles for the home page component */
  </style>