import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser.ts";

import { isValidPassword, createUser } from "../../functions.ts";

import Container from "../components/Container.jsx";
import Heading from "../components/Heading.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";

const SignUpForm = () => {
  const { addUser } = useUser();
  const history = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const fName = formData.get("fname");
    const lName = formData.get("lname");
    const username = formData.get("username");
    const dob = formData.get("dob");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    if (!isValidPassword(password, confirmPassword)) {
      console.error("This is an invalid password");
    } else {
      (async () => {
        const user = await createUser({
          first_name: fName,
          last_name: lName,
          username: username,
          email,
          dob: dob,
          password: password, // TODO: Create a password protection function
        });

        if (user) {
          const { password, ...restOfUser } = user;
          console.log(user);
          addUser(restOfUser);
        } else {
          console.error("Something went wrong");
        }
      })();
      history("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Input name="username" type="text" label="Username" required />
        <Input name="fname" type="text" label="First name" required />
        <Input name="lname" type="text" label="Last name" required />
        <Input name="dob" type="date" label="Date of birth" required />
        <Input name="email" type="email" label="Email" required />
        <Input name="password" type="password" label="Password" required />
        <Input
          name="confirm-password"
          type="password"
          label="Confirm password"
          required
        />
      </div>

      <Button className="mt-24 mx-auto block" type="submit">
        Create account
      </Button>
    </form>
  );
};

const SignUp = () => (
  <Container className="space-y-8">
    <Heading>Sign up</Heading>
    <SignUpForm />
  </Container>
);

export default SignUp;
