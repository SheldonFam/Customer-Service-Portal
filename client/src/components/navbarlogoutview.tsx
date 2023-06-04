import { Button } from "./button";

interface NavBarLoggedOutViewProps {
  onSignUpClicked: () => void;
  onLoginClicked: () => void;
}

export const NavBarLogOutView = ({
  onSignUpClicked,
  onLoginClicked,
}: NavBarLoggedOutViewProps) => {
  return (
    <div className="flex flex-row lg:ml-auto gap-4">
      <Button variant={"primary"} onClick={onSignUpClicked}>
        Sign Up
      </Button>
      <Button variant={"primary"} onClick={onLoginClicked}>
        Log In
      </Button>
    </div>
  );
};
