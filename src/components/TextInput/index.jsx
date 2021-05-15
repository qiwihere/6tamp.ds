import PropTypes from "prop-types";
import { Input, Container } from "./style";
import InputMask from "react-input-mask";
import React from "react";

const TextInput = ({ error, placeholder, onChange, name, mask }) => (
  <Container error={error}>
    {mask ? (
      <InputMask
        name={name}
        error={error}
        placeholder={placeholder}
        mask={mask}
        onChange={onChange}
      >
        {(inputProps) => <Input {...inputProps} />}
      </InputMask>
    ) : (
      <Input
        name={name}
        error={error}
        placeholder={placeholder}
        onChange={onChange}
      />
    )}
  </Container>
);

TextInput.defaultProps = {
  error: "",
  placeholder: "",
  mask: "",
};

TextInput.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  mask: PropTypes.string,
};

export default TextInput;
