async function InsertionSort() {
    let bars = document.querySelectorAll('.bar');

    bars[0].style.background = 'green';
    console.log(bars.length);
    for (var i = 1; i < bars.length; i++) {
        let key = bars[i].style.height;
        var j = i - 1;
        bars[i].style.background = 'blue';
        await waitforme(delay);
        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {

            bars[j + 1].style.height = bars[j].style.height;

            bars[j].style.background = 'blue';

            j--;
            await waitforme(delay);
            for (let k = i; k >= 0; k--) {
                bars[k].style.background = 'green';
            }
        }
        bars[j + 1].style.height = key;
    }
}

const insertion = document.querySelector('.InsertionS');


insertion.addEventListener('click', async function () {
    // instruction.innerHTML = "<p>HE</p>";
    // instructionSS.innerHTML = " <h5><span class='col1'>BLUE</span>-INSERTS AND COMPARE THE ELEMENTS &nbsp;&nbsp;&nbsp; <span class='col2'>GREEN</span>-ELEMENT IS SORTED</h5>";
    document.querySelector('.Instruction').innerHTML = " <h5><span class='col1'>BLUE</span>-INSERTS AND COMPARE THE ELEMENTS &nbsp;&nbsp;&nbsp; <span class='col2'>GREEN</span>-ELEMENT IS SORTED</h5>";
    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeslider();

    await InsertionSort();
    enableSortingBtn();
    enableSizeslider();
    enableNewArrayBtn();

});