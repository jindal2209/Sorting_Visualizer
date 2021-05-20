import React, { useState, useEffect } from 'react';
import './sortingComponent.css';
import { delay, PRIMARY_COLOR, randomNumberFrom } from '../Uitlities/utils';
import { bubbleSort } from '../Algorithm/bubbleSort';
import { selectionSort } from '../Algorithm/selectionSort';
import { insertionSort } from '../Algorithm/insertionSort';
import { quickSort } from '../Algorithm/quickSort';

function SortingComponent() {
	var [arr, setArr] = useState([]);
	var [arrSize, setArrSize] = useState(50);
	// var [wid, setWid] = useState(2);

	function resetArr() {
		var arr = []
		for (var i = 0; i < arrSize; i++) {
			arr.push(randomNumberFrom(6, 650));
		}
		setArr(arr);
		var elem = document.querySelectorAll('.element-bar');
		for (i = 0; i < elem.length; i++) {
			elem[i].style.background = PRIMARY_COLOR
		}
	}


	useEffect(() => {
		// var space = window.screen.width - 700 + 1;
		// var x = parseInt(space / 3);
		// setArrSize(x);
		// console.log(space, arrSize);
		resetArr();
	}, [])



	function setArrSizeHelper(val) {
		console.log(val);
		// var space = window.screen.width - 700 + 1;
		// var w = (space - val) / val;
		// setWid(w)
		setArrSize(val);
		// console.log(space, arrSize);
		resetArr();
	}

	function checkEqual(jssorted, mysorted) {
		for (var i = 0; i < mysorted.length; i++) {
			if (jssorted[i] !== mysorted[i]) {
				return false;
			}
		}
		return true;
	}

	function sort() {
		var jssorted = arr.slice().sort((a, b) => (a - b));
		var mys = quickSort(arr, 0, arrSize - 1);
		// console.log(checkEqual(mysorted, jssorted));
		setArr(prevarr => [...mys]);
		// resetArr()
	}

	return (
		<div>
			<div className='sideNavbar'>
				<h3>Sorting Visualiser</h3>
				<label className='sliderLabel'>
					Array Size
					<input type='range' min='15' max='90' value={arrSize} onChange={(e) => setArrSizeHelper(e.target.value)} />
				</label>
				<br />
				<div className='btn' onClick={resetArr}>Generate array</div>
				<div className='btn' onClick={bubbleSort}>Bubble Sort</div>
				<div className='btn' onClick={quickSort}>Quick Sort</div>
				<div className='btn' onClick={selectionSort}>Selection Sort</div>
				<div className='btn' onClick={insertionSort}>Insertion Sort</div>
			</div>

			<div className='array'>

				{/* <div> */}
				{arr.map((val, idx) => (
					<div
						className='element-bar'
						key={idx}
						style={{
							height: `${val}px`,
							// width: `${wid}px`,
							backgroundColor: PRIMARY_COLOR,
							WebkitTransition: `background-color ${delay}ms linear`,
							msTransition: `background-color ${delay}ms linear`,
							transition: `background-color ${delay}ms linear`,
							transition: `${delay}ms`
						}} >
					</div>
				))}

				{/* </div> */}
			</div>
		</div>
	)
}

export default SortingComponent;