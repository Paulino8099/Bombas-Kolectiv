// estilos
import estilos from '../../scss/menu-navegacion/opcion.module.scss';

export const Opcion = ({ id, nombreOpcion, icono , href}) => {
	return (
		<a className={estilos.opcion} href={href }>
			{nombreOpcion}
		</a>
	);
};
