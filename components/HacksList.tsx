import { HackCard } from './HackCard';

interface Props {
  title: string;
  hacks: Hack[];
  containerClassName?: string;
}

const HacksList = ({ title, hacks, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="hack-list">
        {hacks.map((hack) => (
          <HackCard key={hack.id} {...hack} />
        ))}
      </ul>
    </section>
  );
};

export default HacksList;
