import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "e3b8cf5396091a7bbe34269738e1f026",
    language: "ko-KR",
  },
});

export const tvApi = {
  topRated: () => api.get("/tv/top_rated"),
  popular: () => api.get("/tv/popular"),
  airingToday: () => api.get("/tv/airing_today"),
  detail: (id) =>
    api.get(`/tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("/search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const movieApi = {
  nowPlaying: () => api.get("/movie/now_playing"),
  upcoming: () => api.get("/movie/upcoming"),
  popular: () => api.get("/movie/popular"),
  detail: (id) =>
    api.get(`/movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("/search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
