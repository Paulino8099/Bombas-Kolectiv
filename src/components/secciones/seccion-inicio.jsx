// estilos
import estilos from '../../scss/secciones/seccion-inicio.module.scss';



export const SeccionInicio = () => {
	return (
		<seccion className={estilos.seccionInicio} id={'Inicio'}>
			<h1 className={estilos.titulo}>Empresa Industrial</h1>
			<p className={estilos.parrafo}>Venta de servicios de instalación de bomba y limpieza de cisternas.</p>
			<button >Aprender Más</button>
			<span>
				<img src="./img/png/bomba-amarilla.png" alt="" />
				<img src="./img/png/base-bombaAmarilla.png" alt="" />
			</span>
		</seccion>
	);
};
