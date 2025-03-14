import { useContext } from 'react';
import LoadingContext from '../contexts/LoadingContext';
import styled from 'styled-components';

function Spinner(): JSX.Element {
	const { isLoading } = useContext(LoadingContext);

	return isLoading() ? <StyledLoading /> : <></>;
}

const StyledLoading = styled.div`
	position: fixed;
	z-index: 999;
	overflow: show;
	margin: auto;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 50px;
	height: 50px;
	:before {
		content: '';
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.5);
	}

	/* :not(:required) hides these rules from IE9 and below */

	:not(:required) {
		/* hide "loading..." text */
		font: 0/0 a;
		color: transparent;
		text-shadow: none;
		background-color: transparent;
		border: 0;
	}

	:not(:required):after {
		content: '';
		display: block;
		font-size: 10px;
		width: 50px;
		height: 50px;
		margin-top: -0.5em;
		border: 15px solid rgba(33, 150, 243, 1);
		border-radius: 100%;
		border-bottom-color: transparent;
		-webkit-animation: spinner 1s linear 0s infinite;
		animation: spinner 1s linear 0s infinite;
	}

	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default Spinner;
