import { useContext, useEffect, useState } from "react";

import { getBookings, UserType } from "../../functions.js";

import { useUser } from "../hooks/useUser.js";

import Container from "../components/Container.jsx";
import Heading from "../components/Heading.jsx";
import Subheading from "../components/Subheading.jsx";
import Card from "../components/Card.jsx";
import EmptyCard from "../components/EmptyCard.js";
import { AuthContext } from "../context/AuthContext.js";

type UpcomingProps = {
  user: UserType;
};

const Upcoming = ({ user }: UpcomingProps) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    (async () => {
      const bookings = await getBookings(user.id);
      setBookings(bookings);
    })();
  }, []);

  return (
    <div>
      <Subheading className="mb-4">Upcoming</Subheading>
      {bookings.length > 0 && (
        <ul className="flex gap-4 overflow-x-hidden">
          {bookings.map((booking) => (
            <Card key={booking.id} {...booking} />
          ))}
        </ul>
      )}
      {bookings.length < 1 && <EmptyCard />}
    </div>
  );
};

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <Container className="space-y-8">
      <nav className="flex justify-between items-center">
        <Heading>Dashboard</Heading>
        {user && (
          <>
            <div className="flex items-center gap-x-2">
              <p className="text-sm">Hi, {user?.first_name}</p>
              <span className="w-6 h-6 shadow bg-black rounded-full inline-block"></span>
            </div>
          </>
        )}
      </nav>

      {user && <Upcoming user={user} />}
    </Container>
  );
};

export default Dashboard;
