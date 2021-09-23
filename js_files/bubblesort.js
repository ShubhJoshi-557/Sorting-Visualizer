async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = '#ff4181';
            ele[j+1].style.background = '#ff4181';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = '#00ff00';
    }
    ele[0].style.background = '#00ff00';
}

document.getElementById("bubblesort").addEventListener('click', async function(){
    disableSortingBtn();
    disableNewArrayBtn();
    let h1 = document.createElement("h1");
    h1.id = "curr";
    h1.innerText = "Currently Running - BubbleSort";
    document.body.appendChild(h1);
    await bubble();
    document.getElementById("curr").remove();
    enableSortingBtn();
    enableNewArrayBtn();
});