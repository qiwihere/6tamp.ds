import PropTypes from "prop-types"
import {Input, Container} from "./style";
import React from "react";

const TextInput = (
    {
        error,
        placeholder,
        onChange,
        name
    }
) => <Container
    error={error}
>
    <Input
        name={name}
        error={error}
        placeholder={placeholder}
        onChange={onChange}
    />
</Container>

TextInput.defaultProps = {
    error: "",
    placeholder: ""
}

TextInput.propTypes = {
    error: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired
}

export default TextInput