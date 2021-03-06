import React from 'react';
// import backgroundImage from '../assets/images/kegList-background.jpeg'
import Keg from './Keg';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const KegList = (props) => {
  return (
    <div>
      <style jsx>{`
                .text-box {
                    background-color: rgba(0,0,0,0.7);
                    font-size: 25px;
                    margin: 20px;
                    color: white;
                    font-weight: 200;
                    padding: 20px
                }
                .text-box h1 {
                    text-align: center;
                }
                .kegs-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
                .text-box a {
                  font-size: 30px;
                }
            `}</style>
      <div className="text-box">
        {props.employee ? <Link to="/new">Add a new keg</Link> : null}
        <br/>
        <br/>
        <h1>List of available kegs:</h1>
        <div className="kegs-list">
          <Keg name="Gold" brand="Saint Archer Brewing Company" price={7.00} alcoholContent={4.2} employee={props.employee}/>
          <Keg name="Insignia" brand="Mystic Brewery" price={8.50} alcoholContent={5.0} employee={props.employee}/>
          <Keg name="Easy Jack" brand="Firestone Walker Brewing Company" price={7.50} alcoholContent={4.0} ibu={47} employee={props.employee}/>
          <Keg name="Pale Ale" brand="Sierra Nevada Brewing Co." price={7.00} alcoholContent={5.6} ibu={38} pints={124}employee={props.employee}/>
          <Keg name="Golden Monkey" brand="Victory Brewing Company" price={8.00} alcoholContent={9.5} ibu={25} employee={props.employee}/>
          <Keg name="Margarita Gose" brand="Cigar City Brewing" price={7.50} alcoholContent={4.2} ibu={5} employee={props.employee}/> 
          <Keg name="Fat Tire" brand="New Belgium Brewing Company" price={7.00} alcoholContent={5.2} ibu={22} employee={props.employee}/>
          <Keg name="Guinness Draught" brand="Guinness" price={8.00} alcoholContent={4.2} ibu={45} employee={props.employee}/>
          <Keg name="Ginger Root Kombucha" brand="Urban Farm Fermentory" price={9.00} alcoholContent={1.5} employee={props.employee}/>
        </div>
      </div>

    </div>
  );
};

KegList.propTypes = {
  employee: PropTypes.bool,
};


export default KegList;