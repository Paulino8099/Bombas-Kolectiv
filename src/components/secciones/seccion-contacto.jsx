// react
import { useState } from 'react';

// estilos
import estilos from '../../scss/secciones/seccion-contacto.module.scss';

export const SeccionContacto = () => {
	const [ valor, EValor ] = useState('');

	function HandleChange(e) {
		EValor(e.target.value);
	}
	function HandleSubmit(e) {
		e.preventDefault();
	}
	return (
		<section className={estilos.seccionContacto} id="Contacto">
			<h1>Contacto</h1>
			<form className={estilos.formulario} action="">
				<span>
					<h3>Nombre:</h3>
					<input type="text" placeholder="Escriba nombre aquí." />
				</span>
				<span>
					<h3>Email:</h3>
					<input type="email" placeholder="Escriba su email aquí." />
				</span>
				<span>
					<h3>Descripción: <br /> {`...Màximo de caracteres: 500/${500 - valor.length}`}</h3>
					<textarea
						value={valor}
						maxLength={500}
						type="text"
						placeholder="Escriba algo aquí."
						onChange={HandleChange}
					/>
					{/* <div className={}></div> */}
				</span>
				<button onSubmit={HandleSubmit}>Enviar</button>
			</form>
		</section>
	);
};
