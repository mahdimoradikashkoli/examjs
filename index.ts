import {adadArraytype} from "./src/types"
import {input , generateRandom , calculateDigits , clear} from "./src/importer.js";

import {showGenerateRandom , showCalculateDigits , showClear , inputElementHandel} from "./src/event.js"

export const adadArray:adadArraytype=[]


generateRandom?.addEventListener("click" , showGenerateRandom)
calculateDigits?.addEventListener("click" , showCalculateDigits)


clear?.addEventListener("click" , showClear)

input?.addEventListener("input", inputElementHandel);
console.log(adadArray)

// const inputValue =inputElement?.value;
//     const digitsArray =inputValue?.split('').map(Number) ;
//     adadArray.push(digitsArray)