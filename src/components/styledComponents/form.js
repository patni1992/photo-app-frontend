import styled from 'styled-components';
import { zoom } from './animation';

export const Form = styled.form`
	position: relative;
	float: left;
	width: 100%;
	height: auto;
	margin-top: 20px;
	text-align: center;
	animation-name: ${zoom};
	animation-duration: 1.1s;
`;

export const FormGroup = styled.div`
	width: 100%;
	margin-bottom: 20px;

	& input {
		width: calc(60% - 22px);
		height: 45px;
		outline: none;
		border: 1px solid #ddd;
		padding: 0 10px;
		border-radius: 2px;
		color: #333;
		font-size: 0.8rem;
		-webkit-transition: all 0.1s linear;
		-moz-transition: all 0.1s linear;
		transition: all 0.1s linear;

		&:focus {
			border-color: #358efb;
		}
	}
	& button {
		width: 60%;
		background-color: #1cb94e;
		border: none;
		outline: none;
		color: #fff;
		font-size: 14px;
		font-weight: normal;
		padding: 14px 0;
		border-radius: 2px;
		text-transform: uppercase;
	}
`;

export const FormContainer = styled.div`
	position: relative;
	margin: 10px auto;
	max-width: 800px;
	text-align: center;
	height: 500px;
	background-color: #fff;
	padding: 10px;
	border-radius: 3px;
	-webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.33);
	-moz-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.33);
	box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.33);
`;

export const FormHeader = styled.div`
	position: relative;
	color: #00415d;
	margin: 5px 5px 10px 5px;
	padding-bottom: 10px;
	border-bottom: 1px solid #eee;
	text-align: center;
	height: 28px;
`;
