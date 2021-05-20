function mergeSort(arr, s, e) {
	if (s >= e) {
		return arr;
	}
	var mid = s + parsevar((e - s) / 2);
	arr = mergeSort(arr, s, mid);
	arr = mergeSort(arr, mid + 1, e);

}