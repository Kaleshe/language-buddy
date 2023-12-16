import axios from "axios";

type Participant = {
  id: number;
};

type User = {
  first_name: string;
  last_name: string;
  dob: number;
  password: string;
  confirmPassword: string;
};

export const getBookings = async (user_id: number) => {
  return await axios
    .get("http://localhost:3000/bookings", {
      params: { participant: { id: user_id } },
    })
    .then(function ({ data }) {
      return data.map((i: Participant) => {
        i.participant.name = "Kaleshe";
        return i;
      });
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.log("All done!");
    });
};

export const getUser = () => {
  // return USERS.find((user) => user.id === user_id);
};

export const createUserAccount = (userData: User) => {
  axios.post("http://localhost:3000/users", userData);
};

export const isValidPassword = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};
