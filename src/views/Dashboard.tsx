import { useEffect, useState } from "react";
import { getBookings } from "../../functions.js";

import Container from "../components/Container.jsx";
import Heading from "../components/Heading.jsx";
import Subheading from "../components/Subheading.jsx";
import Card from "../components/Card.jsx";

const USER = 294;

const Upcoming = ({ bookings }: Array<object>) => (
  <div>
    <Subheading className="mb-4">Upcoming</Subheading>
    <ul className="flex gap-4 overflow-x-hidden">
      {bookings.map(booking => (
        <Card key={booking.id} {...booking} />
      ))}
    </ul>
  </div>
);

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getBookings(USER);
      setBookings(result);
    })();
  }, []);

  return (
    <Container className="space-y-8">
      <Heading>Dashboard</Heading>
      <Upcoming     bookings={bookings} />
    </Container>
  );
};

export default Dashboard;
