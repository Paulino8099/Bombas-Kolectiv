// estilos
import estilos from '../../scss/footer/footer.module.scss'

export const Footer = () => {
	return (
		<footer className={estilos.footer}>
			<h1>Contactar</h1>
			<ul>
				<li>+1 (829) 876 7637</li>
				<li>dapa7928@gmail.com</li>
				<li>
					Calle respaldo DR. Betances N.19 <br /> Ensanche Luperón D.N. República Dominicana
				</li>
            </ul>
            <img src="./img/png/hombre.png" alt="" />
		</footer>
	);
};
