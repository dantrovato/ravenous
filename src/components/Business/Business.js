import React from 'react';
import './Business.css';

//do we need this. in the relevant info below??
class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.business.imageSrc} alt=''/>
        </div>
        <h2>{this.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.business.address}</p>
            <p>{this.business.city}</p>
            <p>{this.business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.business.category}</h3>
            <h3 className={this.business.rating}>stars</h3>
            <p>{this.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Business;
