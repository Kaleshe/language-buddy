import React from "react";

import Container from "../components/Container.jsx";
import Heading from "../components/Heading.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";

import { isValidPassword, createUserAccount } from "../../functions.ts";

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);

  const fName = formData.get("fname");
  const lName = formData.get("lname");
  const dob = formData.get("dob");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");

  if (!isValidPassword(password, confirmPassword)) {
    console.error("This is an invalid password");
  } else {
    createUserAccount();
  }
};

const SignUpForm = () => (
  <form onSubmit={handleSubmit}>
    <div className="space-y-4">
      <Input name="fname" type="text" label="First name" required />
      <Input name="lname" type="text" label="Last name" required />
      <Input name="dob" type="date" label="Date of birth" required />
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

const SignUp = () => (
  <Container className="space-y-8">
    <Heading>Sign up</Heading>
    <SignUpForm />
  </Container>
);

export default SignUp;
