import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <div>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </div>
      <LoginForm />
    </>
  );
};

export default LoginPage;
