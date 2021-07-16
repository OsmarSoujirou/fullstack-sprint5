import styled from 'styled-components';

// URL Imagem
import ImgLogoP from '../../assets/rchlo.svg';
import ImgLogoG from '../../assets/riachuelo.svg';
import ImgLupa from '../../assets/search.svg';
import ImgSeta from '../../assets/filter.svg';
import ImgAndroid from '../../assets/google-play.webp';
import ImgIOS from '../../assets/app-store.webp';
import ImgAttend from '../../assets/ico-attendance.svg';
import ImgFaq from '../../assets/ico-faq.svg';
import ImgInvoice from '../../assets/ico-invoice-and-statement.svg';
import ImgWork from '../../assets/ico-work-with-us.svg';
import ImgMenuOpen from '../../assets/menu.svg';
import ImgMenuClose from '../../assets/close.svg';

import ImgPay1 from '../../assets/ico-cartao-rchlo1.webp';
import ImgPay2 from '../../assets/ico-cartao-rchlo2.webp';
import ImgPay3 from '../../assets/ico-cartao-rchlo3.webp';
import ImgPay4 from '../../assets/ico-cartao-visa.png';
import ImgPay5 from '../../assets/ico-cartao-master.webp';
import ImgPay6 from '../../assets/ico-cartao-amex.webp';
import ImgPay7 from '../../assets/ico-cartao-diners.png';
import ImgPay8 from '../../assets/ico-cartao-elo.png';
import ImgPay9 from '../../assets/ico-boleto.webp';
import ImgPay10 from '../../assets/ico-paypal.png';

import ImgSocial1 from '../../assets/ico-facebook.svg';
import ImgSocial2 from '../../assets/ico-instagram.svg';
import ImgSocial3 from '../../assets/ico-instagram.svg';
import ImgSocial4 from '../../assets/ico-pinterest.svg';
import ImgSocial5 from '../../assets/ico-twitter.svg';
import ImgSocial6 from '../../assets/ico-youtube.svg';
import ImgSocial7 from '../../assets/ico-linkedin.svg';

import ImgAcess from '../../assets/ico-a11y.webp';
import ImgSelo from '../../assets/ra1000.webp';

// Styled's
const LogoRiachuelo = styled.img`
  height: 25px;
  transform: translateY(10px);
`;

const IconMenu = styled.img``;

const SetaFilter = styled.img`
  height: 20px;
  margin-left: 8px;
`;

const AppImg = styled.img`
  width: 110px;
  margin-left: 8px;
`;

const IconFoot = styled.img`
  display: block;
  margin: auto;
  width: 25px;
`;

const IconPayment = styled.img`
  margin: 2px;
  width: auto;
`;
const IconSocial = styled.img`
  display: block;
  margin: auto;
`;
const IconLupa = styled.img`
  width: 24px;
  opacity: 26%;
  top: 8px;
  position: absolute;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.26);
  line-height: 40px;
`;
// Função exporta imagem
export const ImgBase = (filter) => {
  const Images = {
    LogoRiachuelo: <LogoRiachuelo src={ImgLogoG} alt="Logo" />,
    LogoRchlo: <LogoRiachuelo src={ImgLogoP} alt="Logo" />,
    IconLupa: <IconLupa src={ImgLupa} alt="lupa" />,
    SetaFiltro: <SetaFilter src={ImgSeta} alt="" />,
    AppAndroid: <AppImg src={ImgAndroid} alt="Google Play" />,
    AppIOS: <AppImg src={ImgIOS} alt="App Store" />,
    IconAtend: <IconFoot src={ImgAttend} alt="Atendimento" />,
    IconFaq: <IconFoot src={ImgFaq} alt="Perguntas Frequentes" />,
    IconInvoice: <IconFoot src={ImgInvoice} alt="Fatura e Extrato" />,
    IconWork: <IconFoot src={ImgWork} alt="Trabalhe Conosco" />,
    IconMenuOpen: <IconMenu src={ImgMenuOpen} alt="menu" />,
    IconMenuClose: <IconMenu src={ImgMenuClose} alt="fechar menu" />,

    IconPay1: <IconPayment src={ImgPay1} alt="" />,
    IconPay2: <IconPayment src={ImgPay2} alt="" />,
    IconPay3: <IconPayment src={ImgPay3} alt="" />,
    IconPay4: <IconPayment src={ImgPay4} alt="" />,
    IconPay5: <IconPayment src={ImgPay5} alt="" />,
    IconPay6: <IconPayment src={ImgPay6} alt="" />,
    IconPay7: <IconPayment src={ImgPay7} alt="" />,
    IconPay8: <IconPayment src={ImgPay8} alt="" />,
    IconPay9: <IconPayment src={ImgPay9} alt="" />,
    IconPay10: <IconPayment src={ImgPay10} alt="" />,

    IconSocial1: <IconSocial src={ImgSocial1} alt="" />,
    IconSocial2: <IconSocial src={ImgSocial2} alt="" />,
    IconSocial3: <IconSocial src={ImgSocial3} alt="" />,
    IconSocial4: <IconSocial src={ImgSocial4} alt="" />,
    IconSocial5: <IconSocial src={ImgSocial5} alt="" />,
    IconSocial6: <IconSocial src={ImgSocial6} alt="" />,
    IconSocial7: <IconSocial src={ImgSocial7} alt="" />,

    IconAcess: <IconSocial src={ImgAcess} alt="" />,
    IconSelo: <img src={ImgSelo} alt="" />,

    default: <img src="teste" alt="Outro" />,
  };

  return Images[filter] || Images.default;
};
