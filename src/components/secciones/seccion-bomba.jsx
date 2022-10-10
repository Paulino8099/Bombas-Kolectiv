// estilos
import estilos from '../../scss/secciones/seccion-bomba.module.scss';

export const SeccionBomba = () => {
	return (
		<section className={estilos.seccionBomba} id="Bombas">
			<h1>Bombas</h1>
			<div className={estilos.bombas}>
				<span>
					<img src="./img/png/bomba1.png" alt="" />
					<h3>Motores WEG</h3>
				</span>
				<span>
					<img src="./img/png/bomba2.png" alt="" />
					<h3>
						Las bombas centrífugas <br /> sanitarias serie W+
					</h3>
				</span>
				<span>
					<img src="./img/png/bomba3.png" alt="" />
					<h3>
						Bomba de desplazamiento <br /> positivo
					</h3>
				</span>
				<span>
					<img src="./img/png/bomba4.png" alt="" />
					<h3>
						Bomba periférica 3/4 Hp 42m <br /> Pluvius QB 70
					</h3>
				</span>
			</div>
			<span className={estilos.bombaRojaYnegra}>
				<h3>
                    Bombas Peristáticas <br /> industriales <br />Watson Marlow
				</h3>
				<img src="./img/png/bomba-rojaYnegra.png" alt="" />
			</span>
		</section>
	);
};
