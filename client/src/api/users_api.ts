import { User } from "../models/users";
import { reportApiBaseUrl } from "./api-constant";

export async function getLogInUser() {
  const response = await fetch(`${reportApiBaseUrl}/users`, {
    method: "GET",
  });
  return response.json();
}

export interface SignUpCredentials {
  userName: string;
  email: string;
  password: string;
}

export async function signUp(credentials: SignUpCredentials): Promise<User> {
  const response = await fetch(`${reportApiBaseUrl}/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
}

export interface LogInCredentials {
  userName: string;
  password: string;
}

export async function login(credentials: LogInCredentials): Promise<User> {
  const response = await fetch(`${reportApiBaseUrl}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
}

export async function logout() {
  const response = await fetch(`${reportApiBaseUrl}/users`, {
    method: "POST",
  });
  return response;
}
