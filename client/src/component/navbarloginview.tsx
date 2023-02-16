import { Button } from "./button";
import { User } from "../models/user";
import * as UsersApi from "../api/users_api";

interface NavBarLoggedInViewProps {
  user: User;
  onLogoutSuccessful: () => void;
}

export const NavBarLogInView = ({
  user,
  onLogoutSuccessful,
}: NavBarLoggedInViewProps) => {
  async function logout() {
    try {
      await UsersApi.logout();
      onLogoutSuccessful();
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row lg:ml-auto gap-4">
      <span className="ml-2">Sign in as:{user.userName}</span>
      <Button variant="default" onClick={logout}>
        Log Out
      </Button>
    </div>
  );
};
