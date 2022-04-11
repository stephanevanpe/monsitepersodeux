import React, { Component } from 'react';
import {Navigate, Route, BrowserRouter,Routes } from 'react-router-dom';


import Home from '../pages/Home';
import Introduction from '../pages/Introduction';
import Realisations from '../pages/Realisations';
import Error from '../pages/404';

class Router extends Component {


	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/introduction' element={<Introduction />} />
					<Route path='/realisations' element={<Realisations />} />
					<Route path='/404' element={<Error />} />
					<Route path='*' element={<Navigate to='/404' replace />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default Router;
