
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


/* 
function foo(){

    let a = 'Pranoy';
    let b='Sarkar';
    let c=a+b;
    console.log(c);
}
 */

/* let amountInput = document.querySelector('input')
console.log(amountInput) */

let btn = document.querySelector('button');
btn.addEventListener('click', convert)

function convert() {
    // console.log('hello world')

    let userInput = document.querySelector('#userInput');
   

    let userSelected = document.querySelector('select');
    console.log(userSelected.value);

    let output =document.querySelector('#results');

    if (userSelected.value == 'Euro') {
        let conversionRate=.012;
        let result=userInput.value*conversionRate;
        output.innerHTML=result+' Euro';
        //alert(result+' Euro');
    }
    else if (userSelected.value == 'USD') {
        let conversionRate=.013;
        let result=userInput.value*conversionRate;
        output.innerHTML=result+' USD';
        //alert(result+' USD');

    } 
    else if (userSelected.value == 'Taka') {
        let conversionRate=1.12;
        let result=userInput.value*conversionRate;
        output.innerHTML=result+' Taka';
       // alert(result+' Taka');

    }else if(userSelected.value == 'Dinar') {
        let conversionRate=0.0041;        ;
        let result=userInput.value*conversionRate;
        output.innerHTML=result+' Euro';
        alert(result+' Dinar');
    }
    else if(userSelected.value == 'Rubel') {
        let conversionRate=0.94;        ;
        let result=userInput.value*conversionRate;
        output.innerHTML=result+' Rubel';
       // alert(result+' Rubel');
    }
    else if(userSelected.value == 'RON') {
        let conversionRate=.058;        ;
        let result=userInput.value*conversionRate;
        output.innerHTML=result+'  RON';
       // alert(result+' RON');
    }
    else {
        alert('not implemented')
    }

}

