import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterPanel from "../components/FilterPanel";
import { fetchCareProviders } from '@/utils/apiClient';
import { CareProviderList} from '../CareProviderList';
const SearchPage = () => {
    const [location, setLocation] = useState("");
    const [filters, setFilters] = useState({});
    const [providers, setProviders] = useState([]);

    const handleSearch = (searchLocation) => {
        setLocation(searchLocation);
    };

    const handleFilterChange = (name, value) => {
setFilters((prevFilters) => ({ ...prevFilters, [name]: value}));

    };

    useEffect(()=> {
        const fetchProviders = async () => {
            const fetchProviders = await fetchCareProviders(location, filters );
            setProviders(fetchedProviders);
        };

        fetchProviders();
        
    }, [location, filters]);

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <FilterPanel onFilterChange={handleFilterChange} />
                  {/* Render providers list */}
                  <CareProviderList providers={providers} filters={filters} />


        </div>
    );
};

export default SearchPage;