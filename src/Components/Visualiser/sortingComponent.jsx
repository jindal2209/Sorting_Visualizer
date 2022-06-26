import React, { useState, useEffect } from 'react';
import './sortingComponent.css';

import { changeDelay, delay, PRIMARY_COLOR, randomNumberFrom } from '../Uitlities/utils';

// algos
import { bubbleSort } from '../Algorithm/bubbleSort';
import { selectionSort } from '../Algorithm/selectionSort';
import { insertionSort } from '../Algorithm/insertionSort';
import { quickSort } from '../Algorithm/quickSort';
import { mergeSort } from '../Algorithm/mergeSort';

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
		resetArr();
	}, [])


	function setArrSizeHelper(val) {
		console.log(val);
		if (val > 100) {
			setWid(2)
		}
		else if (val > 80) {
			setWid(5);
		}
		else if (val > 70) {
			setWid(7);
		}
		else if (val > 60) {
			setWid(10);
		}
		else if (val > 50) {
			setWid(15);
		}
		else if (val > 40) {
			setWid(19);
		}
		else if (val > 30) {
			setWid(25);
		}
		else if (val > 20) {
			setWid(33);
		}
		else if (val > 10) {
			setWid(40);
		}
		else {
			setWid(60);
		}

		setArrSize(val);
		resetArr();
	}

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
				<label className='sliderLabel'>
					Delay
					<br />
					<input type='range' min='5' max='200' onChange={(e) => { changeDelay(e.target.value) }} />
				</label>
				<br />
				<br />
				<div><button className='btn' onClick={resetArr}>Generate array</button></div>
				<div><button className='btn' id='msort' onClick={mergeSort}>mergeSort Sort</button></div>
				<div><button className='btn' id='qsort' onClick={quickSort}>Quick Sort</button></div>
				<div><button className='btn' id='bsort' onClick={bubbleSort}>Bubble Sort</button></div>
				<div><button className='btn' id='ssort' onClick={selectionSort}>Selection Sort</button></div>
				<div><button className='btn' id='isort' onClick={insertionSort}>Insertion Sort</button></div>
				<div>
					<br />
					<a href="https://github.com/jindal2209/Sorting_Visualizer/fork" target='_blank' rel='noreferrer' >
						<img style={{ width: '90px' }} src={process.env.PUBLIC_URL + "/iff.png"} alt='myGithub' />
					</a>
				</div>
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