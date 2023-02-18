import { Button } from "./button";
import { Input } from "./input";
import { Modal } from "./modal";
import { User } from "../models/user";
import { useState } from "react";
import { LogInCredentials } from "../api/users_api";
import * as UsersApi from "../api/users_api";

interface LoginModalProps {
  onDismiss: () => void;
  onLoginSuccessful: (user: User) => void;
}

export const LoginModal = ({
  onDismiss,
  onLoginSuccessful,
}: LoginModalProps) => {
  const initialData = {
    userName: "",
    password: "",
  };

  const [data, setData] = useState<LogInCredentials>(initialData);

  const { userName, password } = data;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  async function handleSubmit(credentials: LogInCredentials) {
    try {
      const user = await UsersApi.login(credentials);
      console.log(user);
      onLoginSuccessful(user);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
  const handleSubmitLog = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(data);
    console.log(data);
    // setData(initialData);
  };

  return (
    <Modal isOpen={true} title={"Log In"}>
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
            Log In
          </Button>
        </div>
      </form>
    </Modal>
  );
};
