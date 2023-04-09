import React from 'react';
import Layout from '../components/Layout';
//import { fetchCareProviders } from '../utils/apiClient';
import { getCareProvidersData } from '../utils/dataFetcher';

import LocationSearchBar from '../components/LocationSearchBar';
import FilterPanel from '../components/FilterPanel';
import CareProviderCard from '../components/CareProviderCard';
import Pagination from '../components/Pagination';




const HomePage = ({ careProviders }) => {
  return (
      <Layout>
        <LocationSearchBar />
        <FilterPanel />
        <div className="care-provider-grid">
{careProviders.map((provider) => (
           <CareProviderCard key={provider.id} provider={provider}/>

))}

          {/* Add more CareProviderCard components here or fetch from an API */}
        </div>
        <Pagination />
        </Layout>
  );
};

export async function getStaticProps(context){
  const filters = {}; // Set up filter values based on user input
const careProviders = await getCareProvidersData(filters);

return {
props: {
  careProviders,
},
revalidate: 60, // Revalidate the data every 60 seconds
};
}


  /* const reProviders = await getCareProviderData(filter);
  try {
    const careProviders = await fetchCareProviders(filters);
    return {
      props: { 
        careProviders,
      },
    };
  } catch (error){
    console.error(error);
    return {
      props: {
        careProviders: [],
      },
    };
  }
}
 */
export default HomePage;
