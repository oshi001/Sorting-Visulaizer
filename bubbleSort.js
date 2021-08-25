async function BubbleSort() {

    const ele = document.querySelectorAll(".bar");
    console.log(ele.length);
    for (var i = 0; i < ele.length - 1; i += 1) {
        for (var j = 0; j < ele.length - i - 1; j++) {
            //select two bars
            ele[j].style.background = 'blue';
            ele[j + 1].style.background = 'blue';






            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            if (stats == 1) await pauser();
            //giving back there original color
            ele[j].style.background = 'cyan';
            ele[j + 1].style.background = 'cyan';
            // await waitforme(100);

        }

        ele[ele.length - i - 1].style.background = 'green';
        // await waitforme(100);
        if (stats == 1) await pauser();
    }
    ele[0].style.background = 'green';

}
// async function(){
//     await BubbleSort();
// }
// BubbleSort()
const bubble = document.querySelector('.BubbleS');
// let instruction = document.querySelector('.Instruction');
bubble.addEventListener('click', async function () {
    // console.log("hello");
    document.querySelector('.Instruction').innerHTML = " <h5><span class='col1'>BLUE</span>-COMPARING TWO ELEMENTS &nbsp;&nbsp;&nbsp; <span class='col2'>GREEN</span>-ELEMENT IS SORTED</h5>";
    // instruction.textContent = "COMPARING TWO ELEMENTS";
    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeslider();

    //enable pause button
    document.getElementById("pa")
        .removeAttribute("disabled");

    await BubbleSort();
    enableSortingBtn();
    enableSizeslider();
    enableNewArrayBtn();

});

