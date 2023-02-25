import { User } from "../models/user";
import { reportApiBaseUrl } from "./api-constant";

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    throw Error(
      "Request failed with status: " + response.status + response.statusText
    );
  }
}

export async function getLogInUser(): Promise<User> {
  const response = await fetchData(`${reportApiBaseUrl}/users`, {
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
  const response = await fetchData(`${reportApiBaseUrl}/users/signup`, {
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
  const response = await fetchData(`${reportApiBaseUrl}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
}

export async function logout() {
  const response = await fetch(`${reportApiBaseUrl}/users/logout`, {
    method: "POST",
  });
  return response;
}
