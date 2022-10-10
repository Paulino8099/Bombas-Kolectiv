//react
import React from 'react';
import ReactDOM from 'react-dom';

// componentes
import { App } from './components/app/app';

import './scss/index.module.scss';
//react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//? <---------------------------------------------------------------------------->
//* <---------------------------------------------------------------------------->
//? <---------------------------------------------------------------------------->

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				{/* <Route path="detallesUnidad" element={} />
				<Route path="*" element={} /> */}
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById('cuerpo')
);
