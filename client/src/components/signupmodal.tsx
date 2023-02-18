import { Button } from "./button";
import { Input } from "./input";
import { Modal } from "./modal";
import { User } from "../models/user";
import { useState } from "react";
import { SignUpCredentials } from "../api/users_api";
import * as UsersApi from "../api/users_api";

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
  async function handleSubmit(credentials: SignUpCredentials) {
    try {
      const user = await UsersApi.signUp(credentials);
      console.log(user);
      onSignUpSuccessful(user);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
  const handleSubmitLog = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(data);
    console.log(data);
    setData(initialData);
  };
  return (
    <Modal isOpen={true} title={"Sign Up"}>
      <form onSubmit={handleSubmitLog}>
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
