import { useQuery } from '@apollo/client';

import DestinationList from '../components/DestinationList.jsx';

import { QUERY_DESTINATIONS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_DESTINATIONS);
  const destinations = data?.destinations || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <DestinationList
              destinations={destinations}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
