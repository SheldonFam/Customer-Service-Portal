import { User } from "../models/user";

const reportApi = "https://reports-api.vercel.app";
const localhost = "http://localhost:8000";

export async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.console.error();
    throw Error(errorMessage);
  }
}

export async function getLogInUser(): Promise<User> {
  const response = await fetchData("http:localhost:8000/users", {
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
  const response = await fetchData("http://localhost:8000/users/signup", {
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
  const response = await fetchData("http://localhost:8000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
}

export async function logout() {
  const response = await fetchData("http://localhost:8000/users/logout", {
    method: "POST",
  });
  return response;
}
