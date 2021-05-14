import React from 'react';
import {
	Cancel,
	Settings,
	Person,
	Assignment,
	AddCircle,
} from '@material-ui/icons';
import { sideBar } from '../utils/utils';

const SideBar = () => {
	return (
		<div className='side-bar'>
			<button className='side-bar-close' onClick={() => sideBar(false)}>
				<Cancel fontSize='large' color='inherit' />
			</button>
			<ul className='side-bar-ul'>
				<li className='side-bar-ul-li' onClick={() => sideBar(false)}>
					<AddCircle fontSize='inherit' color='inherit' />
					&nbsp; Add Task
				</li>
				<li className='side-bar-ul-li' onClick={() => sideBar(false)}>
					<Assignment fontSize='inherit' color='inherit' />
					&nbsp; All Tasks
				</li>
				<li className='side-bar-ul-li' onClick={() => sideBar(false)}>
					<Person fontSize='inherit' color='inherit' />
					&nbsp; Account
				</li>
				<li className='side-bar-ul-li' onClick={() => sideBar(false)}>
					<Settings fontSize='inherit' color='inherit' />
					&nbsp; Setting
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
