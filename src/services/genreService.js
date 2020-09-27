import http from "../services/httpService";
import { apiUrl } from "../config/config.json";

const endpoint = `${apiUrl}/genres`;

export function getGenres() {
  return http.get(endpoint);
}
