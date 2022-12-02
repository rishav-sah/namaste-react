import React from 'react';
import { FaMapMarkerAlt, FaBuilding, FaIdCard } from 'react-icons/fa';

const Card = (props) => {
  const {img, name, address, organization, designation} = props;
  return (
    <div className="card">
      <div className="card-main">
        <div className="card-header">
          <div className="card-cover">
            <img src="https://media.discordapp.net/attachments/1042062908223389729/1045628798898557029/PHOTO-2022-11-25-14-43-23.jpg?width=960&height=686" alt="" />
            <div className="card-dp">
              <img src={img} alt="" />
            </div>
          </div>
        </div>

        <div className="card-content">
          <h1 className="card-name"> {name} </h1>

          <ul className="card-info">
            <li><FaMapMarkerAlt className="card-icon" /> {address}</li>
            <li><FaBuilding className="card-icon" /> {organization}</li>
            <li><FaIdCard className="card-icon" /> {designation}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;