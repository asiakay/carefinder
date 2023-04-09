// components/CareProviderList/index.jsx

import React from "react";
import CareProviderCard from "../CareProviderCard";

const CareProviderList = ({ providers }) => {
  return (
    <div className="care-provider-list">
      {providers.map((provider) => (
        <CareProviderCard key={provider.id} provider={provider} />
      ))}
    </div>
  );
};

export default CareProviderList;
