import { useRef } from "react";

import Container from "../components/Container.jsx";
import Heading from "../components/Heading.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";

const SignUp = () => {
  const form = useRef();

  const createUserAccount = (formData) => {
    const name = formData.get("fname");
    console.log(`New user ${name} created.`);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const isValidPassword = (password, confirmPassword) => {
      return password === confirmPassword;
    };

    const fName = formData.get("fname");
    const lName = formData.get("lname");
    const dob = formData.get("dob");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const [] = formData.getAll(
      "fname",
      "lname",
      "dob",
      "password",
      "confirm-password"
    );

    if (!isValidPassword(password, confirmPassword)) {
      console.error("This is an invalid password");
    } else {
      createUserAccount(formData);
    }
  };

  return (
    <Container className="space-y-8">
      <Heading>Sign up</Heading>
      <form onSubmit={submitHandler} ref={form}>
        <div className="space-y-4">
          <Input name="fname" type="text" label="First name" />
          <Input name="lname" type="text" label="Last name" />
          <Input name="dob" type="date" label="Date of birth" />
          <Input name="password" type="password" label="Password" reqiuired />
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
    </Container>
  );
};

export default SignUp;
