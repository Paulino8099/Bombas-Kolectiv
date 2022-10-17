// estilos
import estilos from '../../scss/menu-navegacion/opcion.module.scss';

export const Opcion = ({ id, nombreOpcion, icono, href, condicional }) => {
	return (
		<a className={condicional ? estilos.opcion : estilos.opcion + ' ' + estilos.activar_opcion} href={href}>
			{nombreOpcion}
		</a>
	);
};
