import { COMPARE_COLOR, delay, disableAllButtons, FINAL_COLOR, MakeDelay, POSITION_FINAL_COLOR, PRIMARY_COLOR, Swap, SWAP_COLOR } from "../Uitlities/utils";

var n;

function gap(g) {
	if (g <= 1) {
		return 0;
	}
	return parseInt(Math.ceil(g / 2.0));
}

async function inPlaceMerge(arr, s, e) {
	var g = gap(e - s + 1);

	for (var i = s; i <= e; i++) {
		await MakeDelay(20);
		arr[i].style.background = COMPARE_COLOR;
	}


	for (g; g > 0; g = gap(g)) {
		for (i = s; i + g <= e; i++) {
			var j = i + g;
			arr[i].style.background = COMPARE_COLOR;
			arr[j].style.background = COMPARE_COLOR;
			await MakeDelay(delay);
			if (parseInt(arr[i].style.height) > parseInt(arr[j].style.height)) {
				arr[i].style.background = SWAP_COLOR;
				arr[j].style.background = SWAP_COLOR;
				await MakeDelay(delay);
				Swap(arr[i], arr[j]);
			}
			await MakeDelay(delay);
			if (e === n && s === 0) {
				arr[i].style.background = POSITION_FINAL_COLOR;
				arr[j].style.background = POSITION_FINAL_COLOR;
			}
			else {
				arr[j].style.background = PRIMARY_COLOR;
				arr[i].style.background = PRIMARY_COLOR;
			}
		}
	}
	// await MakeDelay(delay);
	// arr[i].style.background = POSITION_FINAL_COLOR;
}

async function mergeSortHelper(arr, s, e) {
	if (s >= e) {
		return;
	}
	var mid = s + parseInt((e - s) / 2);
	await mergeSortHelper(arr, s, mid);
	await mergeSortHelper(arr, mid + 1, e);
	await inPlaceMerge(arr, s, e);
	return;
}

export async function mergeSort() {
	disableAllButtons(true);
	document.getElementById("msort").className = 'btndisabled';

	var arr = document.querySelectorAll('.element-bar');
	n = arr.length;
	await mergeSortHelper(arr, 0, n - 1);
	for (var i = 0; i < n; i++) {
		await MakeDelay(delay)
		arr[i].style.background = FINAL_COLOR;
	}
	document.getElementById("msort").className = 'btn';
	disableAllButtons(false);
}