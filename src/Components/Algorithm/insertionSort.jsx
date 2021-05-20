import { COMPARE_COLOR, FINAL_COLOR, MakeDelay, SWAP_COLOR, MIN_COLOR, Swap, POSITION_FINAL_COLOR, disableAllButtons, delay } from "../Uitlities/utils";

export async function insertionSort() {
	disableAllButtons(true);
	var arr = document.querySelectorAll('.element-bar');
	document.getElementById("isort").className = 'btndisabled';

	var n = arr.length

	for (var i = 0; i < n; i++) {
		for (var j = i; j >= 1; j--) {
			arr[i].style.background = MIN_COLOR;

			arr[j].style.background = COMPARE_COLOR;
			arr[j - 1].style.background = COMPARE_COLOR;

			await MakeDelay(delay);

			if (parseInt(arr[j].style.height) < parseInt(arr[j - 1].style.height)) {
				arr[j].style.background = SWAP_COLOR;
				arr[j - 1].style.background = SWAP_COLOR;
				await MakeDelay(delay);
				Swap(arr[j - 1], arr[j]);
			}
			else {
				await MakeDelay(delay);
				arr[j].style.background = POSITION_FINAL_COLOR;
				arr[j - 1].style.background = POSITION_FINAL_COLOR;
				break;
			}

			await MakeDelay(delay);
			arr[j].style.background = POSITION_FINAL_COLOR;
			arr[j - 1].style.background = POSITION_FINAL_COLOR;
		}
	}
	for (i = 0; i < n; i++) {
		await MakeDelay(delay)
		arr[i].style.background = FINAL_COLOR;
	}
	document.getElementById("isort").className = 'btn';
	disableAllButtons(false);
}