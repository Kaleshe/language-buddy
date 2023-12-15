import axios from "axios";
import qs from "qs";

export const getBookings = async (user_id) => {
  return await axios
    .get("http://localhost:3000/bookings", {
      params: { participant: { id: user_id } },
      // paramsSerializer: function (params) {
      //   return qs.stringify(params, { arrayFormat: "brackets" });
      // },
    })
    .then(function ({ data }) {
      return data.map((i) => {
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

export const getUser = (user_id) => {
  return USERS.find((user) => user.id === user_id);
};
