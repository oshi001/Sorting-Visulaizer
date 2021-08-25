async function makefunctionStop() {
    console.log('hello');
}

async function SelectionSort() {
    let bars = document.querySelectorAll('.bar');
    for (var i = 0; i < bars.length; i++) {

        let min_idx = i;

        await waitforme(delay);

        for (var j = i + 1; j < bars.length; j++) {

            bars[j].style.background = 'red';
            if (stats == 1) await pauser();
            await waitforme(delay);

            if (parseInt(bars[j].style.height) < parseInt(bars[min_idx].style.height)) {
                for (var k = i + 1; k < j; k++)bars[k].style.background = 'cyan';
                bars[j].style.background = 'red';
                if (stats == 1) await pauser();
                min_idx = j;
            }
            else bars[j].style.background = 'cyan';

        }

        for (var k = i + 1; k < bars.length; k++) {
            bars[k].style.background = 'cyan';
            if (stats == 1) await pauser();
        }

        swap(bars[i], bars[min_idx]);
        bars[i].style.background = 'green';
        if (stats == 1) await pauser();
    }
}


const selection = document.querySelector('.SelectionS');
// let instrSuction = document.querySelector('.Instruction');
selection.addEventListener('click', async function () {
    document.querySelector('.Instruction').innerHTML = " <h5><span class='col3'>RED</span>-FINDS THE MIN ELEMENT &nbsp;&nbsp;&nbsp; <span class='col2'>GREEN</span>-INSERTED AT THE BEGINNING</h5>";
    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeslider();

    //enable pause button
    document.getElementById("pa")
        .removeAttribute("disabled");

    await SelectionSort();
    enableSortingBtn();
    enableSizeslider();
    enableNewArrayBtn();

});