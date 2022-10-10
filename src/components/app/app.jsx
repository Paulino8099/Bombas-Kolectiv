import { Fragment } from 'react';

// componentes
import { MenuNavegacion } from 'components/menu-navegacion/menu-navegacion';
import { Secciones } from 'components/secciones/secciones';

export const App = () => {
	return (
		<Fragment>
			<MenuNavegacion />
			<Secciones />
		</Fragment>
	);
};
