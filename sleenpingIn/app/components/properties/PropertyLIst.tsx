'use client'

import PropertyListItem from "./PropertyListItem";
import React, { useEffect, useState } from "react";

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
}

const PropertyList: React.FC<PropertyType> = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {
    const url = 'http://localhost:8000/api/properties/';

    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProperties(json.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {properties.map(( property ) => {
        return (
          <PropertyListItem
            key={property.id}
            property={property}
          />
        )
      })}
    </div>
  )
}

export default PropertyList;
