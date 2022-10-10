// estilos
import estilos from '../../scss/menu-navegacion/opciones.module.scss';

// componentes
import { Opcion } from './opcion';

// iconos
// import { BsAbout, BsWater, BsPersonSquare  } from 'react-icons/bs';
// import { AiTwotoneHome} from 'react-icons/ai';

export const Opciones = () => {
	return (
		<ul className={estilos.opciones}>
			<Opcion id={1} nombreOpcion={'Inicio'} href="#Inicio" />
			<Opcion id={1} nombreOpcion={'Nosotros'} href="#Nosotros" />
			<Opcion id={1} nombreOpcion={'Bombas'} href="#Bombas" />
			<Opcion id={1} nombreOpcion={'Contacto'} href="#Contacto" />
		</ul>
	);
};
