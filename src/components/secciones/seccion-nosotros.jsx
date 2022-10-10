// estilos
import estilos from '../../scss/secciones/seccion-nosotros.module.scss';

export const SeccionNosotros = () => {
	return (
		<section className={estilos.seccionNosotros}id="Nosotros" >
			<div>
				<h1>Nosotros</h1>
				<p>Venta de servicios de instalación de bomba y limpieza de cisternas.</p>
				<ul>
					<li>Bombas Industriales</li>
					<li>Bombas de Desplazamiento Positivo</li>
					<li>Bombas Sanitarias</li>
					<li>Instrumentación</li>
				</ul>
				<p>Entre otros servicios.</p>
			</div>
			<img src="./img/png/2bombas-amarillas.png" alt="" />
		</section>
	);
};
