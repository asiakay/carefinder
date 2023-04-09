import React from "react";
import Image from "next/image";
import Link from "next/link";

const CareProviderCard = ({ provider }) => {
  return (
    <div className="care-provider-card">
      {/* Display provider information here */}
      <Image
        src={provider.photo}
        alt={provider.name}
        width={150} // specify the desired width
        height={150} // specify the desired height
        layout="responsive"
      />
      <Link href={`/profile/${provider.id}`}>
        <h2>{provider.name}</h2>
      </Link>
      <p>{provider.description}</p>
      {/* Add more information as needed */}
    </div>
  );
};

export default CareProviderCard;
