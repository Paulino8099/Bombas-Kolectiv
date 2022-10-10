// estilos
import estilos from '../../scss/menu-navegacion/menu-navegacion.module.scss';

// componentes
import { Logo } from './logo';
import { Opciones } from './opciones';

export const MenuNavegacion = () => {
	return (
		<nav className={estilos.menuNavegacion}>
            <Logo />
            <Opciones/>
		</nav>
	);
};
