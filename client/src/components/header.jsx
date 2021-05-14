import React from 'react';
import { sideBar } from '../utils/utils';

const Header = () => {
	return (
		<header className='header'>
			<div className='header-hamburger' onClick={() => sideBar(true)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 64 64'
					width='64px'
					height='64px'>
					<linearGradient
						id='BTq72ScaTZ1UBmT8omo2pa'
						x1='32'
						x2='32'
						y1='5.333'
						y2='59.867'
						gradientUnits='userSpaceOnUse'
						spreadMethod='reflect'>
						<stop offset='0' stop-color='#1a6dff' />
						<stop offset='1' stop-color='#c822ff' />
					</linearGradient>
					<path
						fill='url(#BTq72ScaTZ1UBmT8omo2pa)'
						d='M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z'
					/>
					<linearGradient
						id='BTq72ScaTZ1UBmT8omo2pb'
						x1='32'
						x2='32'
						y1='5.333'
						y2='59.867'
						gradientUnits='userSpaceOnUse'
						spreadMethod='reflect'>
						<stop offset='0' stop-color='#1a6dff' />
						<stop offset='1' stop-color='#c822ff' />
					</linearGradient>
					<path
						fill='url(#BTq72ScaTZ1UBmT8omo2pb)'
						d='M32,52c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S43.028,52,32,52z M32,14 c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S41.925,14,32,14z'
					/>
					<linearGradient
						id='BTq72ScaTZ1UBmT8omo2pc'
						x1='32'
						x2='32'
						y1='21.5'
						y2='26.336'
						gradientUnits='userSpaceOnUse'
						spreadMethod='reflect'>
						<stop offset='0' stop-color='#6dc7ff' />
						<stop offset='1' stop-color='#e6abff' />
					</linearGradient>
					<path
						fill='url(#BTq72ScaTZ1UBmT8omo2pc)'
						d='M42,25c0,0.552-0.448,1-1,1H23c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h18 c0.552,0,1,0.448,1,1V25z'
					/>
					<linearGradient
						id='BTq72ScaTZ1UBmT8omo2pd'
						x1='32'
						x2='32'
						y1='29.333'
						y2='34.5'
						gradientUnits='userSpaceOnUse'
						spreadMethod='reflect'>
						<stop offset='0' stop-color='#6dc7ff' />
						<stop offset='1' stop-color='#e6abff' />
					</linearGradient>
					<path
						fill='url(#BTq72ScaTZ1UBmT8omo2pd)'
						d='M42,33c0,0.552-0.448,1-1,1H23c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h18 c0.552,0,1,0.448,1,1V33z'
					/>
					<linearGradient
						id='BTq72ScaTZ1UBmT8omo2pe'
						x1='32'
						x2='32'
						y1='37'
						y2='41.337'
						gradientUnits='userSpaceOnUse'
						spreadMethod='reflect'>
						<stop offset='0' stop-color='#6dc7ff' />
						<stop offset='1' stop-color='#e6abff' />
					</linearGradient>
					<path
						fill='url(#BTq72ScaTZ1UBmT8omo2pe)'
						d='M42,41c0,0.552-0.448,1-1,1H23c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h18 c0.552,0,1,0.448,1,1V41z'
					/>
				</svg>
			</div>
		</header>
	);
};

export default Header;
