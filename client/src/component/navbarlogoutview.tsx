import { Button } from "./button";

//To clicked and open the login?signup modal
interface NavBarLoggedOutViewProps {
  // onSignUpClicked: () => void;
  onLoginClicked: () => void;
}

export const NavBarLogOutView = ({
  // onSignUpClicked,
  onLoginClicked,
}: NavBarLoggedOutViewProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:ml-auto gap-4">
      <Button variant={"primary"}>Sign Up</Button>
      <Button variant={"primary"} onClick={onLoginClicked}>
        Log In
      </Button>
    </div>
  );
};
