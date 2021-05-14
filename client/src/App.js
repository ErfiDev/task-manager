import React, { Fragment } from 'react';
import Header from './components/header';
import Layout from './components/layout';
import './styles/index.scss';

const App = () => {
	return (
		<Fragment>
			<Header />
			<Layout />
		</Fragment>
	);
};

export default App;
