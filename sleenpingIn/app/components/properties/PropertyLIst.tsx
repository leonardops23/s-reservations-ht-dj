'use client'

import apiService from "@/app/services/apiService";
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
    const url = '/api/properties/';
    const tmpProperties = await apiService.get(url);
    setProperties(tmpProperties.data);
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
