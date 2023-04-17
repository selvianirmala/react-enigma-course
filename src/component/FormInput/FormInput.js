import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const FormInput = (props) => {
    // bisa juga langsung dimasukkan ke parameter props
    const {label, type, placeholder, value, onChange} = props

    let formProps;

    switch(type) {
        case "textarea":
            props = {as: type, value}
            break
        case "file":
            props = {type}
            break
        default:
            formProps = {type, value}
            break
    }

    return(
        <FormGroup>

            <FormLabel>{label}</FormLabel>

            <FormControl
                {...formProps}
                placeholder={placeholder}
                onChange={onChange}
                style={{marginBottom: "30px"}}
                >
            </FormControl>

        </FormGroup>

    )
}

export default FormInput
