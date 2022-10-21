// estilos
import estilos from '../../scss/footer/footer.module.scss';

// iconos
import { BsFillPeopleFill,BsEnvelopeFill, BsPinMapFill } from 'react-icons/bs';

export const Footer = () => {
	return (
		<footer className={estilos.footer}>
			<h1>Contactar</h1>
			<ul>
				<li>
					<BsFillPeopleFill /> <h4>+1 (829) 876 7637</h4>
				</li>
				<li>
				<BsEnvelopeFill/>
					<h4>dapa7928@gmail.com</h4>
				</li>
				<li>
				<BsPinMapFill/>
					<h4>
						Calle respaldo DR. Betances N.19 <br /> Ensanche Luperón D.N. República Dominicana
					</h4>
				</li>
			</ul>
			<img src="./img/png/hombre.png" alt="" />
		</footer>
	);
};
