import { User } from "../models/user";

const reportApi = "https://reports-api.vercel.app";
const localhost = "http://localhost:8000";

export async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    console.log(response);
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.console.error();
    throw Error(errorMessage);
  }
}

export async function getLogInUser(): Promise<User> {
  const response = await fetchData("/users", { method: "GET" });
  console.log(response);
  console.log(response.json());
  return response.json();
}

export interface SignUpCredentials {
  userName: string;
  email: string;
  password: string;
}

export async function signUp(credentials: SignUpCredentials): Promise<User> {
  const response = await fetchData("/users/signup", {
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
  const response = await fetchData("users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  console.log(response);
  console.log(credentials);
  return response.json();
}

export async function logout() {
  await fetchData("users/logout", {
    method: "POST",
  });
}
