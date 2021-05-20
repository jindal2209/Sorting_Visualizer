import { COMPARE_COLOR, FINAL_COLOR, MakeDelay, POSITION_FINAL_COLOR, PRIMARY_COLOR, SWAP_COLOR, Swap, MIN_COLOR, disableAllButtons, delay } from "../Uitlities/utils";

export async function selectionSort() {
	disableAllButtons(true);
	var arr = document.querySelectorAll('.element-bar');
	document.getElementById("ssort").className = 'btndisabled';
	var n = arr.length

	for (var i = 0; i < n; i++) {
		var min = i;

		for (var j = i + 1; j < n; j++) {
			arr[min].style.background = MIN_COLOR;

			arr[j].style.background = COMPARE_COLOR;

			if (parseInt(arr[j].style.height) < parseInt(arr[min].style.height)) {
				arr[min].style.background = PRIMARY_COLOR;
				await MakeDelay(delay)
				min = j;
			}
			else {
				await MakeDelay(delay)
				arr[j].style.background = PRIMARY_COLOR;
			}

		}

		if (min !== i) {

			arr[i].style.background = SWAP_COLOR;
			arr[min].style.background = SWAP_COLOR;

			await MakeDelay(delay);
			arr[min].style.background = PRIMARY_COLOR;
			arr[i].style.background = PRIMARY_COLOR;

			Swap(arr[min], arr[i]);
		}

		await MakeDelay(delay)
		arr[i].style.background = POSITION_FINAL_COLOR
	}

	for (i = 0; i < n; i++) {
		await MakeDelay(delay)
		arr[i].style.background = FINAL_COLOR;
	}
	document.getElementById("ssort").className = 'btn';
	disableAllButtons(false);
}
