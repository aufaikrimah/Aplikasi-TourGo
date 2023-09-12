import React from 'react';

const WisataItem = ({ item }) => {


    return (
      <div className="wisata-item">
        <div >
          <img src={item?.image} className="card-img-top" alt="" />
            
          </div>
        </div>
    
    );
  };
  
  export default WisataItem;