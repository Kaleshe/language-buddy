import axios from "axios";

type Participant = {
  id: number;
};

export interface UserType {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  dob: string;
  password: string;
  confirmPassword: string;
}

export const getBookings = async (user_id: Participant) => {
  try {
    const { data: organiser } = await axios.get(
      "http://localhost:3000/bookings",
      {
        params: { organiser_id: user_id },
      }
    );

    const { data: participant } = await axios.get(
      "http://localhost:3000/bookings",
      {
        params: { participant_id: user_id },
      }
    );

    const bookings = [...organiser, ...participant];

    return bookings;
  } catch (err) {
    console.error(err);
  }
};

export const createUser = async (userData: UserType) => {
  try {
    const { data } = await axios.post("http://localhost:3000/users", userData);
    return data;
  } catch (err) {
    console.error(err);
  }

  return false;
};

export const isValidCredentials = async (
  username: string,
  password: string
) => {
  try {
    const { data } = await axios.get("http://localhost:3000/bookings", {
      params: { participant: { username: username, password: password } },
    });

    return data;
  } catch (err) {
    console.error(err);
  }

  return false;
};

export const isValidPassword = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};
