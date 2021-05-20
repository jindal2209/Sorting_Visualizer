import { FINAL_COLOR, MakeDelay, POSITION_FINAL_COLOR, PRIMARY_COLOR, COMPARE_COLOR, SWAP_COLOR, Swap, randomNumberFrom, MIN_COLOR, disableAllButtons, delay } from "../Uitlities/utils";

async function partition(ele, s, e) {
	var n = randomNumberFrom(s, e);
	Swap(ele[n], ele[e]);

	await MakeDelay(delay);
	ele[e].style.background = MIN_COLOR;   // current pivot color 

	var m = s;
	var pivot = e;

	for (var i = s; i < e; i++) {
		ele[i].style.background = COMPARE_COLOR;
		if (parseInt(ele[i].style.height) < parseInt(ele[pivot].style.height)) {

			ele[m].style.background = COMPARE_COLOR;
			await MakeDelay(delay);

			Swap(ele[i], ele[m]);

			await MakeDelay(delay);
			ele[i].style.background = SWAP_COLOR;
			ele[m].style.background = SWAP_COLOR;
			if (m !== s) {
				ele[m - 1].style.background = PRIMARY_COLOR
			}

			m += 1;
		}
		await MakeDelay(delay);
		ele[i].style.background = PRIMARY_COLOR;
		ele[m].style.background = PRIMARY_COLOR;
	}

	ele[e].style.background = PRIMARY_COLOR;    // pivot to orginal color
	await MakeDelay(delay);
	Swap(ele[m], ele[pivot]);
	await MakeDelay(delay);
	ele[m].style.background = POSITION_FINAL_COLOR;

	return m;
}

async function quickSortHelper(ele, s, e) {
	if (s >= e) {
		if (s === e) {
			ele[s].style.background = POSITION_FINAL_COLOR;
		}
		return;
	}
	var p = await partition(ele, s, e);
	await quickSortHelper(ele, s, p - 1);
	await quickSortHelper(ele, p + 1, e);
	return;
}
export async function quickSort() {
	disableAllButtons(true);
	document.getElementById("qsort").className = 'btndisabled';

	var arr = document.querySelectorAll('.element-bar');
	var n = arr.length;
	await quickSortHelper(arr, 0, n - 1);
	for (var i = 0; i < n; i++) {
		await MakeDelay(delay)
		arr[i].style.background = FINAL_COLOR;
	}
	document.getElementById("qsort").className = 'btn';
	disableAllButtons(false);
}