let sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let arrayRemove = (arr, value) => {
  return arr.filter(function (ele) {
    return ele != value;
  });
};

ids = [
  "horizontal-tube",
];

let flag1 = true 
let flag2 = true 

let flow3 = document.getElementById("horizontal-tube");
const xFinalPosition3 = 1;
let xPos3 = 0;
const interval3 = window.setInterval(() => {
	if(xPos3 > 0.05) {
		if(flag1){
		let flow1 = document.getElementById("first-tube");
		const xFinalPosition1 = 1;
		let xPos1 = 0;
		const interval1 = window.setInterval(() => {
			if(xPos1 > xFinalPosition1) {
				return window.clearInterval(interval1);
			}
			xPos1 += 0.001;
		  	flow1.setAttribute("offset", xPos1);
		})	
		}
		flag1 = false
	}
	if(xPos3 > 0.55) {
		if(flag2){
			let flow2 = document.getElementById("second-tube");
		const xFinalPosition2 = 1;
		let xPos2 = 0;
		const interval2 = window.setInterval(() => {
			if(xPos2 > xFinalPosition2) {
				return window.clearInterval(interval2);
			}
			xPos2 += 0.001;
		  	flow2.setAttribute("offset", xPos2);
		})	
		}		
		flag2 = false
	}
	if(xPos3 > xFinalPosition3) {

		return window.clearInterval(interval3);
	}
	xPos3 += 0.001;
  	flow3.setAttribute("offset", xPos3);
})