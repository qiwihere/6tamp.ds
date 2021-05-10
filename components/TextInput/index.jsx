import PropTypes from "prop-types"
import {Input, Container} from "./style";
import React from "react";

const TextInput = (
    {
        error,
        placeholder,
        onChange
    }
) => <Container
    error={error}
>
    <Input
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
    onChane: PropTypes.func
}

export default TextInput