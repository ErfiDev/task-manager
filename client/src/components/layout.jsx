import React from 'react';
import SideBar from './sideBar';
import Main from './main';

const Layout = () => {
	return (
		<div className='layout'>
			<SideBar />
			<Main />
		</div>
	);
};

export default Layout;
