import api from "@/utils/api";

const state = {
  movies: [],
};

const getters = {
  getMovies: (state) => state.movies,
};

const actions = {
  async fetchMovies({ commit }) {
    const response = await api.get("/movies");
    commit("setMovies", response.data);
  },
};

const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
