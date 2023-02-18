import { LoginPage } from "./loginPage";
import { LogoutPage } from "./LogoutPage";
import { User } from "../models/user";

interface HomePageProps {
  logInUser: User | null;
}

export const HomePage = ({ logInUser }: HomePageProps) => {
  return <>{logInUser ? <LoginPage /> : <LogoutPage />}</>;
};
