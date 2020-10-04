import http from "../services/httpService";
import { apiUrl } from "../config/config.json";

const endpoint = `${apiUrl}/users`;

export function register(user) {
  return http.post(endpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
