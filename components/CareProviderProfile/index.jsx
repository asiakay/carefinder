import React from "react";
import Image from "next/image";

const CareProviderProfile = ({ careProvider }) => {
  return (
    <div className="care-provider-profile">
      <Image
        src={careProvider.photo}
        alt={careProvider.name}
        width={300}
        height={300}
        layout="responsive"
      />
      <h1>{careProvider.name}</h1>
      <p>{careProvider.description}</p>
      {/* Add more information as needed */}
    </div>
  );
};

export default CareProviderProfile;
