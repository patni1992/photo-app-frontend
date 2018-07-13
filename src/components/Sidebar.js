import styled, { css } from "styled-components";
import Link from "./common/Link";

const SidebarStyling = styled.div`
  z-index: 200;
  height: 100vh;
  width: 70%;
  max-width: 400px;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-100%);
  transition: transform 0.3s ease-out;
  color: white;
  ${props =>
    props.active &&
    css`
      transform: translate(0);
    `};
  background-color: #333;
`;

const Nav = styled.nav`
  & ul li {
    position: relative;
    left: -20px; /*This was not needed in my IDE*/
    list-style: none;
    height: 30px;
    border: solid gray;
    border-width: 0px 0px 1px 0px;
    font-size: 18px;
    padding: 40px;
    line-height: 10px;
  }
`;

const Sidebar = props => {
  return (
    <SidebarStyling {...props}>
      {" "}
      <Nav className="side-drawer">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
        </ul>
      </Nav>
    </SidebarStyling>
  );
};

export default Sidebar;
