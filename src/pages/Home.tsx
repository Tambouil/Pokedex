import { useState } from 'react';
import Header from '../components/Header';

const Home = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <div className="bg-gray-100">
      <Header setSearch={setSearch} />
    </div>
  );
};

export default Home;
