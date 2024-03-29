type CardProps = {
  first_name: string;
  last_name: string;
  duration: string;
};

const Card = ({ first_name, last_name, duration }: CardProps) => (
  <li className="odd:bg-purple even:bg-navy text-white rounded-lg p-4 w-72 h-44 flex items-end shrink-0">
    <div>
      <p className="font-semibold">{`${first_name} ${last_name}`}</p>
      <p className="text-sm opacity-80">Day - {duration} mins</p>
    </div>
  </li>
);

export default Card;
