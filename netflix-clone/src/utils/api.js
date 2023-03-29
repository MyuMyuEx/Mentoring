import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.netflix.com",
});

const searchMovies = async (query) => {
  const response = await instance.get("/search", {
    params: {
      q: query,
    },
  });
  return response.data;
};

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  searchMovies,
};
