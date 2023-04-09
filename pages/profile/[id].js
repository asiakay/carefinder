import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import CareProviderProfile from '../../components/CareProviderProfile';
import { getCareProviderData, getCareProvidersData } from '../../utils/dataFetcher';
import { fetchCareProviderById } from '../../utils/apiClient';


const CareProviderProfilePage = ({careProvider}) => {
  const router = useRouter();
  //const { id } = router.query;
if(router.isFallback){
  return <div>Loading...</div>;
}
  return (
    <Layout>
      <CareProviderProfile careProvider={careProvider} />
    </Layout>
  );
};

export async function getStaticPaths(){
  const careProviders = await getCareProvidersData({});
  const paths = careProviders.map((provider) => ({
    params: { id: provider.id.toString()},
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }){
  const careProvider = await getCareProviderData(params.id);

  return {
    props: {
      careProvider,
    },
    revalidate: 60,
  };
}
export default CareProviderProfilePage;
