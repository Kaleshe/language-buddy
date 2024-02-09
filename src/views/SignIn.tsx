import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.ts";
import { useUser } from "../hooks/useUser.ts";

import Container from "../components/Container.jsx";
import Heading from "../components/Heading.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";

const SignInForm = () => {
  const { login } = useAuth();
  const { getUser } = useUser();
  const history = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const username = formData.get("username");
    const password = formData.get("password");

    const user = await getUser({ username: username, password: password });

    if (user) {
      console.log(user);
      console.log("Logged in");
      login(user);

      history("/dashboard");
    } else {
      console.error("Incorrect login details");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Input name="username" type="text" label="Username" required />
        <Input name="password" type="password" label="Password" required />
      </div>

      <Button className="mt-24 mx-auto block" type="submit">
        Sign in
      </Button>
    </form>
  );
};

const SignIn = () => (
  <Container className="space-y-8">
    <Heading>Sign in</Heading>
    <SignInForm />
  </Container>
);

export default SignIn;
