import { careProviders as mockCareProviders } from "./mockApi";

const API_BASE_URL = ""; // Replace with the base URL of the external API, if any

const fetchCareProviders = async (location, filters) => {
  if (API_BASE_URL) {
    // Use actual API
    const queryParams = new URLSearchParams();
    if (location) queryParams.append("location", location);
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });

    const response = await fetch(
      `${API_BASE_URL}/api/care-providers?${queryParams.toString()}`
    );
    const data = await response.json();
    return data;
  } else {
    // Use mock API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mockCareProviders;
  }
};

const fetchCareProviderById = async (id) => {
  if (API_BASE_URL) {
    // Use actual API
    const response = await fetch(`${API_BASE_URL}/api/care-providers/${id}`);
    const data = await response.json();
    return data;
  } else {
    // Use mock API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const careProviders = mockCareProviders.find(
      (provider) => provider.id === parseInt(id)
    );
    if (!careProviders) {
      throw new Error("Failed to fetch care provider");
    }
    return careProviders;
  }
};

export { fetchCareProviders, fetchCareProviderById };
