import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EditKeg from './EditKeg';
import {Button} from 'react-bootstrap';

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
      {props.employee ? 
      <div>
        <p>Pints left: {props.pints <= 0 ? 0 : props.pints}</p>
        <Button className="btn btn-success">Sold one pint</Button><br/>
        <Link to="/edit" component ={EditKeg}>Edit</Link>
      </div> 
      : null}
    </div>
  );
};

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  ibu: PropTypes.number,
  pints: PropTypes.number.isRequired,
  employee: PropTypes.bool
};

export default Keg;