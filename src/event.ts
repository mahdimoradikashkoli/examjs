 import {adadArraytype} from "./types"
 import{adadArray} from "./../index.js"
 export const showGenerateRandom=() => {
    const randomNumber:number=Math.floor(Math.random() * 90000) + 10000;
    input?.value=randomNumber};
 export const showCalculateDigits=() => {
    
    function prime(nth:number) {
        var adadArray = [2];
        var isPrime = true;

            for(var i = 3; i <=input?.value; i++) { 
                isPrime = true;
                 for(var j = 2; j < i; j++) {
                     if(i % j === 0) {
                         isPrime = false;
                          break;
                        
                        } 
                    }
                         if(isPrime === true) {
                            adadArray.push(i); 
                            } 
            } 
            return adadArray; 
    } 
    adadArray.push(prime())};

 export const showClear= () => {
    input?.value="";
    function clearArray(array:adadArraytype) {
        array.splice(0, array.length);
    }
    clearArray(adadArray);
    return showClear;
};

 export const inputElementHandel= () => {
    if (!/^\d{5}$/.test(input.value)) {
        alert("لطفاً یک عدد پنج رقمی وارد کنید");
        input.value = '';
        
    }
};