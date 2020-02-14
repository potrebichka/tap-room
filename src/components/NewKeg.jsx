import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, FieldGroup, Button, CheckBox } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NewKeg = () => {
    const linkStyling = {
        color: "white",
        fontSize: "25px"
    }
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
        <h1>Add a new keg:</h1>
        <Form>
            <FormGroup>
                <ControlLabel>Enter a name of beer:</ControlLabel>
                <FormControl type="text" placeholder="" />
            </FormGroup>

            <FormGroup>
                <ControlLabel>Enter name of brand:</ControlLabel>
                <FormControl type="text" placeholder="" />
            </FormGroup>

            <FormGroup>
                <ControlLabel>Enter a price:</ControlLabel>
                <FormControl type="number" step="0.01" placeholder="" />
            </FormGroup>

            <FormGroup>
                <ControlLabel>Enter an alcohol content:</ControlLabel>
                <FormControl type="number" step="0.01" placeholder="" />
            </FormGroup>

            <FormGroup>
                <ControlLabel>Enter an IBU (optional):</ControlLabel>
                <FormControl type="number" placeholder="" />
            </FormGroup>

            <Button type="submit" className="btn btn-primary btn-custom"><Link style={linkStyling} to="/list">Submit</Link></Button>
        </Form>
      </div>

    </div>
  );
};

export default NewKeg;