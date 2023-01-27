declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_REPORT_API: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
