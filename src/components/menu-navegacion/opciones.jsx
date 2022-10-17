// estilos
import estilos from '../../scss/menu-navegacion/opciones.module.scss';

// componentes
import { Opcion } from './opcion';

// iconos
// import { BsAbout, BsWater, BsPersonSquare  } from 'react-icons/bs';
// import { AiTwotoneHome} from 'react-icons/ai';

export const Opciones = ({ condicional }) => {
	return (
		<ul className={condicional ? estilos.opciones : estilos.opciones + ' ' + estilos.activar_opciones}>
			<Opcion id={1} nombreOpcion={'Inicio'} href="#Inicio" condicional={condicional} />
			<Opcion id={1} nombreOpcion={'Nosotros'} href="#Nosotros" condicional={condicional} />
			<Opcion id={1} nombreOpcion={'Bombas'} href="#Bombas" condicional={condicional} />
			<Opcion id={1} nombreOpcion={'Contacto'} href="#Contacto" condicional={condicional} />
		</ul>
	);
};
