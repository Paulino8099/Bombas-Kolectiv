// estilos
import estilos from '../../scss/secciones/secciones.module.scss';

// componentes
import { SeccionInicio } from './seccion-inicio';
import { SeccionNosotros } from './seccion-nosotros';
import { SeccionBomba } from './seccion-bomba';
import { SeccionContacto } from './seccion-contacto';
import { Footer } from 'components/footer/footer';

export const Secciones = () => {
	return (
		<div className={estilos.secciones}>
			<SeccionInicio />
			<SeccionNosotros />
			<SeccionBomba />
			<SeccionContacto />
			<Footer />
		</div>
	);
};
