import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EditKeg from './EditKeg';
import {Button, Checkbox} from 'react-bootstrap';

class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pints: 124,
      showEdit: false
    };
  }
  
  render() {
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

        <h3>{this.props.name}</h3>
        <p><em>{this.props.brand}</em></p>
        <p>${this.props.price}</p>
        <p>{this.props.alcoholContent}% ABV</p>
        <p>{this.props.ibu ? `${this.props.ibu} IBU`: 'NO IBU'}</p>

        {this.props.employee ? 
          <div>
            <p>Pints left: {this.state.pints <= 0 ? 0 : this.state.pints}</p>

            <Button className="btn btn-success" onClick={() => this.setState({pints: this.state.pints-1})
            }>Sold one pint</Button><br/><br/>

            <Checkbox onChange={() => this.setState({showEdit: !this.state.showEdit})}>Edit info</Checkbox>
            {this.state.showEdit ? <EditKeg name={this.props.name} brand={this.props.brand} price={this.props.price} alcoholContent={this.props.alcoholContent} ibu={this.props.ibu}/> : null}

          </div> 
          : null}

      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  ibu: PropTypes.number,
  employee: PropTypes.bool
};

export default Keg;