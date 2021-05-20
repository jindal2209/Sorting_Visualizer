export function Swap(x, y) {
	const temp = x.style.height;
	x.style.height = y.style.height;
	y.style.height = x = temp;
}

export function MakeDelay(milisec) {
	return new Promise(resolve => {
		setTimeout(() => { resolve('') }, milisec);
	})
}

export const delay = 800;
export const PRIMARY_COLOR = 'rgb(113, 165, 255)';
export const FINAL_COLOR = 'rgb(15, 245, 70)';
export const POSITION_FINAL_COLOR = 'rgb(183, 51, 245)';
export const COMPARE_COLOR = 'blue';
export const SWAP_COLOR = 'red';
export const MIN_COLOR = 'rgb(255, 112, 31)'

export function randomNumberFrom(l, r) {
	return Math.floor(Math.random() * (l - r + 1) + r)
}

// delay kro color change kro phir swap kro swap krne pe agar bars ke color alag alag hai to color swap nhii hote