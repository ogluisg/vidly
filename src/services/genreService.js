import http from "../services/httpService";
import config from "../config/config.json";

export function getGenres() {
  return http.get(config.genresEndpoint);
}
