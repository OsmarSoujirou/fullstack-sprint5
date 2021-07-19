import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import styled from 'styled-components';

const StyledProdutc = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	width: 85%;
	.product__image {
		width: 50%;
		display: flex;
		justify-content: center;
		border-radius: 10px;
		overflow: hidden;
	}
	.product__image img {
		width: 100%;
	}
	.product__description {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-around;
		width: 40%;
	}

	.description__title {
		font-size: 1.1rem;
		margin: 0.3rem;
	}
	.description__sizes {
		font-size: 0.8rem;
	}
	.sizes__title {
		margin: 0.3rem;
	}
	.sizes__boxes {
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
	}
	.sizes__boxes label span {
		border: 1px solid #bbb;
		height: 36px;
		display: flex;
		position: relative;
		min-width: 40px;
		align-items: center;
		border-radius: 4px;
		text-transform: uppercase;
		justify-content: center;
		margin: 0.3rem;
		font-size: 0.7rem;
	}
	.sizes__boxes input[type='radio'] {
		display: none;
	}
	.sizes__boxes input[type='radio']:checked + span {
		background-color: #000;
		color: #fff;
	}
	.sizes__boxes span:hover {
		color: #fff;
		cursor: pointer;
		background-color: #000;
	}
	.description__final {
		border-radius: 4px;
		box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
			0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
		padding: 2rem;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		font-size: 0.7rem;
	}
	.final__price {
		color: #000;
		font-weight: 800;
		font-size: 1.3rem;
		margin: 1rem;
	}
`;

const StyledBtn = styled.button`
	width: 90%;
	font-weight: 700;
	color: #fff;
	background-color: ${(props) => props.color};
	padding: 0.7rem;
	margin: 0.5em;
	border: solid 0px;
	box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
		0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
	border-radius: 4px;
	cursor: pointer;
	:hover {
		box-shadow: 0px 3px 8px 2px rgb(0 0 0 / 20%),
			0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
	}
`;
interface FaceSizes {
	sizes: string[];
	setSize: React.Dispatch<React.SetStateAction<string>>;
}
const Sizes = ({ sizes, setSize }: FaceSizes) => {
	const [x, y] = sizes;
	const newArray = [];

	for (let i = parseInt(x); i <= parseInt(y); i = i + 2) {
		newArray.push(i);
	}

	return (
		<>
			{newArray.map((s, i) => (
				<label key={i}>
					<input
						type="radio"
						onClick={(event) => setSize(event.currentTarget.value)}
						name="size"
						value={s}
					/>
					<span>{s}</span>
				</label>
			))}
		</>
	);
};

interface FaceProduct {
	name: string;
	image: string;
	price: string;
	sku: number;
}
interface FaceProps {
	products: FaceProduct[];
	msg: React.Dispatch<React.SetStateAction<string>>;
}
interface FaceProduct {
	sku: number;
	image: string;
	name: string;
	price: string;
}

const ProductView = ({ products, msg }: FaceProps) => {
	const { id } = useParams<{ id: string }>();
	const history = useHistory();
	const [size, setSize] = useState('');
	const [product] = products.filter((p) => p.sku === parseInt(id));
	const { name, image, price } = product;

	useEffect(() => {
		if (!product) {
			history.push('/404');
		} else {
			window.scrollTo(0, 0);
		}
		// eslint-disable-next-line
	}, []);
	const arrayMatch = name.match(/(\d+)| /g) as string[];
	return (
		<>
			{product && (
				<StyledProdutc>
					<div className="product__image">
						<img src={`http://localhost:3000/${image}`} alt="" />
					</div>
					<div className="product__description">
						<h1 className="description__title">{name}</h1>
						<div className="description__sizes">
							<div className="sizes__title">Selecionar um Tamanho: {size}</div>
							<div className="sizes__boxes">
								<Sizes
									sizes={arrayMatch.filter((x) => x !== ' ')}
									setSize={setSize}
								/>
							</div>
						</div>
						<div className="description__final">
							<p>Vendido e entregue por RCHLO</p>
							<div className="final__price">R$ {price}</div>
							<StyledBtn
								onClick={() => {
									if (size) {
										msg('Item adicionado a sacola!');
										history.push('/');
									} else {
										msg('Selecione um tamanho!');
									}
								}}
								color="#008844"
							>
								ADICIONAR Á SACOLA
							</StyledBtn>

							<StyledBtn onClick={() => history.push('/')} color="#f35555">
								CANCELAR
							</StyledBtn>
						</div>
					</div>
				</StyledProdutc>
			)}
		</>
	);
};

export default ProductView;
