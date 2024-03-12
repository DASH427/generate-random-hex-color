
let lettersIncluded = 'ABCDEF';
let numbersIncluded = '0123456789';
const hexLength = 6;
/* let count = 0; */



let countNum ='';
countNum+=lettersIncluded;
countNum+=numbersIncluded;



/* console.log(generatedHexa); */
document.getElementById('myButton').onclick = function () {
    let generatedHexa= '';

    for(i=0;i<hexLength;i++) {
        let count = Math.floor(Math.random()*16);
        generatedHexa+=countNum[count++];
    }

    document.getElementById('mySpan').innerHTML= generatedHexa;
    document.getElementById('container1').style.backgroundColor='#'+generatedHexa;


    
    
}