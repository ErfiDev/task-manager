export function sideBar(tf) {
	const elm = document.querySelector('.side-bar');
	if (tf) {
		return (elm.style.left = 0);
	} else {
		elm.style.left = '-100%';
	}
}
