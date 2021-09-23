let n=100
var randomArray;
document.getElementById("new_array").addEventListener("click",createArray);


function createArray(){
    randomArray = Array.from({length: n}, () => Math.floor(Math.random() * n));
    console.log(randomArray);
    deleteChild();
    for(i=0; i<n;i++) {
        var new_div = document.createElement('div');
        new_div.id = String(randomArray[i]);
        new_div.className = "bar";
        new_div.style.height = "" + String(randomArray[i]*5) + "px";
        document.getElementById('sorting_area').appendChild(new_div);
    }
}
let delay = 1;
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function swap(el1,el2)
    {
 
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);
 
 
      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");
 
      el1.style.height = transform2;
      el2.style.height = transform1;
 
    }
// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.getElementById("bubblesort").disabled = true;
    document.getElementById("insertionsort").disabled = true;
    document.getElementById("mergesort").disabled = true;
    document.getElementById("quicksort").disabled = true;
    document.getElementById("selectionsort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.getElementById("bubblesort").disabled = false;
    document.getElementById("insertionsort").disabled = false;
    document.getElementById("mergesort").disabled = false;
    document.getElementById("quicksort").disabled = false;
    document.getElementById("selectionsort").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector("#new_array").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector("#new_array").disabled = false;
}

function deleteChild() {
    const bar = document.querySelector("#sorting_area");
    bar.innerHTML = '';
}