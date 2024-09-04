import { AuthToken } from "./dtos/auth/authToken.ts";

export class AuthStorage {
  static setToken(token: AuthToken) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  static getToken(): AuthToken | null {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(localStorage.getItem("token")) : null;
  }

  static isToken(): boolean {
    return AuthStorage.getToken() !== null;
  }
}
