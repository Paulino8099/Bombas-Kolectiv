// estilos
import estilos from '../../scss/secciones/seccion-contacto.module.scss';

export const SeccionContacto = () => {
	return (
		<section className={estilos.seccionContacto} id="Contacto">
			<h1>Contacto</h1>
			<form className={estilos.formulario} action="">
				<div className={estilos.dosInputs}>
					<span>
						<h3>Nombre:</h3>
						<input type="text" placeholder='Escriba nombre aquí.' />
					</span>
					<span>
						<h3>Email:</h3>
						<input type="email" placeholder='Escriba su email aquí.' />
					</span>
				</div>
				<span className={estilos.unInput}>
					<h3>Descripción:</h3>
					<textarea type="text" placeholder='Escriba algo aquí.'/>
                </span>
                <button>Enviar</button>
			</form>
		</section>
	);
};
