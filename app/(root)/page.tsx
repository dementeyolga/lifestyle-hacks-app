import HackOverview from '@/components/HackOverview';
import HacksList from '@/components/HacksList';
import { hacksList } from '@/constants';

const Home = () => (
  <>
    <HackOverview {...hacksList[0]} />
    <HacksList
      title="Последние советы"
      hacks={hacksList}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
