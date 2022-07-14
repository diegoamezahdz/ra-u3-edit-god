import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    FormGroup,
} from "reactstrap";
const InputCrud = ({nombrel,tipo}) => {
    return (
        <FormGroup>
            <label>
                {nombrel}
            </label>
            <input
                className="form-control"
                name={nombrel}
                type={tipo}
                // onChange={this.handleChange}
            />
        </FormGroup>
    );
}

export default InputCrud