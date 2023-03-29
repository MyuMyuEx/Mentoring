<template>
    <div class="search-page">
      <h1>Search Movies & TV Shows</h1>
      <b-form @submit.prevent="searchMovies">
        <b-form-group label="Search">
          <b-form-input v-model="query" placeholder="Enter a movie title"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Search</b-button>
      </b-form>
      <b-row v-if="movies.length > 0">
        <b-col v-for="movie in movies" :key="movie.id" md="3">
          <b-card :title="movie.title" :img-src="movie.poster" img-alt="Movie Poster" img-top>
            <b-button variant="primary">Watch Now</b-button>
          </b-card>
        </b-col>
      </b-row>
      <p v-else>No movies found.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchPage',
    data() {
      return {
        query: '',
        movies: []
      }
    },
    methods: {
      async searchMovies() {
        const response = await this.$http.get('/search', {
          params: {
            q: this.query
          }
        })
        this.movies = response.data
      }
    }
  }
  </script>
  
  <style>
  /* Add styles for the search page component */
  </style>