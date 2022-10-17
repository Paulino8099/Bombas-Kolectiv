// react
import React, { useState } from 'react';

// estilos
import estilos from '../../scss/menu-navegacion/menu-navegacion.module.scss';

// componentes
import { Logo } from './logo';
import { BtnAbrirCerrar } from './btnAbrirCerrar';
import { Opciones } from './opciones';

export const MenuNavegacion = () => {
	const [ condicional, ECondicional ] = useState(true);
	return (
		<nav className={estilos.menuNavegacion}>
			<Logo />
			<BtnAbrirCerrar
				click={() => {
					ECondicional((condicional) => !condicional);
				}}
			/>
			<Opciones condicional={condicional} />
		</nav>
	);
};
