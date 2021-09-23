async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'lime';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = 'DeepPink';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].style.background = 'DeepPink';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'lime';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'lime';
    }
}

const inSortbtn = document.getElementById("insertionsort").addEventListener('click', async function(){
    disableSortingBtn();
    disableNewArrayBtn();
    let h1 = document.createElement("h1");
    h1.id = "curr";
    h1.innerText = "Currently Running - InsertionSort";
    document.body.appendChild(h1);
    await insertion();
    document.getElementById("curr").remove();
    enableSortingBtn();
    enableNewArrayBtn();
});

