import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
background-color: ${props => {
  if (props.kind === "danger") return props.theme.colors.red;
  if (props.kind === "success") return props.theme.colors.green;
}}
  min-width: 60px;
  width: ${props => props.block && "100%"}
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  padding: 12px;
  font-size: 14px;

  outline: none;

  }
  &:disabled {
   opacity: 0.6;
   cursor: default;
  }
`;

Button.propTypes = {
  kind: PropTypes.oneOf(["danger", "success"]),
  block: PropTypes.bool
};

Button.defaultProps = {
  kind: "default"
};

export default Button;
