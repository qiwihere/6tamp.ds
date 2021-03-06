import PropTypes from "prop-types";
import { Input, Container } from "./style";
import InputMask from "react-input-mask";
import React from "react";

const TextInput = ({ error, placeholder, onChange, name, mask, type }) => (
  <Container error={error}>
    {mask ? (
      <InputMask
        name={name}
        error={error}
        placeholder={placeholder}
        mask={mask}
        onChange={onChange}
        type={type}
      >
        {(inputProps) => <Input {...inputProps} />}
      </InputMask>
    ) : (
      <Input
        name={name}
        error={error}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
    )}
  </Container>
);

TextInput.defaultProps = {
  error: "",
  placeholder: "",
  mask: "",
  type: "text"
};

TextInput.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  mask: PropTypes.string,
  type: PropTypes.string
};

export default TextInput;
