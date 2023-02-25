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
    <div className="flex flex-row lg:ml-auto gap-4">
      <span className="text-white font-medium py-2">User: {user.userName}</span>
      <Button variant="default" onClick={logout}>
        Log Out
      </Button>
    </div>
  );
};
