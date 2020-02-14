import React from 'react';
// import backgroundImage from '../assets/images/kegList-background.jpeg'
import Keg from './Keg';

const KegList = () => {
    const kegListStyling = {
        // background : `url(${backgroundImage}) no-repeat center center fixed`,
        // backgroundSize: 'cover',
        // height: '100vh',
        // overflow: 'hidden'
    }
    // const kegListText = {
    //     fontSize: '25px',
    //     width: '70vw',
    //     margin: '15vh',
    //     textAlign: 'center'
    // }
    return (
        <div style={kegListStyling}>
            <h1>List of availbale kegs:</h1>
            <Keg name="Gold" brand="Saint Archer Brewing Company" price={7.00} alcoholContent={4.2}/>
            <Keg name="Insignia" brand="Mystic Brewery" price={8.50} alcoholContent={5.0}/>
            <Keg name="Easy Jack" brand="Firestone Walker Brewing Company" price={7.50} alcoholContent={4.0} ibu={47}/>
            <Keg name="Pale Ale" brand="Sierra Nevada Brewing Co." price={7.00} alcoholContent={5.6} ibu={38}/>
            <Keg name="Golden Monkey" brand="Victory Brewing Company" price={8.00} alcoholContent={9.5} ibu={25}/>
            <Keg name="Margarita Gose" brand="Cigar City Brewing" price={7.50} alcoholContent={4.2} ibu={5}/> 
            <Keg name="Fat Tire" brand="New Belgium Brewing Company" price={7.00} alcoholContent={5.2} ibu={22}/>
            <Keg name="Guinness Draught" brand="Guinness" price={8.00} alcoholContent={4.2} ibu={45}/>
            <Keg name="Ginger Root Kombucha" brand="Urban Farm Fermentory" price={9.00} alcoholContent={1.5}/>
        </div>
    )
}

export default KegList