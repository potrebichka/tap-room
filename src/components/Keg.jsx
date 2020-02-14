import React from 'react';
import PropTypes from 'prop-types';

const Keg = (props) => {
  return (
    <div className='keg'>
      <style jsx>{`
                .keg {
                    background: rgba(0,0,0,0.5);
                    min-width: 300px;
                    padding: 10px;
                    margin: 10px;
                    text-align: center;
                }
            `}</style>
      <h3>{props.name}</h3>
      <p><em>{props.brand}</em></p>
      <p>${props.price}</p>
      <p>{props.alcoholContent}% ABV</p>
      <p>{props.ibu ? `${props.ibu} IBU`: 'NO IBU'}</p>
    </div>
  );
};

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  ibu: PropTypes.number
};

export default Keg;