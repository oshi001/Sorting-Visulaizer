// swap the style of two elements
function swap(el1, el2) {
    var temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

//disable newarray button
function disableNewArrayBtn() {
    document.querySelector('.newArray').disabled = true;
}

//disable size slider
function disableSizeslider() {
    document.querySelector('#arraysize').disabled = true;
}


//enable size slider
function enableSizeslider() {
    document.querySelector('#arraysize').disabled = false;
}

//enable newarray button
function enableNewArrayBtn() {
    document.querySelector('.newArray').disabled = false;
}


// Disables sorting buttons 
function disableSortingBtn() {
    document.querySelector(".BubbleS").disabled = true;
    document.querySelector(".InsertionS").disabled = true;
    document.querySelector(".MergeS").disabled = true;
    document.querySelector(".QuickS").disabled = true;
    document.querySelector(".SelectionS").disabled = true;
}

// Enables sorting buttons 
function enableSortingBtn() {
    document.querySelector(".BubbleS").disabled = false;
    document.querySelector(".InsertionS").disabled = false;
    document.querySelector(".MergeS").disabled = false;
    document.querySelector(".QuickS").disabled = false;
    document.querySelector(".SelectionS").disabled = false;
}





// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
let delay = 100;

//adjusting the array size
let arraySize = document.querySelector('#arraysize');
arraySize.addEventListener('click', function () {
    //arraySize.value to get the inner value of the slider
    console.log(arraySize.value, typeof (arraySize.value));
    createNewArray(arraySize.value);
});

let simuSpeed = document.querySelector('#simu_speed');
simuSpeed.addEventListener('click', function () {
    delay = 350 - parseInt(simuSpeed.value);
});


let array = [];

function createNewArray(size) {
    deleteChild();
    array = [];
    for (var i = 0; i < size; i++) {
        var value = Math.floor(Math.random() * 220) + 1;
        array.push(value);
    }
    console.log(array);

    //to create a new array of input arraySize

    // select the div #bars element
    const bars = document.querySelector("#bars");


    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < size; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);

        bars.appendChild(bar);
    }
}

// Call to display bars right when you visit the site
createNewArray(arraySize.value);

//function to delete all the previous bars
function deleteChild() {
    const bars = document.querySelector("#bars");
    bars.innerHTML = '';
}

//function to create a newarray
let newarray = document.querySelector('.newarray');
newarray.addEventListener("click", function () {
    document.querySelector('.Instruction').innerHTML = " <p>This Visualizer will help you to understand different types of sorting!!</p>";

    createNewArray(arraySize.value);
});

