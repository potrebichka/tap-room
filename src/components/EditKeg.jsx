import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, FieldGroup, Button, CheckBox } from 'react-bootstrap';
import PropTypes from 'prop-types';

const EditKeg = (props) => {
  return (
    <div>
      <style jsx>{`
                .text-box {
                    background-color: rgba(0,0,0,0.7);
                    font-size: 25px;
                    margin: 20px auto;
                    color: white;
                    font-weight: 200;
                    padding: 40px;
                    text-align: center;
                    max-width: 900px;
                }
                .btn-custom {
                    font-size: 40px
                }

            `}</style>
      <div className="text-box">
        <h1>Edit keg:</h1>
        <Form>
          <FormGroup>
            <ControlLabel>Enter a name of beer:</ControlLabel>
            <FormControl type="text" placeholder={props.name} defaultValue={props.name}></FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Enter name of brand:</ControlLabel>
            <FormControl type="text" placeholder={props.brand} defaultValue={props.brand}></FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Enter a price:</ControlLabel>
            <FormControl type="number" step="0.01" placeholder={props.price} defaultValue={props.price}></FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Enter an alcohol content:</ControlLabel>
            <FormControl type="number" step="0.01" placeholder={props.alcoholContent} defaultValue={props.alcoholContent}></FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Enter an IBU (optional):</ControlLabel>
            <FormControl type="number" placeholder={props.ibu} defaultValue={props.ibu}></FormControl>
          </FormGroup>

          <Button type="submit" className="btn btn-primary btn-custom">Submit</Button>
        </Form>
      </div>

    </div>
  );
};

EditKeg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  ibu: PropTypes.number
};

export default EditKeg;