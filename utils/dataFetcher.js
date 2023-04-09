import { fetchCareProviders, fetchCareProviderById } from './apiClient';

export async function getCareProvidersData(filters) {
  try {
    const careProviders = await fetchCareProviders(filters);
    return careProviders;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCareProviderData(id) {
  try {
    const careProvider = await fetchCareProviderById(id);
    return careProvider;
  } catch (error) {
    console.error(error);
    return null;
  }
}
