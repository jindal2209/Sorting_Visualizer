import React, { useState, useEffect } from 'react';
import './sortingComponent.css';

import { changeDelay, delay, PRIMARY_COLOR, randomNumberFrom } from '../Uitlities/utils';

// algos
import { bubbleSort } from '../Algorithm/bubbleSort';
import { selectionSort } from '../Algorithm/selectionSort';
import { insertionSort } from '../Algorithm/insertionSort';
import { quickSort } from '../Algorithm/quickSort';

function SortingComponent() {
	var [arr, setArr] = useState([]);
	var [arrSize, setArrSize] = useState(50);
	var [wid, setWid] = useState(9);

	function resetArr() {
		var arr = []
		for (var i = 0; i < arrSize; i++) {
			arr.push(randomNumberFrom(8, 650));
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
		if (val > 100) {
			changeDelay(0)
			setWid(2)
		}
		else if (val > 80) {
			changeDelay(20);
			setWid(5);
		}
		else if (val > 70) {
			changeDelay(70);
			setWid(7);
		}
		else if (val > 60) {
			changeDelay(100);
			setWid(10);
		}
		else if (val > 50) {
			changeDelay(120);
			setWid(15);
		}
		else if (val > 40) {
			changeDelay(150);
			setWid(19);
		}
		else if (val > 30) {
			changeDelay(250);
			setWid(25);
		}
		else if (val > 20) {
			changeDelay(300);
			setWid(33);
		}
		else if (val > 10) {
			changeDelay(400)
			setWid(40);
		}
		else {
			changeDelay(500)
			setWid(60);
		}

		setArrSize(val);
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

	// function sort() {
	// 	var jssorted = arr.slice().sort((a, b) => (a - b));
	// 	// var mys = quickSort(arr, 0, arrSize - 1);
	// 	// console.log(checkEqual(mysorted, jssorted));
	// 	setArr(prevarr => [...mys]);
	// 	// resetArr()
	// }

	return (
		<div>
			<div className='sideNavbar'>
				<h3>Sorting Visualiser</h3>
				<label className='sliderLabel'>
					Array Size
					<br />
					<input id='rangeSlider' type='range' min='5' max='200' value={arrSize} onChange={(e) => setArrSizeHelper(e.target.value)} />
				</label>
				<br />
				<br />
				<div><button className='btn' onClick={resetArr}>Generate array</button></div>
				<div><button className='btn' id='qsort' onClick={quickSort}>Quick Sort</button></div>
				<div><button className='btn' id='bsort' onClick={bubbleSort}>Bubble Sort</button></div>
				<div><button className='btn' id='ssort' onClick={selectionSort}>Selection Sort</button></div>
				<div><button className='btn' id='isort' onClick={insertionSort}>Insertion Sort</button></div>
			</div>

			<div className='array'>

				{arr.map((val, idx) => (
					<div
						className='element-bar'
						key={idx}
						style={{
							height: `${val}px`,
							width: `${wid}px`,
							backgroundColor: PRIMARY_COLOR,
							WebkitTransition: `background-color ${delay}ms linear`,
							msTransition: `background-color ${delay}ms linear`,
							transition: `background-color ${delay}ms linear`,
							transition: `${delay}ms`
						}} >
					</div>
				))}

			</div>
		</div>
	)
}

export default SortingComponent;