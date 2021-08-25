
//lightgreen -> partially sorted
//orange->left array
//yellow ->right array
//green->sorted

async function Merge(bars, l, mid, r) {
    var n1 = mid - l + 1;//size of the first array
    var n2 = r - mid;//size of the second array

    var L = new Array(n1);//left sorted array
    var R = new Array(n2);//right sorted array

    //copy the array
    for (var i = 0; i < n1; i++) {
        await waitforme(delay);
        L[i] = bars[l + i].style.height;
        if (stats == 1) await pauser();
        bars[l + i].style.background = 'orange';
    }


    for (var i = 0; i < n2; i++) {
        await waitforme(delay);
        R[i] = bars[mid + 1 + i].style.height;
        if (stats == 1) await pauser();
        bars[mid + 1 + i].style.background = 'yellow';
    }

    var i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        await waitforme(delay);
        if (parseInt(L[i]) <= parseInt(R[j])) {

            bars[k].style.height = L[i];
            if (stats == 1) await pauser();
            bars[k].style.background = 'lightgreen';
            k++;

            i++;
        }
        else {

            bars[k].style.height = R[j];
            if (stats == 1) await pauser();
            bars[k].style.background = 'lightgreen';
            k++;
            j++;
        }
    }

    while (i < n1) {
        await waitforme(delay);

        bars[k].style.height = L[i++];
        if (stats == 1) await pauser();
        bars[k].style.background = 'lightgreen';
        k++;
    }
    while (j < n2) {
        await waitforme(delay);

        bars[k].style.height = R[j++];
        if (stats == 1) await pauser();
        bars[k].style.background = 'lightgreen';

        k++;
    }

    // if(r-j+1==bars.length){

    // }
}




async function MergeSort(bars, l, r) {
    console.log('i am in');
    if (l >= r) return;

    let mid = l + parseInt((r - l) / 2);
    await MergeSort(bars, l, mid);
    await MergeSort(bars, mid + 1, r);
    await Merge(bars, l, mid, r);


}



let merging = document.querySelector('.MergeS');
merging.addEventListener('click', async function () {

    document.querySelector('.Instruction').innerHTML = " <h7><span class='col4'>ORANGE</span>-OPERATION ON LEFT ARRAY &nbsp;&nbsp;&nbsp;<span class='col5'>YELLOW</span>-OPERATION ON RIGHT ARRAY &nbsp;&nbsp;&nbsp;<span class='col6'>LIGHT GREEN</span>-PARTIALLY SORTED ARRAY &nbsp;&nbsp;&nbsp; <span class='col2'>GREEN</span>-ARRAY IS SORTED</h7>";


    let bars = document.querySelectorAll('.bar');
    let l = 0, r = bars.length - 1;

    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeslider();

    //enable pause button
    document.getElementById("pa")
        .removeAttribute("disabled");

    await MergeSort(bars, l, r);
    for (var i = 0; i <= r; i++) {
        await waitforme(delay);
        bars[i].style.background = 'green';
    }
    enableSortingBtn();
    enableSizeslider();
    enableNewArrayBtn();



})
