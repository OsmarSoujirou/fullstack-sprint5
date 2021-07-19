import React from 'react';
import styled from 'styled-components';
import { ImgBase } from './UI';

const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<section className="footer__contact">
				<div className="footer__container contact">
					<p className="contact__info">Receba ofertas e novidades por e-mail</p>
					<form action="/">
						<input
							className="contact__input"
							type="email"
							placeholder="Digite aqui seu e-mail"
						/>
						<button className="contact__btn" type="submit">
							<span className="contact__btn__txt">Cadastrar</span>
						</button>
					</form>
					<p className="contact__msg-app">Baixe nosso App</p>
					<div className="apps">
						<a href="#home">{ImgBase('AppAndroid')}</a>
						<a href="#home">{ImgBase('AppIOS')}</a>
					</div>
				</div>
			</section>
			<section className="footer__links links">
				<div className="footer__container links">
					<div className="links__contacts">
						<div className="col">
							<a href="#home" className="contact-icon">
								{ImgBase('IconAtend')}
								<p className="contact-icon__text">Atendimento</p>
							</a>
							<a href="#home" className="contact-icon">
								{ImgBase('IconAtend')}
								<p className="contact-icon__text">Perguntas Frequentes</p>
							</a>
						</div>
						<div className="col">
							<a href="#home" className="contact-icon">
								{ImgBase('IconInvoice')}

								<p className="contact-icon__text">Fatura e Extrato</p>
							</a>
							<a href="#home" className="contact-icon">
								{ImgBase('IconWork')}
								<p className="contact-icon__text">Trabalhe Conosco</p>
							</a>
						</div>
					</div>
					<hr className="links__separator" />
					<ul className="links__companies company-links">
						<li className="company-links">
							<h3 className="company-links__title">Cartão Riachuelo</h3>
							<ul>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Midway Financeira
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Saiba como adquirir
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Veja sua fatura e extrato
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Buscando quitar suas dívidas?
									</a>
								</li>
							</ul>
						</li>
						<li className="company-links">
							<h3 className="company-links__title">Sobre a Riachuelo</h3>
							<ul>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										A Empresa
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Portal de Fornecedores
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Relação com Investidores
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Assessoria de Imprensa
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Trabalhe Conosco
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Programa Jovem Aprendiz
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Cadastro de Startups
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Mapa do Site
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Guide Shop
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Venda na Riachuelo Marketplace
									</a>
								</li>
							</ul>
						</li>
						<li className="company-links">
							<h3 className="company-links__title">Moda que Transforma</h3>
							<ul>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Na prática
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Entre Costuras
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Jeans Mais Transparente
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Ações Covid-19
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Free Free
									</a>
								</li>
							</ul>
						</li>
						<li className="company-links">
							<h3 className="company-links__title">Ajuda</h3>
							<ul>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Atendimento
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Perguntas Frequentes
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Trocas e Devoluções
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Portal da Privacidade
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Política de Privacidade
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Termos e Condições de Uso
									</a>
								</li>
								<li className="company-links__item">
									<a className="company-links__text" href="#home">
										Regras e Resultados de Sorteios
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</section>
			<section className="footer__payment">
				<div className="footer__container payment">
					<div className="payment__alternatives">
						<h3 className="payment__title">Formas de Pagamento</h3>
						{ImgBase('IconPay1')}
						{ImgBase('IconPay2')}
						{ImgBase('IconPay3')}
						{ImgBase('IconPay4')}
						{ImgBase('IconPay5')}
						{ImgBase('IconPay6')}
						{ImgBase('IconPay7')}
						{ImgBase('IconPay8')}
						{ImgBase('IconPay9')}
						{ImgBase('IconPay10')}
					</div>
					<div className="payment__social">
						<h3 className="payment__title">Siga a Riachuelo</h3>
						<div className="social__icons">
							<div className="social__icon icon">
								<a href="#home">{ImgBase('IconSocial1')}</a>
							</div>

							<div className="social__icon icon">
								<a href="#home">{ImgBase('IconSocial2')}</a>
								<p className="icon__text">RCHLO</p>
							</div>

							<div className="social__icon icon">
								<a href="#home">{ImgBase('IconSocial3')}</a>
								<p className="icon__text">CASA RCHLO</p>
							</div>

							<div className="social__icon icon">
								<a href="#home">{ImgBase('IconSocial4')}</a>
							</div>
							<div className="social__icon icon">
								<a href="#home">{ImgBase('IconSocial5')}</a>
							</div>
							<div className="social__icon icon">
								<a href="#home">{ImgBase('IconSocial6')}</a>
							</div>
							<div className="social__icon icon">
								<a href="#home">{ImgBase('IconSocial7')}</a>
							</div>
						</div>
					</div>
					<div className="payment__accessibility">
						<h3 className="payment__title">Acessibilidade</h3>
						{ImgBase('IconAcess')}
					</div>
				</div>
			</section>
			<section className="footer__bottom">
				<div className="footer__container bottom">
					<div className="copyright">
						<p className="copyright__text">
							© Copyright 2017 - 2019. Todos os direitos reservados. Lojas
							Riachuelo S/A. Rua Landri Sales, 1.070, G02 Anexo B, Guarulhos -
							SP - Brasil
							<br />
							CEP 07250-130 CNPJ 33.200.056/0441-97 | IE 796.420.926.112 | SAC
							4003-0515.Direção de fotografia de produtos por Adriano Adrião.
							<br />
							Pagamento com Cartão Riachuelo, parcelas mínimas de R$ 15,00. Para
							os demais cartões Visa, Mastercard, Elo, Diners, Hipercard e
							American Express, parcelas mínimas de R$ 30,00.
							<br />
							* COMPRE NO SITE e RETIRE NA LOJA com FRETE GRÁTIS, conforme lojas
							participantes. Consulte as lojas participantes nas opções de frete
							do seu pedido, conforme CEP de entrega cadastrado.
							<br />
							Frete único de R$ 4,99 para Sul e Sudeste em compras a partir de
							R$ 129,00. Demais regiões o valor estará sujeito a variações.
							Condição por tempo indeterminado, para tipo de entrega “normal”.
							<br />
							Preços, promoções, condições de pagamento, valores de frete e
							disponibilidade de estoque são aplicados somente nas compras
							efetuadas na loja online Riachuelo. Existe uma limitação de peças
							iguais no mesmo pedido que muda de acordo com o tipo de produto.
							<br />
							Em caso de divergência de valores entre a página do produto e a
							Sacola de Compras, a Riachuelo se reserva a garantir o valor
							exibido na Sacola de Compras.
						</p>
					</div>
					<div className="copyright__stamp">{ImgBase('IconSelo')}</div>
				</div>
			</section>
		</StyledFooter>
	);
};
const StyledFooter = styled.footer`
	border-top: 2px solid lightgray;
	padding-top: 40px;
	width: 100%;

	.footer__container {
		margin: 0 auto;
		width: 90%;
	}

	.footer__contact .contact {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer__contact .contact__info {
		height: 50px;
		line-height: 50px;
		text-transform: uppercase;
		font-size: 0.8125rem;
	}

	.footer__contact .contact__input {
		height: 24px;
		line-height: 24px;
		border: 0px;
		border-bottom: 1px solid rgba(38, 30, 30, 0.42);
		outline: none;
		width: 300px;
		font-size: 0.9375rem;
		font-weight: 600;
		color: #000;
	}

	.footer__contact .contact__input:hover {
		border-bottom: 2px solid #261e1e;
	}

	.footer__contact .contact__input:focus-within {
		border-bottom: 2px solid #261e1e;
	}

	.footer__contact .contact__input::placeholder {
		font-style: italic;
		opacity: 42%;
		font-weight: 600;
	}

	.footer__contact .contact__btn {
		margin-left: 20px;
		color: rgba(0, 0, 0, 0.26);
		box-shadow: none;
		background-color: rgba(0, 0, 0, 0.12);
		border-radius: 4px;
		border: none;
		padding: 10px 20px 10px 20px;
	}

	.footer__contact .contact__btn__txt {
		font-size: 0.8125rem;
		text-transform: uppercase;
	}

	.footer__contact .contact__msg-app {
		font-size: 0.9375rem;
		height: 50px;
		line-height: 50px;
		text-transform: uppercase;
	}

	.footer__links {
		background-color: #f6f6f6;
		margin-top: 40px;
	}

	.footer__links .links {
		display: flex;
	}

	.footer__links .links__contacts {
		width: 30%;
		display: flex;
	}

	.footer__links .links__contacts .col {
		flex-grow: 1;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
	}

	.footer__links .links__contacts .contact-icon {
		text-align: center;
	}

	.footer__links .links__contacts .contact-icon__text {
		padding: 8px;
		font-size: 0.8125rem;
		white-space: pre-line;
	}

	.footer__links .links__separator {
		width: 1px;
		border: none;
		background-color: rgba(0, 0, 0, 0.12);
	}

	.footer__links .links__companies {
		display: flex;
		width: 60%;
		padding: 50px;
	}

	.footer__links .links__companies .company-links {
		flex-grow: 1;
		margin-left: 8px;
		margin-right: 8px;
	}

	.footer__links .links__companies .company-links__item {
		padding-top: 8px;
	}

	.footer__links .links__companies .company-links__title {
		text-transform: uppercase;
		font-size: 0.875rem;
	}

	.footer__links .links__companies .company-links__text {
		line-height: 25px;
		font-size: 0.6875rem;
		font-weight: 400;
		color: black;
	}

	.footer__links .links__companies .company-links__text:hover {
		text-decoration: underline;
	}

	.footer__payment {
		margin-top: 25px;
		margin-bottom: 25px;
	}

	.footer__payment .payment {
		display: flex;
	}

	.footer__payment .payment__title {
		text-transform: uppercase;
		margin-bottom: 10px;
	}

	.footer__payment .payment__alternatives {
		width: 50%;
	}

	.footer__payment .payment__img {
		margin: 2px;
		width: auto;
	}

	.footer__payment .payment__social {
		flex-grow: 1;
	}

	.footer__payment .payment__social .social__icons {
		display: flex;
	}

	.footer__payment .payment__social .social__icon {
		width: 50px;
	}

	.footer__payment .payment__social .social__icon .icon__img {
		display: block;
		margin: auto;
	}

	.footer__payment .payment__social .social__icon .icon__text {
		padding-top: 4px;
		font-size: 0.6875rem;
		font-weight: 300;
		text-align: center;
	}

	.footer__payment .payment__accessibility {
		flex-grow: 1;
	}

	.footer__bottom {
		background-color: #f6f6f6;
		padding: 20px 0;
	}

	.footer__bottom .bottom {
		display: flex;
	}

	.footer__bottom .copyright {
		width: 83.333333%;
	}

	.footer__bottom .copyright__text {
		font-size: 0.5625rem;
		font-weight: 400;
		color: #261e1e;
	}

	.footer__bottom .copyright__stamp {
		margin: 0 auto;
	}
`;
export default Footer;
