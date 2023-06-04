import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { User } from "../models/users";

interface HomePageProps {
  logInUser: User | null;
}

export const HomePage = ({ logInUser }: HomePageProps) => {
  return <>{logInUser ? <LoginPage /> : <LogoutPage />}</>;
};
