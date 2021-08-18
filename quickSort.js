//pivot-->red
//ele less than piv->>orange
//ele greater than piv->>yellow
//after this operation piv-->green

async function partition(bars, low, high) {
    var pivot = bars[high].style.height;

    //PIVOT ELEMENT -->RED
    bars[high].style.background = 'red';

    var i = low - 1;

    for (var j = low; j <= high - 1; j++) {


        //current element
        bars[j].style.background = 'blue';

        await waitforme(delay);

        if (parseInt(bars[j].style.height) < parseInt(pivot)) {

            i++;


            swap(bars[i], bars[j]);
            bars[i].style.background = 'orange';
            bars[j].style.background = 'orange';
            //pause
            await waitforme(delay);
        }
        else {
            bars[j].style.background = 'yellow';
        }
    }
    swap(bars[i + 1], bars[high]);
    await waitforme(delay);
    bars[high].style.background = 'yellow';

    return i + 1;
}


async function QuickSort(bars, low, high) {
    if (low >= high) return;
    //choosing the last element as pivot element
    //now keeping all elements smallor to pivot to left of and greater to right of it
    //pi is index of the replaced pivot element
    var pi = await partition(bars, low, high);
    await waitforme(delay);
    for (var i = 0; i < bars.length; i++) {
        if (pi == i) bars[i].style.background = 'green';
        else bars[i].style.background = 'cyan';

    }

    // u need to give await otherwise multiple function will run at atime
    await QuickSort(bars, low, pi - 1);
    await QuickSort(bars, pi + 1, high);

}

let quick = document.querySelector('.QuickS');
quick.addEventListener('click', async function () {

    document.querySelector('.Instruction').innerHTML = " <h7><span class='col4'>ORANGE</span>-ELEMENT LESS THAN PIVOT &nbsp;&nbsp;&nbsp;<span class='col5'>YELLOW</span>-ELEMENT GRTEATER THAN PIVOT &nbsp;&nbsp;&nbsp;<span class='col1'>BLUE</span>-CURRENT ELEMENT &nbsp;&nbsp;&nbsp;  <span class='col3'>RED</span>-PIVOT ELEMENT &nbsp;&nbsp;&nbsp;<span class='col2'>GREEN</span>-ARRAY IS SORTED</h7>";


    let bars = document.querySelectorAll('.bar');
    let low = 0, high = bars.length - 1;

    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeslider();

    await QuickSort(bars, low, high);
    for (let i = 0; i < bars.length; i++) {
        await waitforme(delay);
        bars[i].style.background = "green";
    }
    enableSortingBtn();
    enableSizeslider();
    enableNewArrayBtn();



});