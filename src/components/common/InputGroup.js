import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  outline: none;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 2px;
  color: #333;
  margin: 0;
  font-size: 0.8rem;
  transition: all 0.1s linear;
  width: 100%
      &:focus {
    border-color: #358efb;
`;

const Inputdescription = styled.small`
  color: #6c757d;
  margin-top: 10px;
  font-size: 12px;
  display: block;
`;

const InputError = styled.p`
  color: #d9534f;
`;

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  info,
  onChange
}) => {
  return (
    <div>
      <Input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <Inputdescription>{info}</Inputdescription>}
      {error && <InputError>{error}</InputError>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
