import { delay, FINAL_COLOR, MakeDelay, POSITION_FINAL_COLOR, PRIMARY_COLOR, COMPARE_COLOR, SWAP_COLOR, Swap } from "../Uitlities/utils";

export async function bubbleSort() {
	var arr = document.querySelectorAll('.element-bar');
	var n = arr.length

	for (var i = 0; i < n; i++) {
		for (let j = 0; j < n - i - 1; j++) {

			arr[j].style.background = COMPARE_COLOR;
			arr[j + 1].style.background = COMPARE_COLOR;

			if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
				await MakeDelay(delay);
				arr[j].style.background = SWAP_COLOR;
				arr[j + 1].style.background = SWAP_COLOR;
				Swap(arr[j], arr[j + 1]);
			}

			await MakeDelay(delay);
			arr[j].style.background = PRIMARY_COLOR;
			arr[j + 1].style.background = PRIMARY_COLOR;
		}
		await MakeDelay(delay);
		arr[n - 1 - i].style.background = POSITION_FINAL_COLOR;
	}

	for (i = 0; i < n; i++) {
		await MakeDelay(30)
		arr[i].style.background = FINAL_COLOR;
	}
}