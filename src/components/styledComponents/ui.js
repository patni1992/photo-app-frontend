import styled from 'styled-components';
import img from '../../img/background-img.jpg';

export const Container = styled.div`
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	@media (min-width: 768px) {
		width: 750px;
	}
	@media (min-width: 992px) {
		width: 970px;
	}
	@media (min-width: 1200px) {
		width: 1170px;
	}
`;

export const FullPageImg = styled.div`
	background-image: url(${img});
	height: 95vh;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const Content = styled.div`min-height: calc(100vh - 45px);`;
