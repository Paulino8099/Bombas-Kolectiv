// estilos
import estilos from '../../scss/menu-navegacion/btnAbrirCerrar.module.scss';

export const BtnAbrirCerrar = ({ click, condicional }) => {
	return (
		<span className={estilos.btnAbrirCerrar} onClick={click}>
			<span />
			<span />
			<span />
		</span>
	);
};
