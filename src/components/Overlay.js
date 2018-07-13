import styled from 'styled-components';
const OverLay = styled.div`
	display: ${props => (props.active ? 'block' : 'none')};
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.285);
	z-index: 100;
`;

export default OverLay;
