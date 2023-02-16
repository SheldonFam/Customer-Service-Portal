import { Button } from "./button";
import { Input } from "./input";
import { Modal } from "./modal";
import { User } from "../models/user";
import { useState } from "react";
import { LogInCredentials } from "../api/users_api";

interface SignUpModalProps {
  onDismiss: () => void;
  onSignUpSuccessful: (user: User) => void;
}

export const SignUpModal = ({
  onDismiss,
  onSignUpSuccessful,
}: SignUpModalProps) => {
  const initialData = {
    userName: "",
    password: "",
    email: "",
  };

  const [data, setData] = useState(initialData);

  const { userName, password, email } = data;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Modal isOpen={true} title={"Sign Up"}>
      <form>
        <Input
          label="UserName"
          type="text"
          name={"userName"}
          value={userName}
          onChange={handleInputChange}
          required={true}
        ></Input>
        <Input
          label="Email"
          type="text"
          name={"email"}
          value={email}
          onChange={handleInputChange}
          required={true}
        ></Input>
        <Input
          label="Password"
          type="text"
          name={"password"}
          value={password}
          onChange={handleInputChange}
          required={true}
        ></Input>
        <div className="flex justify-end mt-2 gap-2">
          <Button onClick={onDismiss}>Cancel</Button>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </Modal>
  );
};
