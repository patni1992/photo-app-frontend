import styled from 'styled-components';
import { zoom } from './animation';

export const Form = styled.form`
	position: relative;
	float: left;
	width: 100%;
	height: auto;
	margin: 0 auto;
	text-align: center;
	animation-name: ${zoom};
	animation-duration: 1.1s;
`;

export const FormGroup = styled.div`
	max-width: 400px;
	margin: 15px auto;
	& input {
		height: 45px;
		outline: none;
		border: 1px solid #ddd;
		padding: 0 10px;
		border-radius: 2px;
		color: #333;
		font-size: 0.8rem;
		transition: all 0.1s linear;
		width: 100%
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
	top: 100px;
	margin: 0 auto;
	text-align: center;
	background:rgba(255,255,255, 0.9);
	width: 40%
	padding: 20px 10px 60px 10px;
	border-radius: 3px;
`;

export const FormHeader = styled.div`
	position: relative;
	color: #00415d;
	margin: 5px 5px 10px 5px;
	padding-bottom: 40px;
	border-bottom: 2px solid #c1bfbf;
	text-align: center;
	height: 28px;
`;

export const InputError = styled.p`color: #d9534f;`;
