document.querySelector('#moreSettings').addEventListener('click' , openSettings);

function openSettings(){
	document.querySelector('.settings').classList.toggle('deployed');
}



var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

// Код был нагло cgbp;ty





document.querySelector('.date').addEventListener('click' , dateDeployedFunc);

function dateDeployedFunc(){
	document.querySelector('.setDate').classList.toggle('active');
}

function setDataFunc(event){
	document.querySelector('.dateSettings').innerHTML = event;
}

document.querySelector('.downarrowcont').addEventListener('click' , deployedPeople);

function deployedPeople(){
	document.querySelector('.peoplesFromTo').classList.toggle('activeDeployed');
	document.querySelector('.downArrow').classList.toggle('becomeTop');
}

document.querySelector('.plusForOld').addEventListener('click' , plusOld);
document.querySelector('.minusForOld').addEventListener('click' , minusOld);
document.querySelector('.plusForNew').addEventListener('click' , plusNew);
document.querySelector('.minusForNew').addEventListener('click' , minusNew);

var oldH = 0;
var newH = 0;

function plusOld(){
	oldH++;
	document.querySelector('#oldOutPut').innerHTML = oldH;
}

function minusOld(){
	if (oldH <= 0) {
		return
	}
	oldH--;
	document.querySelector('#oldOutPut').innerHTML = oldH;
}

function plusNew(){
	newH++;
	document.querySelector('#newOutPut').innerHTML = newH;
}

function minusNew(){
	if (newH <= 0) {
		return
	}
	newH--;
	document.querySelector('#newOutPut').innerHTML = newH;
}





var z = document.querySelector('.sliderOfTheComents');

var x = document.querySelector('.comment');

document.querySelector('.goForLeftBlin').addEventListener('click' , goForLeft);
let marginLeft = 0

function goForLeft(){
	if (marginLeft <= 0) {
		return;
	}
	marginLeft = marginLeft - x.offsetWidth;
	document.querySelector('.sliderOfTheComents').style = `margin-left: -${marginLeft}px;`;
}

document.querySelector('.goForRightBlin').addEventListener('click' , goForRight);

function goForRight(){
	if (marginLeft >= ((z.childElementCount - 3) * x.offsetWidth)) {
		return;
	}
	marginLeft = marginLeft + x.offsetWidth
	document.querySelector('.sliderOfTheComents').style = `margin-left: -${marginLeft}px;`;
}

document.querySelector('.burgerMenuContent').addEventListener('click' , openMenu);

function openMenu(){
	document.querySelector('.firstSpanMenu').classList.toggle('active');
	document.querySelector('.secondSpanMenu').classList.toggle('active');
	document.querySelector('.thirdSpanMenu').classList.toggle('active');
	document.querySelector('.mainContentInMobileNav').classList.toggle('active');
}

document.querySelector('.bluePlaceHolder').addEventListener('click' , deployedMenu);

function deployedMenu(){
	document.querySelector('.navigation').classList.toggle('active');
	document.querySelector('.contact').classList.toggle('active');
}