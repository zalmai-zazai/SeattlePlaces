import React from 'react';

interface PlaceCardProps {
  title: string;
  story: string;
  location: string;
  imgUrl: string; // Note camelCase
}

const PlaceCard = ({ title, story, location, imgUrl }: PlaceCardProps) => {
  return (
    <div className="card mb-3">
      <img
        src={imgUrl}
        className="img-fluid w-100"
        style={{ height: '200px', objectFit: 'cover' }}
        alt="..."
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-title">Location: {location}</p>
        <p className="card-text">
          <b>Story:</b> {story}
        </p>
        <div className="bottom">
          <button className="btn btn-primary">View Package</button>

          <p className="card-text">
            <small className="text-left text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
