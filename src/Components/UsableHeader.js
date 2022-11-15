import React from 'react';
import './usableheader.css'
const UsableHeader = ({title,image,children}) => {
  return (
  <header className='usable-header'>
      <div className="header-container">
          <div className="header-container-bg">
            <img src={image} alt="" />
          </div>
          <div className="header-content">
            <h2>{title}</h2>
            <p>{children}</p>
          </div>
      </div>
  </header>
  );
}

export default UsableHeader;
