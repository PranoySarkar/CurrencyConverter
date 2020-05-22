
/*
function foo(){
    let a=1;
    let b=2;
    let c=a+b;
    console.log(c);
}

foo()
foo()*/

/* let inrValue = document.querySelector('input');
console.log(inrValue.value); */

let btn = document.querySelector('button');
btn.addEventListener('click',buttonClicked);

function buttonClicked(){
    console.log('Button clicked')
}