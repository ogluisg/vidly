import http from "../services/httpService";
import { apiUrl } from "../config/config.json";

const endpoint = `${apiUrl}/movies`;

function movieUrl(id) {
  return `${endpoint}/${id}`;
}

export function getMovies() {
  return http.get(endpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(`${endpoint}`, movie);
}
