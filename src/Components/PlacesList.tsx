import React from 'react';
import PlaceCard from './PlaceCard';
import places from '../PlacesData';

const PlacesList = () => {
  return (
    <div className="row ">
      {places.map((place, index) => (
        <div className="container mt-4 placesList col-lg-6 col-md-12 mb-4">
          <PlaceCard
            key={index}
            title={place.title}
            story={place.story}
            location={place.location}
            imgUrl={place.imgUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default PlacesList;
