const EmptyCard = () => (
  <li className="bg-navy/10 rounded-lg p-4 w-72 h-44 flex items-end shrink-0">
    <div className="space-y-2">
      <p className="text-sm">
        Oh no, it looks like you have no upcoming bookings.
      </p>
    </div>
  </li>
);

export default EmptyCard;
